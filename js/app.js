const state = {
  currentView: 'home', // 'home' | 'category' | 'detail' | 'gallery' | 'admin'
  selectedCity: 'hyderabad',
  selectedLanguage: 'telugu',
  currentCategoryId: null,
  currentServiceId: null
};

// Firebase Cloud Configuration & Global Realtime Sync
window.VPP_CLOUD_IMAGES = {};
let db = null;

try {
  if (typeof firebase !== 'undefined') {
    const firebaseConfig = window.FIREBASE_CONFIG || {
      apiKey: "AIzaSyVPP-SacredPoojaCloudKey2026",
      authDomain: "vedic-pooja-pandit.firebaseapp.com",
      projectId: "vedic-pooja-pandit",
      storageBucket: "vedic-pooja-pandit.appspot.com",
      messagingSenderId: "9014747545",
      appId: "1:9014747545:web:vpp2026cloudsync"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();

    // Listen for Realtime Cloud Database updates across all devices
    db.collection("custom_images").onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data && data.image) {
          window.VPP_CLOUD_IMAGES[doc.id] = data.image;
        }
      });
      // Refresh current view if images updated live
      if (state.currentView === 'home') renderHome();
      else if (state.currentView === 'category' && state.currentCategoryId) renderCategory(state.currentCategoryId);
      else if (state.currentView === 'all-services') renderAllServices();
    }, (error) => {
      console.warn("Cloud DB realtime listener running in offline mode.");
    });
  }
} catch (e) {
  console.warn("Cloud DB fallback mode:", e);
}

// Mobile Photo Compressor Helper (Scales mobile camera photo to 800px @ 80% JPEG)
function compressImageFile(file, callback) {
  if (!file || !file.type || !file.type.startsWith('image/')) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => callback(e.target.result);
      reader.readAsDataURL(file);
    }
    return;
  }

  const reader = new FileReader();
  reader.onload = function(evt) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;
      const MAX_WIDTH = 800;

      if (width > MAX_WIDTH) {
        height = Math.round((height * MAX_WIDTH) / width);
        width = MAX_WIDTH;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
      callback(compressedDataUrl);
    };
    img.onerror = function() {
      callback(evt.target.result);
    };
    img.src = evt.target.result;
  };
  reader.readAsDataURL(file);
}

function getCustomPrices() {
  try {
    return JSON.parse(localStorage.getItem('vpp_custom_prices') || '{}');
  } catch (e) {
    return {};
  }
}

function saveCustomPrice(serviceId, priceMin, priceMax) {
  const prices = getCustomPrices();
  prices[serviceId] = {
    priceMin: parseInt(priceMin) || 0,
    priceMax: parseInt(priceMax) || 0
  };
  localStorage.setItem('vpp_custom_prices', JSON.stringify(prices));
}

function getCustomImages() {
  try {
    const local = JSON.parse(localStorage.getItem('vpp_custom_images') || '{}');
    return { ...window.VPP_CLOUD_IMAGES, ...local };
  } catch (e) {
    return window.VPP_CLOUD_IMAGES || {};
  }
}

function saveCustomImage(serviceId, imageData) {
  // 1. Save to Local Memory
  window.VPP_CLOUD_IMAGES[serviceId] = imageData;
  try {
    const images = JSON.parse(localStorage.getItem('vpp_custom_images') || '{}');
    images[serviceId] = imageData;
    localStorage.setItem('vpp_custom_images', JSON.stringify(images));
  } catch (e) {}

  // 2. Save to Firebase Cloud Database (Reflects live on all devices globally)
  if (db) {
    try {
      db.collection("custom_images").doc(serviceId).set({
        image: imageData,
        updatedAt: new Date().toISOString()
      }).then(() => {
        showToast('☁️ Saved to Cloud! Visible on all devices globally.');
      }).catch((err) => {
        console.warn("Cloud DB save fallback:", err);
      });
    } catch (e) {}
  }
}

function resetCustomService(serviceId) {
  const prices = getCustomPrices();
  delete prices[serviceId];
  localStorage.setItem('vpp_custom_prices', JSON.stringify(prices));

  const images = getCustomImages();
  delete images[serviceId];
  localStorage.setItem('vpp_custom_images', JSON.stringify(images));
}

function getEffectiveService(service) {
  if (!service) return service;
  const prices = getCustomPrices();
  const images = getCustomImages();
  
  const customP = prices[service.id];
  const customImg = images[service.id];

  return {
    ...service,
    priceMin: customP ? customP.priceMin : service.priceMin,
    priceMax: customP ? customP.priceMax : service.priceMax,
    image: customImg ? customImg : service.image
  };
}

function showToast(message) {
  let toast = document.getElementById('vpp-toast-el');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'vpp-toast-el';
    toast.className = 'vpp-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="vpp-toast__icon">🕉️</span> <span>${message}</span>`;
  toast.classList.add('vpp-toast--show');
  setTimeout(() => {
    toast.classList.remove('vpp-toast--show');
  }, 3000);
}

