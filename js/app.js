const state = {
  currentView: 'home', // 'home' | 'category' | 'detail'
  selectedCity: 'hyderabad',
  selectedLanguage: 'telugu',
  currentCategoryId: null,
  currentServiceId: null
};

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
    }
  });
}

function handleRoute() {
  const hash = window.location.hash;
  
  if (hash === '#/all-services') {
    renderAllServices();
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

function renderHome() {
  state.currentView = 'home';
  document.getElementById('hero-section').classList.remove('hidden');
  document.getElementById('breadcrumb').classList.add('hidden');
  
  if (!window.APP_DATA || !window.APP_DATA.categories) return;

  const content = document.getElementById('app-content');
  
  let categoriesHtml = window.APP_DATA.categories.map(category => `
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
          <h2 class="vpp-section__title">Our Sacred Services</h2>
          <p class="vpp-section__subtitle">Choose from over 120 authentic Vedic rituals performed by certified priests</p>
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
  
  let categoriesHtml = window.APP_DATA.categories.map(category => {
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
          <h2 class="vpp-section__title">All Sacred Rituals</h2>
          <p class="vpp-section__subtitle">Browse our complete list of 104+ Vedic services and ceremonies</p>
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
  
  let servicesHtml = (category.services || []).map(service => `
    <div class="vpp-service-card slide-up" data-category="${categoryId}" data-service="${service.id}" onclick="window.location.hash='#/service/${categoryId}/${service.id}'">
      <div class="vpp-service-card__image-wrap">
        <div class="vpp-service-card__img" style="background: ${getCategoryGradient(service.imageType)}; display: flex; align-items: center; justify-content: center; font-size: 3rem;">${category.icon}</div>
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
  `).join('');

  content.innerHTML = `
    <section class="vpp-section" style="padding-top: 40px">
      <div class="container">
        <div class="vpp-services">
          <div class="vpp-services__header">
            <h2 class="vpp-services__title">${category.name}</h2>
            <span class="vpp-services__count">${category.services ? category.services.length : 0} services available</span>
          </div>
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
  const gradient = getCategoryGradient(service.imageType);
  
  const insightsHtml = (service.keyInsights || []).map(i => `<li class="vpp-detail__insight-item">${i}</li>`).join('');
  const promiseHtml = (service.promise || []).map(p => `<li class="vpp-detail__promise-item">${p}</li>`).join('');

  content.innerHTML = `
    <section class="vpp-detail">
      <div class="container">
        <div class="vpp-detail__grid">
          <div class="vpp-detail__gallery slide-in-left">
            <div class="vpp-detail__image-wrap">
              <div class="vpp-detail__img" style="background: ${gradient}; min-height: 450px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 5rem; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">${category.icon}</span>
              </div>
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
              <button class="vpp-btn vpp-btn--primary">🪔 Book Now</button>
              <button class="vpp-btn vpp-btn--whatsapp">💬 WhatsApp</button>
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