// Image mapping helper function
function getServiceImage(rawService) {
  const service = getEffectiveService(rawService);
  if (service && service.image) return service.image;
  
  const specificImages = {
    'satyanarayana-pooja': 'assets/images/satyanarayana_pooja.png',
    'gruhapravesam': 'assets/images/gruhapravesam.png',
    'chandi-homam': 'assets/images/chandi_homam.png',
    'marriage': 'assets/images/marriage.png',
    'ganapati-pooja': 'assets/images/ganapati_pooja.png',
    'varalakshmi-pooja': 'assets/images/varalakshmi_vratham.png',
    'upanayanam': 'assets/images/upanayanam.png',
    'vastu-shanti-pooja': 'assets/images/vastu_shanti.png',
    'rudrabhishekam-pooja': 'assets/images/rudrabhishekam.png',
    'ayudha-pooja': 'assets/images/ayudha_pooja.png'
  };
  
  if (specificImages[service.id]) {
    return specificImages[service.id];
  }
  
  // Use dynamically matched image if available
  if (window.SERVICE_IMAGES && window.SERVICE_IMAGES[service.id]) {
    return window.SERVICE_IMAGES[service.id];
  }
  
  const fallbacks = {
    ceremony: 'assets/images/ceremony.png',
    pooja: 'assets/images/devotion.png',
    homam: 'assets/images/homam.png',
    shanti: 'assets/images/devotion.png',
    parihar: 'assets/images/devotion.png',
    devi: 'assets/images/devi_default.png',
    ancestor: 'assets/images/ancestor_default.png',
    vratam: 'assets/images/devotion.png',
    festival: 'assets/images/devotion.png'
  };
  
  return fallbacks[service.imageType] || 'assets/images/devotion.png';
}

function init() {
  initDropdowns();
  handleRoute();
  window.addEventListener('hashchange', handleRoute);
  
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 0) {
      header.classList.add('vpp-header--scrolled');
    } else {
      header.classList.remove('vpp-header--scrolled');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.vpp-dropdown').forEach(dropdown => {
        dropdown.classList.remove('vpp-dropdown--open');
      });
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function initDropdowns() {
  const cityBtn = document.getElementById('city-btn');
  const langBtn = document.getElementById('lang-btn');
  const cityDropdown = document.getElementById('city-dropdown');
  const langDropdown = document.getElementById('lang-dropdown');
  const cityMenu = document.getElementById('city-menu');
  const langMenu = document.getElementById('lang-menu');
  const cityText = document.getElementById('city-text');
  const langText = document.getElementById('lang-text');

  // Populate menus
  if (window.APP_DATA && window.APP_DATA.cities) {
    cityMenu.innerHTML = window.APP_DATA.cities.map(city => 
      `<div class="vpp-dropdown__item ${city.id === state.selectedCity ? 'vpp-dropdown__item--active' : ''}" data-value="${city.id}">${city.name}</div>`
    ).join('');
  }

  if (window.APP_DATA && window.APP_DATA.languages) {
    langMenu.innerHTML = window.APP_DATA.languages.map(lang => 
      `<div class="vpp-dropdown__item ${lang.id === state.selectedLanguage ? 'vpp-dropdown__item--active' : ''}" data-value="${lang.id}">${lang.name}</div>`
    ).join('');
  }

  // Toggle dropdowns
  cityBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.remove('vpp-dropdown--open');
    cityDropdown.classList.toggle('vpp-dropdown--open');
  });

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    cityDropdown.classList.remove('vpp-dropdown--open');
    langDropdown.classList.toggle('vpp-dropdown--open');
  });

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    cityDropdown.classList.remove('vpp-dropdown--open');
    langDropdown.classList.remove('vpp-dropdown--open');
  });

  // Handle item clicks
  cityMenu.addEventListener('click', (e) => {
    const item = e.target.closest('.vpp-dropdown__item');
    if (item) {
      state.selectedCity = item.dataset.value;
      cityText.textContent = item.textContent;
      document.querySelectorAll('#city-menu .vpp-dropdown__item').forEach(el => el.classList.remove('vpp-dropdown__item--active'));
      item.classList.add('vpp-dropdown__item--active');
    }
  });

  langMenu.addEventListener('click', (e) => {
    const item = e.target.closest('.vpp-dropdown__item');
    if (item) {
      state.selectedLanguage = item.dataset.value;
      langText.textContent = item.textContent;
      document.querySelectorAll('#lang-menu .vpp-dropdown__item').forEach(el => el.classList.remove('vpp-dropdown__item--active'));
      item.classList.add('vpp-dropdown__item--active');
      handleRoute();
    }
  });

  const footerCityLinks = document.getElementById('footer-city-links');
  if (footerCityLinks) {
    footerCityLinks.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-city]');
      if (link) {
        const cityId = link.dataset.city;
        state.selectedCity = cityId;
        const cityObj = (window.APP_DATA.cities || []).find(c => c.id === cityId);
        if (cityObj && cityText) {
          cityText.textContent = cityObj.name;
        }
        document.querySelectorAll('#city-menu .vpp-dropdown__item').forEach(el => {
          el.classList.toggle('vpp-dropdown__item--active', el.dataset.value === cityId);
        });
      }
    });
  }
}

function handleRoute() {
  const hash = window.location.hash;
  
  if (hash.startsWith('#/admin')) {
    renderAdmin();
    return;
  } else if (hash === '#/all-services') {
    renderAllServices();
    return;
  } else if (hash === '#/gallery') {
    renderGallery();
    return;
  } else if (hash.startsWith('#/service/')) {
    const parts = hash.split('/');
    if (parts.length === 4) {
      const categoryId = parts[2];
      const serviceId = parts[3];
      renderDetail(categoryId, serviceId);
      return;
    }
  } else if (hash.startsWith('#/category/')) {
    const parts = hash.split('/');
    if (parts.length === 3) {
      const categoryId = parts[2];
      renderCategory(categoryId);
      return;
    }
  }
  
  renderHome();
}

function renderGroupedServices(services, categoryId, langName) {
  const groups = {};
  services.forEach(serv => {
    const grp = serv.group || 'Pujas';
    if (!groups[grp]) groups[grp] = [];
    groups[grp].push(serv);
  });

  const groupIcons = {
    'Pujas': '📿',
    'Ceremonies': '🪔',
    'Havans': '🔥',
    'Festival pujas': '🎊',
    'Jaaps': '📿',
    'Paths': '📖',
    'Shanti pujas': '☮️'
  };

  let html = '';
  for (const groupName in groups) {
    const groupIcon = groupIcons[groupName] || '📿';
    const groupCards = groups[groupName].map(service => {
      const imageUrl = getServiceImage(service);
      return `
        <div class="vpp-service-card slide-up" data-category="${categoryId}" data-service="${service.id}" onclick="window.location.hash='#/service/${categoryId}/${service.id}'">
          <div class="vpp-service-card__image-wrap">
            <img src="${imageUrl}" class="vpp-service-card__img" alt="${service.name}" loading="lazy">
            <div class="vpp-service-card__gradient"></div>
            <span class="vpp-service-card__badge">${service.group || langName + ' Puja'}</span>
          </div>
          <div class="vpp-service-card__body">
            <h3 class="vpp-service-card__title">${service.name}</h3>
            <p class="vpp-service-card__excerpt">${service.shortDesc || ''}</p>
            <div class="vpp-service-card__footer">
              <span class="vpp-service-card__price">₹${service.priceMin ? service.priceMin.toLocaleString('en-IN') : '0'}</span>
              <span class="vpp-service-card__rating">
                <span class="vpp-service-card__stars">${renderStars(service.rating || 0)}</span>
                ${service.rating || 0}
              </span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    html += `
      <div class="vpp-service-group-block" style="margin-bottom: 40px;">
        <div class="vpp-subheader-banner" style="margin-bottom: 20px;">
          <span class="vpp-subheader-title">${groupIcon} ${groupName}</span>
        </div>
        <div class="vpp-services-grid">
          ${groupCards}
        </div>
      </div>
    `;
  }
  return html;
}

function renderHome() {
  state.currentView = 'home';
  document.getElementById('hero-section').classList.remove('hidden');
  document.getElementById('breadcrumb').classList.add('hidden');
  
  if (!window.APP_DATA || !window.APP_DATA.categories) return;

  const content = document.getElementById('app-content');
  
  const currentLang = state.selectedLanguage || 'telugu';
  const langObj = (window.APP_DATA.languages || []).find(l => l.id === currentLang);
  const langName = langObj ? langObj.name : currentLang;

  // Filter categories matching current selected language
  let visibleCategories = window.APP_DATA.categories.filter(c => {
    if (currentLang === 'telugu' || currentLang === 'english') {
      return !c.defaultLanguage || c.defaultLanguage === 'telugu';
    }
    return c.defaultLanguage === currentLang;
  });

  // Fallback if no specific categories defined for selected language yet
  if (visibleCategories.length === 0) {
    visibleCategories = window.APP_DATA.categories.filter(c => !c.defaultLanguage || c.defaultLanguage === 'telugu');
  }

  let categoriesHtml = visibleCategories.map(category => `
    <div class="vpp-category-card slide-up" data-category="${category.id}" onclick="window.location.hash='#/category/${category.id}'">
      <div class="vpp-category-card__icon-wrap" style="background: ${category.gradient}">
        <span class="vpp-category-card__icon">${category.icon}</span>
      </div>
      <div class="vpp-category-card__content">
        <h3 class="vpp-category-card__title">${category.name}</h3>
        <p class="vpp-category-card__count">${category.services ? category.services.length : 0} services</p>
      </div>
      <span class="vpp-category-card__arrow">→</span>
    </div>
  `).join('');

  content.innerHTML = `
    <section class="vpp-section">
      <div class="container">
        <div class="vpp-section__header">
          <div style="display: flex; justify-content: center; margin-bottom: 8px;">
            <span class="vpp-badge--gold">Language: ${langName}</span>
          </div>
          <h2 class="vpp-section__title">${langName} Sacred Categories</h2>
          <p class="vpp-section__subtitle">Explore authentic ${langName} ritual categories performed by certified priests</p>
        </div>
        <div class="vpp-categories-grid">
          ${categoriesHtml}
        </div>
      </div>
    </section>
  `;
  
  initScrollObserver();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAllServices() {
  state.currentView = 'all-services';
  document.getElementById('hero-section').classList.add('hidden');
  document.getElementById('breadcrumb').classList.remove('hidden');
  
  renderBreadcrumb([
    { label: 'Home', hash: '#/' },
    { label: 'All Rituals', hash: '' }
  ]);
  
  if (!window.APP_DATA || !window.APP_DATA.categories) return;

  const content = document.getElementById('app-content');
  
  const currentLang = state.selectedLanguage || 'telugu';
  const langObj = (window.APP_DATA.languages || []).find(l => l.id === currentLang);
  const langName = langObj ? langObj.name : currentLang;

  let targetCategories = window.APP_DATA.categories.filter(c => {
    if (currentLang === 'telugu' || currentLang === 'english') {
      return !c.defaultLanguage || c.defaultLanguage === 'telugu';
    }
    return c.defaultLanguage === currentLang;
  });

  if (targetCategories.length === 0) {
    targetCategories = window.APP_DATA.categories.filter(c => !c.defaultLanguage || c.defaultLanguage === 'telugu');
  }

  let categoriesHtml = targetCategories.map(category => {
    let servicesListHtml = (category.services || []).map(service => `
      <a href="#/service/${category.id}/${service.id}" class="vpp-all-services__item">
        <span class="vpp-all-services__item-icon">${category.icon}</span>
        <span class="vpp-all-services__item-name">${service.name}</span>
      </a>
    `).join('');
    
    return `
      <div class="vpp-all-services__group slide-up">
        <div class="vpp-all-services__category-header" style="background: ${category.gradient}">
          <span class="vpp-all-services__category-icon">${category.icon}</span>
          <h3 class="vpp-all-services__category-title">${category.name} (${category.services ? category.services.length : 0})</h3>
        </div>
        <div class="vpp-all-services__list">
          ${servicesListHtml}
        </div>
      </div>
    `;
  }).join('');

  content.innerHTML = `
    <section class="vpp-section" style="padding-top: 40px">
      <div class="container">
        <div class="vpp-section__header">
          <h2 class="vpp-section__title">${langName} Sacred Categories</h2>
          <p class="vpp-section__subtitle">Browse all authentic ${langName} services and ceremonies by category</p>
        </div>
        <div class="vpp-all-services-grid">
          ${categoriesHtml}
        </div>
      </div>
    </section>
  `;
  
  initScrollObserver();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function renderCategory(categoryId) {
  state.currentView = 'category';
  document.getElementById('hero-section').classList.add('hidden');
  document.getElementById('breadcrumb').classList.remove('hidden');
  
  const category = findCategory(categoryId);
  if (!category) {
    window.location.hash = '#/';
    return;
  }
  
  renderBreadcrumb([
    { label: 'Home', hash: '#/' },
    { label: category.name, hash: '' }
  ]);
  
  const content = document.getElementById('app-content');
  
  let servicesHtml = (category.services || []).map(service => {
    const imageUrl = getServiceImage(service);
    return `
      <div class="vpp-service-card slide-up" data-category="${categoryId}" data-service="${service.id}" onclick="window.location.hash='#/service/${categoryId}/${service.id}'">
        <div class="vpp-service-card__image-wrap">
          <img src="${imageUrl}" class="vpp-service-card__img" alt="${service.name}" loading="lazy">
          <div class="vpp-service-card__gradient"></div>
          <span class="vpp-service-card__badge">${category.name}</span>
        </div>
        <div class="vpp-service-card__body">
          <h3 class="vpp-service-card__title">${service.name}</h3>
          <p class="vpp-service-card__excerpt">${service.shortDesc || ''}</p>
          <div class="vpp-service-card__footer">
            <span class="vpp-service-card__price">₹${service.priceMin ? service.priceMin.toLocaleString('en-IN') : '0'}</span>
            <span class="vpp-service-card__rating">
              <span class="vpp-service-card__stars">${renderStars(service.rating || 0)}</span>
              ${service.rating || 0}
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  let subheaderHtml = category.subheader ? `
    <div class="vpp-subheader-banner">
      <span class="vpp-subheader-title">📿 ${category.subheader}</span>
    </div>
  ` : '';

  content.innerHTML = `
    <section class="vpp-section" style="padding-top: 40px">
      <div class="container">
        <div class="vpp-services">
          <div class="vpp-services__header">
            <h2 class="vpp-services__title">${category.name}</h2>
            <span class="vpp-services__count">${category.services ? category.services.length : 0} services available</span>
          </div>
          ${subheaderHtml}
          <div class="vpp-services-grid">
            ${servicesHtml}
          </div>
        </div>
      </div>
    </section>
  `;
  
  initScrollObserver();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDetail(categoryId, serviceId) {
  state.currentView = 'detail';
  document.getElementById('hero-section').classList.add('hidden');
  document.getElementById('breadcrumb').classList.remove('hidden');
  
  const category = findCategory(categoryId);
  const service = findService(categoryId, serviceId);
  
  if (!category || !service) {
    window.location.hash = '#/';
    return;
  }
  
  renderBreadcrumb([
    { label: 'Home', hash: '#/' },
    { label: category.name, hash: `#/category/${categoryId}` },
    { label: service.name, hash: '' }
  ]);
  
  const content = document.getElementById('app-content');
  const imageUrl = getServiceImage(service);
  
  const insightsHtml = (service.keyInsights || []).map(i => `<li class="vpp-detail__insight-item">${i}</li>`).join('');
  const promiseHtml = (service.promise || []).map(p => `<li class="vpp-detail__promise-item">${p}</li>`).join('');

  const cityObj = (window.APP_DATA.cities || []).find(c => c.id === state.selectedCity);
  const cityName = cityObj ? cityObj.name : (state.selectedCity || 'Hyderabad');
  const waText = encodeURIComponent(`Namaste! Karunakar pandit, I would like to book the ${service.name} service in ${cityName}.`);

  content.innerHTML = `
    <section class="vpp-detail">
      <div class="container">
        <div class="vpp-detail__grid">
          <div class="vpp-detail__gallery slide-in-left">
            <div class="vpp-detail__img-container">
              <img src="${imageUrl}" class="vpp-detail__img" alt="${service.name}">
            </div>
          </div>
          <div class="vpp-detail__info slide-in-right">
            <span class="vpp-detail__tag">${category.name}</span>
            <h1 class="vpp-detail__title">${service.name}</h1>
            <div class="vpp-detail__rating-row">
              <div class="vpp-detail__stars">${renderDetailStars(service.rating || 0)}</div>
              <span class="vpp-detail__reviews">(${service.reviewCount || 0} customer reviews)</span>
            </div>
            <div class="vpp-detail__price-box">
              <div class="vpp-detail__price-label">Price Range:</div>
              <div class="vpp-detail__price-value">₹${service.priceMin ? service.priceMin.toLocaleString('en-IN') : '0'} - ₹${service.priceMax ? service.priceMax.toLocaleString('en-IN') : '0'}</div>
            </div>
            <p class="vpp-detail__description">${service.description || ''}</p>
            <div class="vpp-detail__section">
              <h3 class="vpp-detail__section-title">✦ Key Insights</h3>
              <ul class="vpp-detail__insights-list">
                ${insightsHtml}
              </ul>
            </div>
            <div class="vpp-detail__section">
              <h3 class="vpp-detail__section-title">🤝 Our Promise</h3>
              <ul class="vpp-detail__promise-list">
                ${promiseHtml}
              </ul>
            </div>
            <div class="vpp-detail__actions">
              <a href="https://wa.me/919014747545?text=${waText}" target="_blank" class="vpp-btn vpp-btn--primary" style="display: inline-flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: var(--shadow-gold);">🪔 Book Now</a>
              <a href="https://wa.me/919014747545?text=${waText}" target="_blank" class="vpp-btn vpp-btn--whatsapp" style="display: inline-flex; align-items: center; justify-content: center; text-decoration: none;">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  
  initScrollObserver();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderBreadcrumb(items) {
  const list = document.getElementById('breadcrumb-list');
  list.innerHTML = items.map((item, i) => {
    if (i < items.length - 1) {
      return `<li class="vpp-breadcrumb__item"><a href="${item.hash}" class="vpp-breadcrumb__link">${item.label}</a></li>
              <li class="vpp-breadcrumb__separator">›</li>`;
    } else {
      return `<li class="vpp-breadcrumb__item"><span class="vpp-breadcrumb__current">${item.label}</span></li>`;
    }
  }).join('');
}

function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) stars += '★';
    else if (i - 0.5 <= rating) stars += '★'; 
    else stars += '☆';
  }
  return stars;
}

function renderDetailStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += '<span class="vpp-detail__star vpp-detail__star--filled">★</span>';
    } else if (i - 0.5 <= rating) {
      html += '<span class="vpp-detail__star vpp-detail__star--filled">★</span>';
    } else {
      html += '<span class="vpp-detail__star vpp-detail__star--empty">☆</span>';
    }
  }
  return html;
}

function findCategory(categoryId) {
  if (!window.APP_DATA || !window.APP_DATA.categories) return null;
  return window.APP_DATA.categories.find(c => c.id === categoryId);
}

function findService(categoryId, serviceId) {
  const category = findCategory(categoryId);
  if (!category || !category.services) return null;
  return category.services.find(s => s.id === serviceId);
}

function getCategoryGradient(imageType) {
  const gradients = {
    ceremony: 'linear-gradient(135deg, #E65100, #FF9933)',
    pooja: 'linear-gradient(135deg, #C41E3A, #FF6B6B)',
    homam: 'linear-gradient(135deg, #FF6B00, #FFA000)',
    shanti: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
    parihar: 'linear-gradient(135deg, #5C0614, #C41E3A)',
    devi: 'linear-gradient(135deg, #7B1FA2, #CE93D8)',
    ancestor: 'linear-gradient(135deg, #4E342E, #8D6E63)',
    vratam: 'linear-gradient(135deg, #1565C0, #42A5F5)',
    festival: 'linear-gradient(135deg, #F9A825, #FFEE58)'
  };
  return gradients[imageType] || gradients.ceremony;
}

function initScrollObserver() {
  if (typeof IntersectionObserver === 'undefined') return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.slide-up, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });
}

function renderGallery() {
  state.currentView = 'gallery';
  document.getElementById('hero-section').classList.add('hidden');
  document.getElementById('breadcrumb').classList.remove('hidden');
  
  renderBreadcrumb([
    { label: 'Home', hash: '#/' },
    { label: 'Pooja Gallery', hash: '' }
  ]);
  
  const content = document.getElementById('app-content');
  
  const currentLang = state.selectedLanguage || 'telugu';
  let targetCategories = (window.APP_DATA.categories || []).filter(c => {
    if (currentLang === 'telugu' || currentLang === 'english') {
      return !c.defaultLanguage || c.defaultLanguage === 'telugu';
    }
    return c.defaultLanguage === currentLang;
  });

  if (targetCategories.length === 0) {
    targetCategories = (window.APP_DATA.categories || []).filter(c => !c.defaultLanguage || c.defaultLanguage === 'telugu');
  }

  let allServices = [];
  targetCategories.forEach(cat => {
    if (cat.services) {
      cat.services.forEach(serv => {
        allServices.push({
          ...serv,
          categoryName: cat.name,
          categoryId: cat.id,
          categoryIcon: cat.icon
        });
      });
    }
  });

  const categoriesList = targetCategories;
  let filterButtonsHtml = `<button class="vpp-gallery-filter-btn vpp-gallery-filter-btn--active" data-filter="all">All Poojas</button>`;
  filterButtonsHtml += categoriesList.map(cat => 
    `<button class="vpp-gallery-filter-btn" data-filter="${cat.id}">${cat.name}</button>`
  ).join('');

  function buildGridHtml(filteredServices) {
    return filteredServices.map(service => {
      const imageUrl = getServiceImage(service);
      return `
        <div class="vpp-gallery-card slide-up" data-category="${service.categoryId}">
          <div class="vpp-gallery-card__image-container">
            <img src="${imageUrl}" class="vpp-gallery-card__img" alt="${service.name}" loading="lazy">
            <span class="vpp-gallery-card__tag">${service.categoryName}</span>
            <div class="vpp-gallery-card__overlay">
              <a href="#/service/${service.categoryId}/${service.id}" class="vpp-gallery-card__btn" title="View Details" style="width: auto; height: auto; padding: 10px 20px; border-radius: 50px;">👁️ View Details</a>
            </div>
          </div>
          <div class="vpp-gallery-card__body">
            <div>
              <h4 class="vpp-gallery-card__title">${service.name}</h4>
              <p class="vpp-gallery-card__desc">${service.shortDesc || ''}</p>
            </div>
            <div class="vpp-gallery-card__actions">
              <a href="#/service/${service.categoryId}/${service.id}" class="vpp-gallery-card__view-link" style="flex-grow: 1; text-align: center;">
                View Details
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  content.innerHTML = `
    <section class="vpp-section vpp-gallery-section">
      <div class="container">
        <div class="vpp-section__header">
          <h2 class="vpp-section__title">Divine Image Gallery</h2>
          <p class="vpp-section__subtitle">Explore and download high-quality images of our sacred poojas, homams, and ceremonies</p>
        </div>
        
        <div class="vpp-gallery-filter-bar" id="gallery-filter-bar">
          ${filterButtonsHtml}
        </div>
        
        <div class="vpp-gallery-grid" id="gallery-grid">
          ${buildGridHtml(allServices)}
        </div>
      </div>
    </section>
  `;

  const filterBar = document.getElementById('gallery-filter-bar');
  const grid = document.getElementById('gallery-grid');
  
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.vpp-gallery-filter-btn');
    if (!btn) return;
    
    filterBar.querySelectorAll('.vpp-gallery-filter-btn').forEach(b => b.classList.remove('vpp-gallery-filter-btn--active'));
    btn.classList.add('vpp-gallery-filter-btn--active');
    
    const filter = btn.dataset.filter;
    const cards = grid.querySelectorAll('.vpp-gallery-card');
    
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });

  initScrollObserver();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAdmin() {
  state.currentView = 'admin';
  const hero = document.getElementById('hero-section');
  if (hero) hero.classList.add('hidden');
  
  const breadcrumb = document.getElementById('breadcrumb');
  if (breadcrumb) breadcrumb.classList.remove('hidden');

  const hash = window.location.hash || '#/admin';
  let initialSearch = '';
  let initialCategory = 'all';

  if (hash.includes('/category/')) {
    const parts = hash.split('/');
    if (parts[3]) initialCategory = parts[3];
  } else if (hash.includes('/service/')) {
    const parts = hash.split('/');
    const targetServiceId = parts[parts.length - 1];
    (window.APP_DATA.categories || []).forEach(c => {
      (c.services || []).forEach(s => {
        if (s.id === targetServiceId) {
          initialSearch = s.name;
          initialCategory = c.id;
        }
      });
    });
  }
  
  renderBreadcrumb([
    { label: 'Home', hash: '#/' },
    { label: 'Admin Portal', hash: '#/admin' }
  ]);

  const content = document.getElementById('app-content');
  if (!content) return;

  // Check Admin Session Authentication
  let isAuth = false;
  try {
    isAuth = sessionStorage.getItem('vpp_admin_auth') === 'true';
  } catch (e) {
    isAuth = false;
  }

  if (!isAuth) {
    content.innerHTML = `
      <section class="vpp-section" style="padding-top: 40px;">
        <div class="container">
          <div class="vpp-admin-login-card" style="opacity: 1; visibility: visible;">
            <span style="font-size: 3.2rem;">🔐</span>
            <h2 style="color: var(--color-gold); font-size: 1.8rem; margin: 12px 0 6px 0;">Pandit Admin Login</h2>
            <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.9rem; margin-bottom: 24px;">Enter credentials to manage prices and custom images.</p>
            
            <div style="text-align: left; margin-bottom: 16px;">
              <label style="color: var(--color-gold); font-size: 0.8rem; font-weight: 600; margin-bottom: 6px; display: block; letter-spacing: 0.5px;">ADMIN EMAIL</label>
              <input type="email" id="admin-email-input" class="vpp-admin-input" placeholder="admin@gmail.com" style="margin-bottom: 0;" autofocus>
            </div>

            <div style="text-align: left; margin-bottom: 24px;">
              <label style="color: var(--color-gold); font-size: 0.8rem; font-weight: 600; margin-bottom: 6px; display: block; letter-spacing: 0.5px;">PASSWORD</label>
              <input type="password" id="admin-pass-input" class="vpp-admin-input" placeholder="••••••••" style="margin-bottom: 0;">
            </div>

            <button id="admin-login-btn" class="vpp-btn vpp-btn--primary" style="width: 100%; border: none; padding: 12px; font-weight: 600; font-size: 1rem;">Login to Control Panel</button>
            
            <div id="admin-error-msg" style="color: #FF6B6B; font-size: 0.85rem; margin-top: 16px; display: none; background: rgba(255,0,0,0.15); padding: 10px 14px; border-radius: 6px; border: 1px solid rgba(255,0,0,0.3);">
              ⚠️ Invalid Email or Password! Please try again.
            </div>
          </div>
        </div>
      </section>
    `;

    const loginBtn = document.getElementById('admin-login-btn');
    const emailInput = document.getElementById('admin-email-input');
    const passInput = document.getElementById('admin-pass-input');
    const errorMsg = document.getElementById('admin-error-msg');

    function attemptLogin() {
      const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
      const pass = passInput ? passInput.value : '';

      if (email === 'admin@gmail.com' && pass === '12341234') {
        sessionStorage.setItem('vpp_admin_auth', 'true');
        renderAdmin();
      } else if (errorMsg) {
        errorMsg.style.display = 'block';
      }
    }

    if (loginBtn) loginBtn.addEventListener('click', attemptLogin);
    if (emailInput) emailInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') attemptLogin(); });
    if (passInput) passInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') attemptLogin(); });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Admin Authenticated View
  const languagesList = window.APP_DATA.languages || [];
  let currentAdminLang = state.selectedLanguage || 'telugu';
  let currentAdminCategory = initialCategory || 'all';

  function buildAdminUI() {
    let targetCategories = (window.APP_DATA.categories || []).filter(c => {
      if (currentAdminLang === 'telugu' || currentAdminLang === 'english') {
        return !c.defaultLanguage || c.defaultLanguage === 'telugu';
      }
      return c.defaultLanguage === currentAdminLang;
    });

    if (targetCategories.length === 0) {
      targetCategories = (window.APP_DATA.categories || []).filter(c => !c.defaultLanguage || c.defaultLanguage === 'telugu');
    }

    const currentLangObj = languagesList.find(l => l.id === currentAdminLang);
    const langName = currentLangObj ? currentLangObj.name : currentAdminLang;

    // Category cards HTML
    let categoryCardsHtml = targetCategories.map(cat => `
      <div class="vpp-category-card ${currentAdminCategory === cat.id ? 'vpp-category-card--active' : ''}" style="cursor: pointer; ${currentAdminCategory === cat.id ? 'border: 2px solid var(--color-gold); background: rgba(212,175,55,0.15);' : ''}" onclick="window.setAdminCategory('${cat.id}')">
        <div class="vpp-category-card__icon-wrap" style="background: ${cat.gradient}">
          <span class="vpp-category-card__icon">${cat.icon}</span>
        </div>
        <div class="vpp-category-card__content">
          <h3 class="vpp-category-card__title">${cat.name}</h3>
          <p class="vpp-category-card__count">${cat.services ? cat.services.length : 0} services</p>
        </div>
      </div>
    `).join('');

    content.innerHTML = `
      <section class="vpp-section" style="padding-top: 20px;">
        <div class="container">
          <!-- Control Panel Header -->
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 24px; background: var(--color-maroon-dark); padding: 20px 24px; border-radius: var(--radius-md); border: 1px solid rgba(212, 175, 55, 0.4);">
            <div>
              <h2 style="color: var(--color-gold); font-size: 1.6rem; margin: 0 0 4px 0;">🔐 Pandit Admin Control Panel</h2>
              <p style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin: 0;">Upload custom images for any pooja directly from mobile gallery, camera, or URL link.</p>
            </div>
            <div>
              <button id="admin-logout-btn" class="vpp-btn" style="background: rgba(229, 81, 0, 0.2); color: #FF9800; border: 1px solid #FF9800; font-size: 0.85rem; padding: 8px 16px;">🚪 Logout</button>
            </div>
          </div>

          <!-- Language Selector Bar -->
          <div style="background: #FFF; padding: 16px 20px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin-bottom: 24px; border: 1px solid var(--color-border);">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
              <span style="font-weight: 600; color: var(--text-dark); font-size: 0.95rem;">🌐 SELECT LANGUAGE TO EDIT IMAGES:</span>
              <span class="vpp-badge--gold">${langName} Selected</span>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              ${languagesList.map(lang => `
                <button class="vpp-btn ${currentAdminLang === lang.id ? 'vpp-btn--primary' : ''}" style="${currentAdminLang !== lang.id ? 'background: #F0F0F0; color: #333;' : ''} font-size: 0.85rem; padding: 6px 14px;" onclick="window.setAdminLanguage('${lang.id}')">
                  ${lang.name}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Language Category Cards Overview -->
          <div style="margin-bottom: 32px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h3 style="font-size: 1.2rem; color: var(--text-dark); margin: 0;">${langName} Categories</h3>
              <button class="vpp-btn" style="font-size: 0.8rem; padding: 4px 12px; background: ${currentAdminCategory === 'all' ? 'var(--color-saffron)' : '#E0E0E0'}; color: ${currentAdminCategory === 'all' ? '#FFF' : '#333'};" onclick="window.setAdminCategory('${currentAdminCategory === 'all' ? '' : 'all'}')">Show All Categories</button>
            </div>
            <div class="vpp-categories-grid">
              ${categoryCardsHtml}
            </div>
          </div>

          <!-- Search & Filter Bar -->
          <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 20px; align-items: center;">
            <input type="text" id="admin-search-input" value="${initialSearch}" placeholder="🔍 Search any pooja by name..." style="flex: 1; min-width: 240px; padding: 10px 16px; border-radius: 4px; border: 1px solid #CCC; font-size: 0.95rem;">
            <span id="admin-services-count" style="font-size: 0.9rem; font-weight: 500; color: var(--text-light);"></span>
          </div>

          <!-- Admin Service Cards Grid -->
          <div id="admin-services-grid" class="vpp-admin-grid"></div>
        </div>
      </section>
    `;

    // Window helper methods for category and language switching
    window.setAdminLanguage = function(langId) {
      currentAdminLang = langId;
      currentAdminCategory = 'all';
      buildAdminUI();
    };

    window.setAdminCategory = function(catId) {
      currentAdminCategory = catId;
      buildAdminUI();
    };

    // Render Grid
    updateAdminGrid();

    // Event listeners
    const searchInput = document.getElementById('admin-search-input');
    if (searchInput) searchInput.addEventListener('input', updateAdminGrid);

    const logoutBtn = document.getElementById('admin-logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('vpp_admin_auth');
        window.location.hash = '#/';
      });
    }
  }

  function updateAdminGrid() {
    const searchEl = document.getElementById('admin-search-input');
    const searchTerm = (searchEl && searchEl.value) ? String(searchEl.value).toLowerCase().trim() : '';

    let categoryList = (window.APP_DATA.categories || []).filter(c => {
      if (currentAdminLang === 'telugu' || currentAdminLang === 'english') {
        return !c.defaultLanguage || c.defaultLanguage === 'telugu';
      }
      return c.defaultLanguage === currentAdminLang;
    });

    if (categoryList.length === 0) {
      categoryList = (window.APP_DATA.categories || []).filter(c => !c.defaultLanguage || c.defaultLanguage === 'telugu');
    }

    if (currentAdminCategory !== 'all') {
      categoryList = categoryList.filter(c => c.id === currentAdminCategory);
    }

    let servicesToDisplay = [];
    categoryList.forEach(cat => {
      (cat.services || []).forEach(serv => {
        if (!searchTerm || serv.name.toLowerCase().includes(searchTerm)) {
          servicesToDisplay.push({
            ...serv,
            categoryId: cat.id,
            categoryName: cat.name,
            categoryIcon: cat.icon
          });
        }
      });
    });

    const countEl = document.getElementById('admin-services-count');
    if (countEl) countEl.textContent = `Showing ${servicesToDisplay.length} Poojas`;

    const gridEl = document.getElementById('admin-services-grid');
    if (!gridEl) return;

    if (servicesToDisplay.length === 0) {
      gridEl.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666; background: #FFF; border-radius: 8px;">No matching pooja services found for search/filter.</div>`;
      return;
    }

    gridEl.innerHTML = servicesToDisplay.map(s => {
      const eff = getEffectiveService(s);
      const activeImg = getServiceImage(eff);

      return `
        <div class="vpp-admin-card" data-service-id="${s.id}">
          <div class="vpp-admin-card__header">
            <img src="${activeImg}" class="vpp-admin-card__thumb" id="admin-thumb-${s.id}" alt="${s.name}">
            <div>
              <span style="font-size: 0.75rem; background: rgba(230,81,0,0.1); color: var(--color-saffron); padding: 2px 8px; border-radius: 4px; font-weight: 600;">${s.categoryIcon || '📿'} ${s.categoryName}</span>
              <h4 class="vpp-admin-card__title" style="margin-top: 4px;">${s.name}</h4>
            </div>
          </div>

          <div style="background: #F9F9F9; padding: 12px; border-radius: 6px; display: flex; flex-direction: column; gap: 10px; border: 1px dashed #DDD;">
            <span style="font-size: 0.8rem; font-weight: 600; color: #444;">📸 UPLOAD CUSTOM IMAGE:</span>
            <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
              <label class="vpp-admin-file-label" style="flex: 1; text-align: center;">
                📱 Mobile Gallery / Camera
                <input type="file" class="vpp-admin-file-input" data-service-id="${s.id}" accept="image/*">
              </label>
              <button class="vpp-admin-btn-reset admin-url-btn" data-service-id="${s.id}" style="padding: 8px 12px;">🔗 URL Link</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach File Input Listeners (With Mobile Photo Compression & Cloud Sync)
    document.querySelectorAll('.vpp-admin-file-input').forEach(input => {
      input.addEventListener('change', (e) => {
        const serviceId = e.target.dataset.serviceId;
        const file = e.target.files[0];
        if (file) {
          showToast('⏳ Optimizing & uploading photo...');
          compressImageFile(file, (base64Data) => {
            saveCustomImage(serviceId, base64Data);
            const thumbEl = document.getElementById(`admin-thumb-${serviceId}`);
            if (thumbEl) thumbEl.src = base64Data;
          });
        }
      });
    });

    // Attach URL Listeners
    document.querySelectorAll('.admin-url-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const serviceId = e.target.dataset.serviceId;
        const url = prompt('Enter custom image URL link:');
        if (url && url.trim()) {
          saveCustomImage(serviceId, url.trim());
          const thumbEl = document.getElementById(`admin-thumb-${serviceId}`);
          if (thumbEl) thumbEl.src = url.trim();
          showToast('✅ Custom image URL saved!');
        }
      });
    });
  }

  buildAdminUI();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
