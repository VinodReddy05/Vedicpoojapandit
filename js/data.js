window.APP_DATA = {
  cities: [
    { id: 'hyderabad', name: 'Hyderabad' },
    { id: 'bangalore', name: 'Bangalore' },
    { id: 'bhubaneswar', name: 'Bhubaneswar' },
    { id: 'chennai', name: 'Chennai' },
    { id: 'coimbatore', name: 'Coimbatore' },
    { id: 'delhi-ncr', name: 'Delhi - NCR' },
    { id: 'indore', name: 'Indore' },
    { id: 'kolkata', name: 'Kolkata' },
    { id: 'lucknow', name: 'Lucknow' },
    { id: 'mumbai', name: 'Mumbai' },
    { id: 'pune', name: 'Pune' },
    { id: 'visakhapatnam', name: 'Visakhapatnam' }
  ],
  defaultCity: 'hyderabad',

  languages: [
    { id: 'telugu', name: 'Telugu' },
    { id: 'hindi', name: 'Hindi' },
    { id: 'marathi', name: 'Marathi' },
    { id: 'gujarati', name: 'Gujarati' },
    { id: 'bengali', name: 'Bengali' },
    { id: 'malayalam', name: 'Malayalam' },
    { id: 'odia', name: 'Odia' },
    { id: 'tamil', name: 'Tamil' },
    { id: 'kannada', name: 'Kannada' },
    { id: 'english', name: 'English' }
  ],
  defaultLanguage: 'telugu',

  categories: [
    {
      id: 'gujarati-pujas',
      name: 'Pujas',
      icon: '📿',
      gradient: 'linear-gradient(135deg, #FF6B00, #E65100)',
      description: 'Traditional Gujarati Pujas and sacred worship rituals',
      defaultLanguage: 'gujarati',
      services: [
        {
          id: 'gujarati-annaprashan-puja',
          name: 'Annaprashan Puja',
          shortDesc: 'Sacred first grain feeding ritual for the baby as per Gujarati tradition.',
          description: 'Annaprashan is the traditional Gujarati first solid food feeding ritual. Performed in the 6th or 7th month, sacred Kheer/Kansu is offered to the baby after invoking Lord Vishnu and family deities for health and prosperity.',
          keyInsights: ['First grain feeding ceremony (Annaprashan).', 'Invokes blessings of Lord Ganesha and Kuldevi.', 'Silver coin and utensil ritual.', 'Ensures healthy digestion and growth.', 'Conducted by expert Gujarati Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 4500, priceMax: 9500, rating: 4.9, reviewCount: 38, duration: '1-2 hours', defaultLanguage: 'gujarati', imageType: 'ceremony'
        },
        {
          id: 'gujarati-bhoomi-puja',
          name: 'Bhoomi Puja',
          shortDesc: 'Land blessing and Vastu Shanti before starting construction.',
          description: 'Bhoomi Puja in Gujarati tradition is performed to seek permission and blessings from Bhumi Devi (Mother Earth) and Vastu Purusha before laying the foundation of a house or commercial property.',
          keyInsights: ['Purifies the plot and removes Vastu defects.', 'Invokes Bhumi Devi and Lord Ganesha.', 'Includes silver snake & coin sthapana.', 'Ensures safe and smooth construction.', 'Performed by certified Gujarati Purohits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 4800, priceMax: 9800, rating: 4.9, reviewCount: 42, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'pooja'
        },
        {
          id: 'gujarati-durga-puja',
          name: 'Durga Puja',
          shortDesc: 'Worship of Goddess Durga for divine protection and victory.',
          description: 'Durga Puja in Gujarati custom is celebrated with traditional Shodasopachara rituals, Durga Suktam, and Chandi Parayan to destroy negativity and bless the family with strength, peace, and health.',
          keyInsights: ['Invokes the fierce protective power of Maa Durga.', 'Destroys evil forces and removes fear.', 'Brings peace, vitality, and prosperity.', 'Ideal during Navratri or monthly Ashtami.', 'Conducted by senior Vedic Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 5000, priceMax: 12000, rating: 4.8, reviewCount: 45, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'pooja'
        },
        {
          id: 'gujarati-engagement-sagai',
          name: 'Engagement Puja - Sagai',
          shortDesc: 'Traditional Gujarati betrothal and ring exchange ceremony.',
          description: 'Sagai (Sagaai) is the holy Gujarati engagement ceremony. Involves Ganesha Puja, Lagna Patrika exchange, ring exchange, and family blessings for a harmonious marital union.',
          keyInsights: ['Formal Gujarati engagement ceremony (Sagai).', 'Reading of Lagna Patrika and auspicious Muhurat fixing.', 'Invokes blessings of Lord Ganesha and Goddess Lakshmi.', 'Exchange of rings, sweets, and gifts.', 'Performed by experienced Gujarati Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 5500, priceMax: 12500, rating: 4.9, reviewCount: 40, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'ceremony'
        },
        {
          id: 'gujarati-fix-your-muhurat',
          name: 'Fix Your Muhurat',
          shortDesc: 'Astrological consultation for fixing auspicious timings.',
          description: 'Consult expert Gujarati astrologers and Jyotish pandits to calculate the most auspicious Muhurat (timing) based on birth charts for marriage, housewarming, or new business.',
          keyInsights: ['Panchang calculation based on exact birth details.', 'Avoids Rahu Kaal and inauspicious planetary transits.', 'Tailored for marriage, Griha Pravesh, and business.', 'Ensures long-term success of the endeavor.', 'Provided by certified Gujarati Jyotishis.'],
          promise: ['Experienced Astrologers.', 'Accurate Panchang Calculation.', 'Detailed Report Provided.'],
          priceMin: 299, priceMax: 500, rating: 4.7, reviewCount: 50, duration: '1 hour', defaultLanguage: 'gujarati', imageType: 'pooja'
        },
        {
          id: 'gujarati-ganesh-puja',
          name: 'Ganesh Puja',
          shortDesc: 'Invocational worship of Lord Ganesha for removing hurdles.',
          description: 'Traditional Gujarati Ganesh Puja performed before starting any new venture, function, or festival. Invokes Siddhivinayak with Modak, Durva grass, and Vedic mantras.',
          keyInsights: ['First worship in Hindu tradition (Vighnaharta).', 'Removes obstacles and grants success.', 'Ideal for new beginnings and commercial starts.', 'Includes Shodasopachara Puja and Aarti.', 'Performed by certified Gujarati priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3500, priceMax: 7500, rating: 4.9, reviewCount: 52, duration: '1-2 hours', defaultLanguage: 'gujarati', imageType: 'pooja'
        },
        {
          id: 'gujarati-griha-pravesh',
          name: 'Griha Pravesh',
          shortDesc: 'Sacred Gujarati housewarming and Vastu purification ceremony.',
          description: 'Griha Pravesh is the traditional Gujarati housewarming ritual. Includes Vastu Puja, Ganesh Sthapana, Boiling Milk ritual, Surya Arghya, and Navagraha Havan to usher in peace and prosperity.',
          keyInsights: ['Traditional Gujarati housewarming (Griha Pravesh).', 'Includes Vastu Shanti and Boiling Milk ritual.', 'Drives away negative energies and spatial defects.', 'Invokes divine grace of Goddess Lakshmi & Lord Vishnu.', 'Complete Samagri and Vedic Pandit service.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 8800, priceMax: 25000, rating: 5.0, reviewCount: 60, duration: '3-4 hours', defaultLanguage: 'gujarati', imageType: 'ceremony'
        },
        {
          id: 'gujarati-janamdin-birthday-puja',
          name: 'Janamdin Puja - Birthday Puja',
          shortDesc: 'Auspicious birthday prayer for health, luck, and longevity.',
          description: 'Performed on birthdays to seek divine protection and longevity. Involves Ayushya Puja, Nakshatra Japam, Kuldevi Pujan, and Markandeya Rishi worship.',
          keyInsights: ['Invokes Ayur Devata for long life and health.', 'Removes planetary obstacles of the coming year.', 'Includes Markandeya Puja and Aarti.', 'Brings vitality and academic/career growth.', 'Conducted by experienced Gujarati priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3500, priceMax: 8500, rating: 4.8, reviewCount: 30, duration: '1-2 hours', defaultLanguage: 'gujarati', imageType: 'pooja'
        },
        {
          id: 'gujarati-laxmi-puja',
          name: 'Laxmi Puja',
          shortDesc: 'Worship of Goddess Laxmi for wealth, business profits, and luck.',
          description: 'Laxmi Puja in Gujarati tradition is performed to invoke Goddess Lakshmi for abundance and financial stability. Includes Lotus flowers, Kumkumarchana, and Dhan Puja.',
          keyInsights: ['Attracts wealth, business growth, and financial stability.', 'Ideal for Diwali Chopda Pujan, Fridays, or new starts.', 'Invokes Mahalakshmi and Lord Kubera.', 'Removes debts and financial struggles.', 'Performed by certified Gujarati Brahmins.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 4200, priceMax: 9500, rating: 4.9, reviewCount: 50, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'pooja'
        },
        {
          id: 'gujarati-mundan-chudakarana',
          name: 'Mundan or Chudakarana Ceremony',
          shortDesc: 'First head-shaving ritual for the child\'s health and purity.',
          description: 'Mundan (Chudakarana) is the sacred tonsure ceremony performed in the 1st or 3rd year. Shaving the birth hair symbolizes shedding past life karma, promoting scalp health and intellect.',
          keyInsights: ['Traditional first tonsure ceremony (Mundan).', 'Purifies child from birth impurities.', 'Promotes proper hair growth and brain development.', 'Includes Ayushya Puja and Kuldevi Pujan.', 'Conducted by specialized Vedic priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 4200, priceMax: 8800, rating: 4.7, reviewCount: 33, duration: '1-2 hours', defaultLanguage: 'gujarati', imageType: 'ceremony'
        },
        {
          id: 'gujarati-namkaran-puja',
          name: 'Namkaran Puja',
          shortDesc: 'Naming and blessing ceremony for the newborn child.',
          description: 'Namkaran Puja is the traditional naming ritual performed on the 11th, 12th, or 21st day after birth. The astrologically chosen name is whispered into the baby\'s right ear.',
          keyInsights: ['Formal naming of the newborn child.', 'Name calculated based on birth Nakshatra & Janam Rashi.', 'Whispering name into ear with honey & ghee.', 'Blessings for health, longevity, and prosperity.', 'Performed by certified Gujarati Purohits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 4500, priceMax: 10500, rating: 4.8, reviewCount: 40, duration: '1-2 hours', defaultLanguage: 'gujarati', imageType: 'ceremony'
        },
        {
          id: 'gujarati-office-opening-puja',
          name: 'Office Opening Puja',
          shortDesc: 'Inaugural worship for new business, office, or shop premises.',
          description: 'Performed before starting operations in a new commercial space in Gujarat. Includes Ganesha Sthapana, Laxmi-Kubera Puja, Vastu Shanti, and sanctified water sprinkling.',
          keyInsights: ['Ensures commercial success and high profitability.', 'Removes negative energies from the workspace.', 'Boosts employee morale and business luck.', 'Includes ribbon cutting muhurat and Aarti.', 'Conducted by expert Gujarati Vedic Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 5200, priceMax: 18500, rating: 4.9, reviewCount: 45, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'pooja'
        },
        {
          id: 'gujarati-rudrabhishek-puja',
          name: 'Rudrabhishek Puja',
          shortDesc: 'Sacred bath offering to Lord Shiva with Sri Rudram chanting.',
          description: 'Rudrabhishek is a powerful worship of Lord Shiva by bathing the Shivling with Panchamrut, Milk, Honey, and Gangajal while chanting Sri Rudram for health and peace.',
          keyInsights: ['Most revered worship for Lord Shiva.', 'Removes severe health ailments and karmic debts.', 'Fulfills desires and grants peace of mind.', 'Highly auspicious on Mondays and Pradosham.', 'Performed by senior Vedic Priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 4800, priceMax: 15000, rating: 5.0, reviewCount: 55, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'pooja'
        },
        {
          id: 'gujarati-saraswati-puja',
          name: 'Saraswati Puja',
          shortDesc: 'Worship of Maa Saraswati for wisdom, education, and arts.',
          description: 'Saraswati Puja is performed to seek the divine blessings of Goddess Saraswati for knowledge, memory, and artistic skills. Especially beneficial for students.',
          keyInsights: ['Enhances intellect, memory, and academic focus.', 'Books and instruments placed for divine blessings.', 'Removes obstacles in education and exams.', 'Ideal during Vasant Panchami or school starts.', 'Conducted by experienced Vedic Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3800, priceMax: 8500, rating: 4.9, reviewCount: 42, duration: '1-2 hours', defaultLanguage: 'gujarati', imageType: 'pooja'
        },
        {
          id: 'gujarati-satyanarayan-puja',
          name: 'Satyanarayan Puja',
          shortDesc: 'Traditional Satyanarayan Vratha & Katha for family prosperity.',
          description: 'Satyanarayan Puja is dedicated to Lord Vishnu for family harmony and fulfillment of vows. Includes reading of 5 chapters of Satyanarayan Katha and offering Sheera prasadam.',
          keyInsights: ['Auspicious Satyanarayan Katha & Aarti.', 'Preparation of delicious Sheera prasadam.', 'Fulfills wishes and brings peace & prosperity.', 'Ideal for Purnima, birthdays, and anniversaries.', 'Complete Samagri and Gujarati Pandit service.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 4500, priceMax: 10500, rating: 5.0, reviewCount: 58, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'pooja'
        },
        {
          id: 'gujarati-shuddhikaran-puja',
          name: 'Shuddhikaran Puja',
          shortDesc: 'Purification ritual for house, office, or individuals.',
          description: 'Shuddhikaran Puja is performed to purify a space or individual after events like birth, death, eclipse, or long neglect. Uses sacred water, mantras, and Havan smoke.',
          keyInsights: ['Restores spiritual and physical purity (Shuddhi).', 'Clears negative vibrations and evil energy.', 'Invokes Varuna Devata and Lord Ganesha.', 'Essential before major auspicious ceremonies.', 'Performed by certified Gujarati priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3500, priceMax: 8000, rating: 4.8, reviewCount: 30, duration: '1-2 hours', defaultLanguage: 'gujarati', imageType: 'pooja'
        },
        {
          id: 'gujarati-vivah-marriage',
          name: 'Vivah (Marriage)',
          shortDesc: 'Authentic Vedic Gujarati wedding ceremony (Lagna).',
          description: 'Gujarati Vivah is a solemn and vibrant wedding ceremony. Includes Ganesh Pujan, Hastamelap, Mangal Fera (around holy fire), Saptapadi, and Chero Ceti rituals.',
          keyInsights: ['Full traditional Gujarati wedding ceremony.', 'Includes Hastamelap, Mangal Fera, and Saptapadi.', 'Chanting of authentic Vedic wedding mantras.', 'Unites two families with divine blessings.', 'Conducted by experienced Chief Priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 25000, priceMax: 75000, rating: 5.0, reviewCount: 40, duration: '4-6 hours', defaultLanguage: 'gujarati', imageType: 'ceremony'
        },
        {
          id: 'gujarati-gand-mool-nakshatra-shanti',
          name: 'Gand Mool Nakshatra Shanti Puja',
          shortDesc: 'Pacification ritual for babies born in Gand Mool Nakshatras.',
          description: 'Performed when a child is born under Gand Mool Nakshatras (Ashlesha, Magha, Jyeshtha, Moola, Revati, Ashwini). Mitigates health issues and brings peace to parents and child.',
          keyInsights: ['Removes Doshas of Gand Mool Nakshatra birth.', '27 types of water, soil, and leaves used for Abhishekam.', 'Protects child\'s health and parents\' well-being.', 'Performed on 27th day after birth.', 'Conducted by specialized Vedic Brahmins.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 6500, priceMax: 15000, rating: 4.8, reviewCount: 35, duration: '3-4 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-graha-shanti-puja',
          name: 'Graha Shanti Puja',
          shortDesc: 'Pacifying all nine planetary transits and doshas.',
          description: 'Graha Shanti Puja in Gujarati tradition pacifies malefic planetary influences in one\'s horoscope, ensuring health, wealth, family peace, and professional growth.',
          keyInsights: ['Balances planetary energies of all 9 Grahas.', 'Reduces Sade Sati, Rahu/Ketu, and Kuja Dosha effects.', 'Includes Navagraha Sthapana and Havan.', 'Grants peace of mind and career prosperity.', 'Performed by senior Vedic Acharyas.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 5500, priceMax: 14000, rating: 4.8, reviewCount: 46, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-vastu-shanti-puja',
          name: 'Vastu Shanti Puja',
          shortDesc: 'Pacifying Vastu Purusha to resolve architectural flaws.',
          description: 'Vastu Shanti Puja corrects directional defects (Vastu Doshas) in a residential or commercial building, bringing peace, prosperity, and mental harmony to occupants.',
          keyInsights: ['Pacifies Vastu Purusha (Deity of the structure).', 'Neutralizes negative energy due to structural flaws.', 'Promotes health, family harmony, and wealth.', 'Includes Vastu Havan and Mandal Sthapana.', 'Performed by senior Vastu Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 8800, priceMax: 22000, rating: 4.9, reviewCount: 45, duration: '3-4 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-yagnopavit-sanskar',
          name: 'Yagnopavit Sanskar',
          shortDesc: 'Sacred thread ceremony (Janoi / Upanayan) for young boys.',
          description: 'Yagnopavit Sanskar (Janoi) initiates a young boy into Vedic studies and spiritual discipline. The boy receives the sacred thread (Janoi) and Gayatri Mantra.',
          keyInsights: ['Initiation into Brahmacharya phase of life.', 'Wearing of sacred thread (Janoi / Yajnopavit).', 'Recitation of Gayatri Mantra and Havan.', 'Marks second birth (Dwij) for spiritual growth.', 'Conducted by certified Vedic Acharyas.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 12500, priceMax: 35000, rating: 4.9, reviewCount: 30, duration: '4-6 hours', defaultLanguage: 'gujarati', imageType: 'ceremony'
        }
      ]
    },
    {
      id: 'gujarati-havans',
      name: 'Havans',
      icon: '🔥',
      gradient: 'linear-gradient(135deg, #FF6B00, #FFA000)',
      description: 'Sacred Gujarati Fire Havan & Homam Rituals',
      defaultLanguage: 'gujarati',
      services: [
        {
          id: 'gujarati-ayush-havan',
          name: 'Ayush Havan',
          group: 'Havans',
          shortDesc: 'Sacred fire ritual for health, vitality, and longevity.',
          description: 'Ayush Havan invokes Ayur Devata for a disease-free, energetic, and long life. Especially performed on birthdays or for ill family members.',
          keyInsights: ['Invokes deity of life energy for longevity.', 'Eliminates health afflictions and bad health transits.', 'Medicinal ghee & herbal offerings into fire.', 'Promotes mental and physical strength.', 'Performed by expert Vedic Priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 6500, priceMax: 18000, rating: 4.9, reviewCount: 35, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'homam'
        },
        {
          id: 'gujarati-chandi-havan',
          name: 'Chandi Havan',
          group: 'Havans',
          shortDesc: 'Powerful fire ritual for ultimate victory, protection, and success.',
          description: 'Chandi Havan is one of the most potent Vedic fire rituals, invoking Maa Durga. It eliminates deep karmic blockages, enemy obstacles, and brings grand victory.',
          keyInsights: ['Ultimate fire ritual for removing major hurdles.', 'Chanting of 700 verses of Durga Saptashati.', 'Grants immense power, victory, and prosperity.', 'Wards off black magic & negative energy.', 'Conducted by senior Vedic Brahmins.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 18000, priceMax: 65000, rating: 5.0, reviewCount: 42, duration: '4-6 hours', defaultLanguage: 'gujarati', imageType: 'homam'
        },
        {
          id: 'gujarati-dhanvantri-havan',
          name: 'Dhanvantri Havan',
          group: 'Havans',
          shortDesc: 'Fire ritual for curing chronic diseases and good health.',
          description: 'Dedicated to Lord Dhanvantari, the divine physician. Medicinal herbs and ghee are offered in the sacred fire to cure chronic ailments and improve health.',
          keyInsights: ['Invokes the divine physician Lord Dhanvantari.', 'Highly effective for chronic health conditions.', 'Medicinal herb offerings into sacred fire.', 'Aids in post-surgery quick recovery.', 'Performed by certified Gujarati priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 6000, priceMax: 18000, rating: 4.9, reviewCount: 28, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'homam'
        },
        {
          id: 'gujarati-ganapathi-havan',
          name: 'Ganapathi Havan',
          group: 'Havans',
          shortDesc: 'Fire ritual for removing all hurdles and ensuring success.',
          description: 'Ganapathi Havan is performed before starting new businesses, housewarmings, or major ceremonies to ensure obstacle-free completion and good luck.',
          keyInsights: ['Foundational fire ritual in Hindu tradition.', 'Removes all obstacles and brings prosperity.', 'Offerings of Modak, Ghee, and Durva grass.', 'Ideal for business and residential starts.', 'Performed by experienced Vedic Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 5500, priceMax: 14000, rating: 4.9, reviewCount: 48, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'homam'
        },
        {
          id: 'gujarati-laxmi-kubera-havan',
          name: 'Laxmi Kubera Havan',
          group: 'Havans',
          shortDesc: 'Fire ritual for attracting financial wealth and business growth.',
          description: 'Combines the divine energies of Goddess Laxmi and Lord Kubera (banker of heaven) to attract financial abundance, clear debts, and grow business.',
          keyInsights: ['Attracts wealth, prosperity, and financial luck.', 'Helps in clearing heavy business debts.', 'Offerings of Lotus seeds, Ghee, and Fruits.', 'Ideal for commercial & financial ventures.', 'Conducted by senior Vedic Acharyas.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 7500, priceMax: 22000, rating: 5.0, reviewCount: 40, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'homam'
        },
        {
          id: 'gujarati-mrityunjaya-havan',
          name: 'Mrityunjaya Havan',
          group: 'Havans',
          shortDesc: 'Life-saving fire ritual for critical health and protection.',
          description: 'Dedicated to Lord Shiva as Mahamrityunjaya. Invokes divine healing vibrations to protect against untimely death, cure critical diseases, and grant longevity.',
          keyInsights: ['Supreme fire ritual for life protection & health.', 'Recitation of Maha Mrityunjaya Mantra.', 'Creates powerful protective energy shield.', 'Wards off accidents and serious illnesses.', 'Conducted by specialized Vedic priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 8500, priceMax: 35000, rating: 5.0, reviewCount: 38, duration: '3-4 hours', defaultLanguage: 'gujarati', imageType: 'homam'
        },
        {
          id: 'gujarati-navagraha-havan',
          name: 'Navagraha Havan',
          group: 'Havans',
          shortDesc: 'Fire ritual to balance all nine planetary transits.',
          description: 'Navagraha Havan offers sacred ahutis to all 9 planets, removing planetary afflictions, Sade Sati, Rahu/Ketu doshas, and ensuring smooth life progress.',
          keyInsights: ['Balances planetary energies of all 9 Grahas.', 'Removes unknown blockages and horoscope doshas.', 'Includes 9 types of sacred woods (Samidha).', 'Brings harmony, health, and wealth.', 'Performed by certified Gujarati Brahmins.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 6500, priceMax: 18000, rating: 4.9, reviewCount: 50, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'homam'
        },
        {
          id: 'gujarati-rudra-havan',
          name: 'Rudra Havan',
          group: 'Havans',
          shortDesc: 'Fire ritual invoking Lord Rudra for health and peace.',
          description: 'Rudra Havan invokes the fierce healing form of Lord Shiva. Chanting of Sri Rudram along with fire offerings cures deep diseases and cleanses sins.',
          keyInsights: ['Invokes divine grace of Lord Rudra.', 'Removes deep physical and mental ailments.', 'Cleanses environmental and personal karma.', 'Brings peace, health, and spiritual growth.', 'Performed by Vedic Shivacharya priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 7000, priceMax: 20000, rating: 4.9, reviewCount: 36, duration: '3-4 hours', defaultLanguage: 'gujarati', imageType: 'homam'
        },
        {
          id: 'gujarati-saraswati-havan',
          name: 'Saraswati Havan',
          group: 'Havans',
          shortDesc: 'Fire ritual for academic excellence, wisdom, and speech.',
          description: 'Saraswati Havan is performed to invoke Goddess Saraswati in sacred fire, boosting memory power, analytical skills, speech clarity, and exam success.',
          keyInsights: ['Enhances intelligence, focus, and memory.', 'Ideal for students, researchers, and artists.', 'Sacred Ahutis of ghee and yellow flowers.', 'Removes speech defects and learning hurdles.', 'Performed by experienced Vedic Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 5500, priceMax: 15000, rating: 4.8, reviewCount: 32, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'homam'
        }
      ]
    },
    {
      id: 'gujarati-festival-pujas',
      name: 'Festival pujas',
      icon: '🎊',
      gradient: 'linear-gradient(135deg, #F9A825, #FFEE58)',
      description: 'Gujarati Festive Celebrations and Vratam Worship',
      defaultLanguage: 'gujarati',
      services: [
        {
          id: 'gujarati-diwali-lakshmi-puja',
          name: 'Diwali Lakshmi Puja',
          group: 'Festival pujas',
          shortDesc: 'Traditional Diwali Chopda Pujan and Lakshmi worship.',
          description: 'Diwali Lakshmi Puja and Chopda Pujan is a revered Gujarati Diwali ritual. Invokes Goddess Lakshmi and Lord Ganesha for business prosperity, blessing new account books (Chopda).',
          keyInsights: ['Traditional Gujarati Chopda Pujan on Diwali.', 'Blesses account books, cash boxes, and business.', 'Invokes Goddess Lakshmi, Saraswati, and Ganesha.', 'Brings year-round financial success & luck.', 'Conducted by certified Gujarati Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 4500, priceMax: 12000, rating: 5.0, reviewCount: 65, duration: '1-2 hours', defaultLanguage: 'gujarati', imageType: 'festival'
        },
        {
          id: 'gujarati-dussehra-puja',
          name: 'Dussehra Puja',
          group: 'Festival pujas',
          shortDesc: 'Worship of weapons, tools, and Shami tree on Vijayadashami.',
          description: 'Dussehra (Vijayadashami) Puja involves worship of tools, vehicles, business machinery, and Shami leaves, celebrating the triumph of good over evil and seeking victory.',
          keyInsights: ['Worship of machinery, vehicles, and tools.', 'Shami Patra exchange for good fortune.', 'Marks victory in career and personal goals.', 'Blesses new vehicles and machinery.', 'Performed by experienced Vedic priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3500, priceMax: 8500, rating: 4.8, reviewCount: 38, duration: '1-2 hours', defaultLanguage: 'gujarati', imageType: 'festival'
        },
        {
          id: 'gujarati-ganesh-sthapana-visarjan',
          name: 'Ganesh Sthapana and Visarjan Puja',
          group: 'Festival pujas',
          shortDesc: 'Ganesh Chaturthi idol sthapana and visarjan rituals.',
          description: 'Comprehensive worship for Ganesh Chaturthi, including Prana Pratishtha, daily Shodasopachara Puja, Uttara Pujan, and Visarjan rituals for divine presence.',
          keyInsights: ['Prana Pratishtha and Sthapana of Ganesha idol.', 'Daily Modak naivedya and Aarti guidance.', 'Uttara Pujan and respectful Visarjan Vidhi.', 'Brings joy, peace, and removes all hurdles.', 'Conducted by expert Gujarati Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3500, priceMax: 10000, rating: 4.9, reviewCount: 50, duration: '1-2 hours', defaultLanguage: 'gujarati', imageType: 'festival'
        },
        {
          id: 'gujarati-holika-puja',
          name: 'Holika Puja',
          group: 'Festival pujas',
          shortDesc: 'Sacred Holika Dahan worship for burning away negativity.',
          description: 'Performed on Holi eve during Holika Dahan. Invokes divine fire to burn away diseases, evil eye, negative energies, and restore prosperity and joy.',
          keyInsights: ['Worship of sacred Holika fire.', 'Destroys negativity, evil eye, and bad omens.', 'Includes offerings of coconut, wheat ears, and water.', 'Promotes family health and happiness.', 'Conducted by Vedic Gujarati priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3000, priceMax: 7000, rating: 4.7, reviewCount: 28, duration: '1 hour', defaultLanguage: 'gujarati', imageType: 'festival'
        },
        {
          id: 'gujarati-janmashtami-puja',
          name: 'Janmashtami Puja',
          group: 'Festival pujas',
          shortDesc: 'Celebration of Lord Krishna\'s birth with Bal Gopal Abhishekam.',
          description: 'Janmashtami Puja celebrates the birth of Lord Krishna. Includes midnight Bal Gopal Abhishekam with Panchamrut, swing decoration (Jhula), Makhan-Mishri bhog, and Aarti.',
          keyInsights: ['Midnight Bal Gopal Abhishekam & Pujan.', 'Jhula (swing) decoration and Makhan bhog.', 'Brings joy, progeny, and love in the home.', 'Chanting of Vishnu Sahasranamam & Krishna Stotra.', 'Performed by experienced Vedic Brahmins.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3800, priceMax: 9500, rating: 4.9, reviewCount: 42, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'festival'
        },
        {
          id: 'gujarati-navratri-kalash-sthapana-durga-saptashati',
          name: 'Navratri Kalash Sthapana Puja and Durga Saptashati Path',
          group: 'Festival pujas',
          shortDesc: 'Ghatasthapana and 9-day Durga Saptashati recitation during Navratri.',
          description: 'Auspicious Navratri Ghatasthapana (Kalash Sthapana) followed by daily recitation of 700 verses of Durga Saptashati for supreme peace, prosperity, and divine protection.',
          keyInsights: ['Kalash Sthapana & Akhand Jyot setup.', 'Recitation of 13 chapters of Durga Saptashati.', 'Daily Kanya Pujan guidance & Ashtami Havan.', 'Fulfills all desires and grants divine grace.', 'Conducted by senior Vedic Acharyas.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 6500, priceMax: 25000, rating: 5.0, reviewCount: 55, duration: '2-4 hours', defaultLanguage: 'gujarati', imageType: 'festival'
        },
        {
          id: 'gujarati-tulsi-vivah-puja',
          name: 'Tulsi Vivah Puja',
          group: 'Festival pujas',
          shortDesc: 'Ceremonial wedding of Goddess Tulsi and Lord Shaligram.',
          description: 'Tulsi Vivah is performed on Prabodhini Ekadashi. Marks the ceremonial marriage of Tulsi (Vrinda) with Lord Vishnu (Shaligram), initiating the auspicious Hindu wedding season.',
          keyInsights: ['Ceremonial marriage of Tulsi Plant & Shaligram.', 'Invokes marital harmony, prosperity, and luck.', 'Marks start of auspicious wedding dates.', 'Includes Kanyadaan ritual of Tulsi plant.', 'Performed by certified Gujarati Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 4200, priceMax: 9800, rating: 4.9, reviewCount: 35, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'festival'
        }
      ]
    },
    {
      id: 'gujarati-jaaps',
      name: 'Jaaps',
      icon: '📿',
      gradient: 'linear-gradient(135deg, #1565C0, #42A5F5)',
      description: 'Mantra Jaaps & Graha Shanti Recitations',
      defaultLanguage: 'gujarati',
      services: [
        {
          id: 'gujarati-budha-graha-jaap',
          name: 'Budha Graha Shanti Jaap',
          group: 'Jaaps',
          shortDesc: 'Mantra chanting to pacify Mercury for intellect and business.',
          description: 'Continuous chanting of Budha (Mercury) mantra to rectify weak Mercury in horoscope. Improves speech, business skills, analytical thinking, and memory.',
          keyInsights: ['Enhances business acumen and communication.', 'Resolves skin and nervous system disorders.', 'Involves 4,000 or 17,000 Budha mantra chants.', 'Moong dal & green clothes offerings.', 'Conducted by trained Vedic Chanting Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3500, priceMax: 12000, rating: 4.8, reviewCount: 25, duration: '2-4 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-chandra-graha-jaap',
          name: 'Chandra Graha Shanti Jaap',
          group: 'Jaaps',
          shortDesc: 'Mantra chanting to pacify Moon for mental peace and balance.',
          description: 'Japam dedicated to Chandra (Moon) to resolve emotional stress, mood swings, and mental anxiety. Restores peace of mind and emotional stability.',
          keyInsights: ['Restores mental peace and emotional balance.', 'Cures sleep issues and anxiety.', 'Involves 11,000 Chandra mantra chants.', 'White flowers, rice, and milk offerings.', 'Performed by experienced Vedic Brahmins.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3500, priceMax: 12000, rating: 4.8, reviewCount: 22, duration: '2-4 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-guru-graha-jaap',
          name: 'Guru Graha Shanti Jaap',
          group: 'Jaaps',
          shortDesc: 'Mantra chanting to pacify Jupiter for wisdom and marriage luck.',
          description: 'Chanting for Guru (Jupiter) to remove obstacles in marriage, higher education, and childbirth, bringing wisdom, luck, and spiritual growth.',
          keyInsights: ['Removes delays in marriage & childbirth.', 'Grants immense wisdom and wealth.', 'Involves 16,000 Guru mantra chants.', 'Chana dal and yellow flower offerings.', 'Performed by senior Vedic Priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 4200, priceMax: 15000, rating: 4.9, reviewCount: 30, duration: '3-5 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-ketu-graha-jaap',
          name: 'Ketu Graha Shanti Jaap',
          group: 'Jaaps',
          shortDesc: 'Mantra chanting to pacify Ketu for liberation and health.',
          description: 'Japam for Ketu to mitigate sudden losses, spiritual confusion, and undiagnosed health issues, turning chaos into intuition and liberation.',
          keyInsights: ['Removes spiritual confusion & sudden losses.', 'Cures strange health problems.', 'Involves 7,000 or 17,000 Ketu chants.', 'Horse gram (Kulthi) offerings.', 'Conducted by specialized Vedic Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3800, priceMax: 12000, rating: 4.7, reviewCount: 20, duration: '2-4 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-maha-mrityunjaya-jaap',
          name: 'Maha Mrityunjaya Jaap',
          group: 'Jaaps',
          shortDesc: 'Continuous life-saving mantra chanting for severe illness.',
          description: 'Intense and continuous chanting of Maha Mrityunjaya Mantra to create a healing shield for critically ill patients, warding off untimely death.',
          keyInsights: ['Ultimate mantra for health and life protection.', 'Creates powerful divine healing vibrations.', 'Wards off untimely death (Apamrityu).', 'Can be chanted 11,000 to 125,000 times.', 'Conducted by senior Vedic Acharyas.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 12000, priceMax: 65000, rating: 5.0, reviewCount: 45, duration: '1-3 days', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-mangal-graha-jaap',
          name: 'Mangal Graha Shanti Jaap',
          group: 'Jaaps',
          shortDesc: 'Mantra chanting to pacify Mars and resolve Manglik Dosha.',
          description: 'Dedicated to Mangal (Mars) to resolve Manglik Dosha, anger issues, debt, and property disputes, bringing courage and energy.',
          keyInsights: ['Remedy for Kuja / Manglik Dosha in marriage.', 'Clears debts and real estate disputes.', 'Involves 10,000 Mangal mantra chants.', 'Toor dal and red flower offerings.', 'Performed by expert Vedic Priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3800, priceMax: 14000, rating: 4.8, reviewCount: 35, duration: '2-4 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-rahu-graha-jaap',
          name: 'Rahu Graha Shanti Jaap',
          group: 'Jaaps',
          shortDesc: 'Mantra chanting to pacify Rahu and Kala Sarpa Dosha.',
          description: 'Japam dedicated to Rahu to remove sudden misfortunes, fears, phobias, and Kaal Sarp Dosha, turning chaos into unexpected gains.',
          keyInsights: ['Remedy for Kaal Sarp Dosha & Rahu Mahadasha.', 'Removes fear, anxiety, and confusion.', 'Involves 18,000 Rahu mantra chants.', 'Urad dal & black sesame offerings.', 'Conducted by certified Vedic Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 4200, priceMax: 15000, rating: 4.8, reviewCount: 32, duration: '3-5 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-shani-graha-jaap',
          name: 'Shani Graha Shanti Jaap',
          group: 'Jaaps',
          shortDesc: 'Mantra chanting to pacify Saturn and Sade Sati.',
          description: 'Japam to mitigate the severe effects of Sade Sati (7.5 years of Saturn), Ashtama Shani, or malefic Saturn. Removes delays, suffering, and poverty.',
          keyInsights: ['Essential remedy during Sade Sati & Dhaiya.', 'Reduces life hardships, delays, and losses.', 'Involves 19,000 Shani mantra chants.', 'Mustard oil and black sesame offerings.', 'Performed by senior Vedic Shivacharyas.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 5000, priceMax: 18000, rating: 4.9, reviewCount: 48, duration: '3-5 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-shukra-graha-jaap',
          name: 'Shukra Graha Shanti Jaap',
          group: 'Jaaps',
          shortDesc: 'Mantra chanting to pacify Venus for marital bliss and wealth.',
          description: 'Japam for Shukra (Venus) to resolve marital discord, financial instability, and lack of comfort, enhancing love, wealth, and arts.',
          keyInsights: ['Improves marital harmony and relationships.', 'Attracts financial prosperity and luxuries.', 'Involves 16,000 Shukra mantra chants.', 'White flowers and camphor offerings.', 'Performed by certified Vedic Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 4200, priceMax: 15000, rating: 4.8, reviewCount: 25, duration: '3-5 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-surya-graha-jaap',
          name: 'Surya Graha Shanti Jaap',
          group: 'Jaaps',
          shortDesc: 'Mantra chanting to pacify the Sun for health and authority.',
          description: 'Chanting for Surya (Sun) to overcome health issues (eye/heart/vitality), government/legal problems, and lack of confidence.',
          keyInsights: ['Improves physical vitality and eye/bone health.', 'Resolves government, legal, and career hurdles.', 'Involves 7,000 Surya mantra chants.', 'Wheat and red lotus/flower offerings.', 'Conducted by experienced Vedic Acharyas.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3500, priceMax: 12000, rating: 4.7, reviewCount: 22, duration: '2-4 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        }
      ]
    },
    {
      id: 'gujarati-paths',
      name: 'Paths',
      icon: '📖',
      gradient: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
      description: 'Sacred Scriptures Recitations & Paths',
      defaultLanguage: 'gujarati',
      services: [
        {
          id: 'gujarati-akhand-ramayan-path',
          name: 'Akhand Ramayan Path',
          group: 'Paths',
          shortDesc: 'Continuous 24-hour recitation of Ramcharitmanas.',
          description: 'Akhand Ramayan Path is a continuous 24-hour recitation of the entire Ramcharitmanas. It invokes divine grace of Lord Rama, Goddess Sita, and Lord Hanuman.',
          keyInsights: ['Continuous 24-hour non-stop chanting.', 'Purifies the home and creates divine aura.', 'Grants peace, harmony, and removes obstacles.', 'Accompanied by Bhajan, Kirtan, and Havan.', 'Conducted by team of experienced Ramayani Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 15000, priceMax: 45000, rating: 5.0, reviewCount: 40, duration: '24 hours', defaultLanguage: 'gujarati', imageType: 'pooja'
        },
        {
          id: 'gujarati-hanuman-chalisa-path',
          name: 'Hanuman Chalisa Path',
          group: 'Paths',
          shortDesc: 'Recitation of Hanuman Chalisa for courage and protection.',
          description: 'Recitation of Hanuman Chalisa (11, 21, or 108 times) to invoke Lord Hanuman for protection from evil spirits, fear, health issues, and Saturn doshas.',
          keyInsights: ['108 times Hanuman Chalisa Samput Path.', 'Protects against fear, enemies, and black magic.', 'Relieves Shani Sade Sati afflictions.', 'Includes Sundarkand extracts & Aarti.', 'Conducted by devoted Vedic Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3500, priceMax: 9500, rating: 4.9, reviewCount: 45, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'pooja'
        },
        {
          id: 'gujarati-sunderkand-path',
          name: 'Sunderkand Path',
          group: 'Paths',
          shortDesc: 'Recitation of Sunderkand chapter for victory and wisdom.',
          description: 'Sunderkand Path recites the 5th chapter of Ramcharitmanas, describing Hanumanji\'s heroics. Brings confidence, removes anxiety, and solves impossible problems.',
          keyInsights: ['Recitation of the most inspiring Ramayan chapter.', 'Removes deep depression, fear, and negativity.', 'Brings victory over impossible challenges.', 'Includes Hanuman Pujan, Bhajans, and Aarti.', 'Performed by certified Gujarati Pandits.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 3800, priceMax: 10500, rating: 4.9, reviewCount: 50, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'pooja'
        }
      ]
    },
    {
      id: 'gujarati-shanti-pujas',
      name: 'Shanti pujas',
      icon: '☮️',
      gradient: 'linear-gradient(135deg, #7B1FA2, #CE93D8)',
      description: 'Special Remedy & Shanti Rituals',
      defaultLanguage: 'gujarati',
      services: [
        {
          id: 'gujarati-ark-vivah-male',
          name: 'Ark Vivah For Male',
          group: 'Shanti pujas',
          shortDesc: 'Remedial symbolic marriage for males with Kuja/Manglik Dosha.',
          description: 'Ark Vivah is a remedial symbolic marriage performed for a male who has severe Kuja/Manglik Dosha or multiple marriages indicated, marrying an Ark (Madar) plant first.',
          keyInsights: ['Remedy for severe Manglik Dosha in grooms.', 'Symbolic marriage with Ark (Madar) plant.', 'Absorbs negative marital Karma & delays.', 'Ensures smooth and happy actual marriage.', 'Performed by specialized Vedic Shanti priests.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 6500, priceMax: 16000, rating: 4.8, reviewCount: 28, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-kumbh-vivah-female',
          name: 'Kumbh Vivah For Female',
          group: 'Shanti pujas',
          shortDesc: 'Remedial symbolic marriage with mud pot for females.',
          description: 'Kumbh Vivah is a sacred remedial ritual for a female having severe Manglik Dosha or Vaidhavya Dosha, marrying a mud pot (Kumbh) containing Lord Vishnu before actual wedding.',
          keyInsights: ['Essential remedy for severe Manglik brides.', 'Symbolic marriage with consecrated Kumbh (pot).', 'Eliminates marital obstacles & spouse ill-luck.', 'Ensures long and happy married life.', 'Performed by expert Vedic Shanti Acharyas.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 6500, priceMax: 16000, rating: 4.9, reviewCount: 32, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        },
        {
          id: 'gujarati-vishnu-vivah-female',
          name: 'Vishnu Vivah For Female',
          group: 'Shanti pujas',
          shortDesc: 'Remedial symbolic marriage with Lord Vishnu idol for females.',
          description: 'Vishnu Vivah is performed for females with horoscope afflictions delay in marriage or widowhood dosha, symbolically marrying a golden Lord Vishnu idol before the real wedding.',
          keyInsights: ['Remedy for severe horoscope afflictions in brides.', 'Symbolic marriage with Lord Vishnu / Shaligram.', 'Absorbs malefic planetary influences.', 'Grants long marital bliss and protection.', 'Conducted by senior Vedic Brahmins.'],
          promise: ['Highly Qualified Gujarati Pandits.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 7000, priceMax: 18000, rating: 4.9, reviewCount: 30, duration: '2-3 hours', defaultLanguage: 'gujarati', imageType: 'shanti'
        }
      ]
    },
    {
      id: 'malayalam-pooja-services',
      name: 'Malayalam Pooja Services',
      icon: '🪔',
      gradient: 'linear-gradient(135deg, #1565C0, #0D47A1)',
      description: 'Authentic Kerala Vedic Pujas and sacred ceremonies performed by experienced Malayalam Priests',
      defaultLanguage: 'malayalam',
      subheader: 'Ceremonies',
      services: [
        {
          id: 'malayalam-choroonu',
          name: 'Choroonu (Rice Feeding Ceremony)',
          shortDesc: 'Sacred Kerala first rice feeding ritual for the infant.',
          description: 'Choroonu is the traditional Malayalam first solid food feeding ceremony. Conducted during the 6th month, the baby is fed sacred rice/payasam after invoking Lord Guruvayurappan and family deities for health, longevity, and prosperity.',
          keyInsights: [
            'Traditional Kerala first rice feeding ritual (Choroonu).',
            'Invokes divine blessings of Lord Guruvayurappan and Mahavishnu.',
            'Sacred Payasam offering in banana leaf as per Kerala tradition.',
            'Brings good digestion, vitality, and lifelong well-being.',
            'Conducted by certified Malayalam Vedic priests.'
          ],
          promise: ['Highly Qualified Malayalam Priests.', 'All rituals follow Kerala Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4500, priceMax: 9500, rating: 4.9, reviewCount: 36, duration: '1-2 hours', defaultLanguage: 'malayalam', imageType: 'ceremony'
        },
        {
          id: 'malayalam-noolukettu',
          name: 'Noolukettu - Naming Ceremony',
          shortDesc: 'Traditional Kerala 28th-day thread tying and naming ceremony.',
          description: 'Noolukettu is the sacred Kerala naming and waist-thread tying ceremony performed on the 28th day after birth (or 56th day). A black/gold thread (Aranjanam) is tied around the baby\'s waist and the formal name is whispered in the ear.',
          keyInsights: [
            'Revered Kerala 28th day naming ritual (Noolukettu).',
            'Tying of the auspicious waist thread (Aranjanam) and Kohl eyelining.',
            'Calculating birth star name according to Malayalam Kollavarsham Panchangam.',
            'Blessing of mother and newborn with long life and prosperity.',
            'Performed by experienced Malayalam Pandits.'
          ],
          promise: ['Highly Qualified Malayalam Priests.', 'All rituals follow Kerala Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4800, priceMax: 11000, rating: 4.8, reviewCount: 32, duration: '1-2 hours', defaultLanguage: 'malayalam', imageType: 'ceremony'
        },
        {
          id: 'malayalam-vivaaham-marriage',
          name: 'Vivaaham (Marriage)',
          shortDesc: 'Authentic Kerala Hindu wedding ceremony (Vivaaham).',
          description: 'Vivaaham is the sacred Kerala wedding ceremony. Conducted in traditional attire (Kasavu Pudava), rituals include Thali Kettu (tying of sacred ribbon/thali), Pudamuri (gift of saree), Garland exchange, and Panni Grihitam for eternal marital bliss.',
          keyInsights: [
            'Traditional Kerala wedding rituals (Thali Kettu & Pudamuri).',
            'Auspicious Lagna Muhurtham as per Malayalam Panchangam.',
            'Pudava Vastra exchange signifying protection and lifelong love.',
            'Invokes divine grace of Mahavishnu and Bhagavati.',
            'Performed by senior Malayalam Acharyas and Priests.'
          ],
          promise: ['Highly Qualified Malayalam Priests.', 'All rituals follow Kerala Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 22000, priceMax: 65000, rating: 5.0, reviewCount: 40, duration: '3-5 hours', defaultLanguage: 'malayalam', imageType: 'ceremony'
        }
      ]
    },
    {
      id: 'bengali-pooja-services',
      name: 'Bengali Pooja Services',
      icon: '🪔',
      gradient: 'linear-gradient(135deg, #C41E3A, #990000)',
      description: 'Authentic Bengali Vedic Pujas and sacred ceremonies performed by experienced Bengali Pandits',
      defaultLanguage: 'bengali',
      subheader: 'Pujas',
      services: [
        {
          id: 'bengali-bhoomi-puja',
          name: 'Bhoomi Puja',
          shortDesc: 'Land blessing and Vastu Shanti ritual before construction as per Bengali traditions.',
          description: 'Bhoomi Puja in Bengali tradition is performed to seek permission from Mother Earth (Bhumi Devi) and Vastu Purusha before starting construction. Invokes divine blessings for safety, structural strength, and prosperity.',
          keyInsights: [
            'Traditional Bengali land purification and Vastu puja.',
            'Invokes Bhumi Devi, Lord Ganesha, and Vastu Purusha.',
            'Removes negative vibes, evil eye, and geographical defects.',
            'Includes sacred silver coin placement and soil sanctification.',
            'Performed by certified Bengali Purohits with complete Samagri.'
          ],
          promise: ['Highly Qualified Vedic Bengali Pandits.', 'All rituals follow authentic Bengali Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4800, priceMax: 9800, rating: 4.9, reviewCount: 40, duration: '2-3 hours', defaultLanguage: 'bengali', imageType: 'pooja'
        },
        {
          id: 'bengali-durga-puja',
          name: 'Durga Puja',
          shortDesc: 'Sacred worship of Maa Durga for divine protection, peace, and prosperity.',
          description: 'Durga Puja is the heart of Bengali spiritual tradition. Performed with traditional Shodasopachara rituals, Chandi Parayan (recitation), Dhunuchi Naach offerings, and Pushpanjali to invoke Maa Durga\'s supreme protective power.',
          keyInsights: [
            'Authentic Bengali Durga Pujo rituals with Chandi Parayan.',
            'Includes Bodhon, Amantran, Adhibhas, and Anjali offerings.',
            'Destroys negativity, enemies, and brings victory in life.',
            'Offerings of Shiuli flowers, Lotus, and Bhog Prasadam.',
            'Conducted by senior Vedic Bengali Brahmins.'
          ],
          promise: ['Highly Qualified Vedic Bengali Pandits.', 'All rituals follow authentic Bengali Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5500, priceMax: 15000, rating: 5.0, reviewCount: 55, duration: '3-4 hours', defaultLanguage: 'bengali', imageType: 'pooja'
        },
        {
          id: 'bengali-ganesh-puja',
          name: 'Ganesh Puja',
          shortDesc: 'Inaugural worship of Lord Ganesha for removing hurdles and bringing good fortune.',
          description: 'Ganesh Puja in Bengali custom is conducted before embarking on new businesses, ventures, or rituals. Invokes Siddhidata Ganesha with Durba grass, Modak/Laddoo bhog, and Vedic mantras.',
          keyInsights: [
            'Removal of all obstacles (Vighnanashan) and bringing success.',
            'Special Durba grass, modak, and red flower offerings.',
            'Blesses new ventures, home, and commercial spaces.',
            'Invokes wisdom, intellect, and wealth.',
            'Suitable for Sankashti Chaturthi, Ganesh Chaturthi, and new starts.'
          ],
          promise: ['Highly Qualified Vedic Bengali Pandits.', 'All rituals follow authentic Bengali Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3500, priceMax: 7500, rating: 4.8, reviewCount: 42, duration: '1-2 hours', defaultLanguage: 'bengali', imageType: 'pooja'
        },
        {
          id: 'bengali-griho-probesh',
          name: 'Griho Probesh',
          shortDesc: 'Sacred Bengali housewarming and new home purification ceremony.',
          description: 'Griho Probesh is the traditional Bengali housewarming ritual. Involves entry with Narayan/Shila or Lakshmi Kalash, Milk Boiling ritual (Doodh Uthano), Narayan Puja, and Vastu Shanti to fill the new home with joy and prosperity.',
          keyInsights: [
            'Traditional Bengali housewarming (Griho Probesh) ceremony.',
            'Sacred milk boiling ritual and Kalash Sthapana.',
            'Vastu Shanti, Satyanarayan Puja, and Havan for home purification.',
            'Wards off negative energies, evil eye, and brings peace.',
            'Performed by experienced Bengali Purohits.'
          ],
          promise: ['Highly Qualified Vedic Bengali Pandits.', 'All rituals follow authentic Bengali Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 8800, priceMax: 25000, rating: 4.9, reviewCount: 50, duration: '3-4 hours', defaultLanguage: 'bengali', imageType: 'ceremony'
        },
        {
          id: 'bengali-laxmi-puja',
          name: 'Laxmi Puja',
          shortDesc: 'Worship of Maa Laxmi (Kojagari Lakshmi Puja) for wealth and abundance.',
          description: 'Bengali Kojagari Lakshmi Puja and Thursday Laxmi Broto involve decorating the floor with traditional Alpana (Alpona) rice paste art, offering Dhan (paddy), Coconut Naru, and Khichuri bhog to invite eternal prosperity.',
          keyInsights: [
            'Authentic Bengali Kojagari Lakshmi Pujo with hand-painted Alpona.',
            'Offerings of Naru, Murki, Khichuri bhog, and Payesh.',
            'Brings financial stability, family happiness, and good fortune.',
            'Recitation of Laxmi Broto Katha and Panchali.',
            'Conducted by certified Bengali priests.'
          ],
          promise: ['Highly Qualified Vedic Bengali Pandits.', 'All rituals follow authentic Bengali Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4200, priceMax: 9500, rating: 4.9, reviewCount: 48, duration: '2-3 hours', defaultLanguage: 'bengali', imageType: 'pooja'
        },
        {
          id: 'bengali-onnoprashon-mukhe-bhaat',
          name: 'Onnoprashon (Mukhe Bhaat)',
          shortDesc: 'Traditional Bengali baby\'s first rice feeding ceremony (Mukhe Bhaat).',
          description: 'Onnoprashon or Mukhe Bhaat is the sacred Bengali first solid food feeding ritual for an infant (6th month for boys, 7th month for girls). The child is fed sacred Payesh by maternal uncle (Mama) after Puja and item selection testing (book, pen, coin).',
          keyInsights: [
            'Revered Bengali first rice feeding ceremony (Mukhe Bhaat / Onnoprashon).',
            'Payesh feeding ritual by Mama (Maternal Uncle) and elders.',
            'Traditional item selection ritual (Book, Pen, Coin, Paddy) for child\'s future.',
            'Invokes health, long life, and intellectual growth.',
            'Complete ritual conducted by expert Bengali Purohits.'
          ],
          promise: ['Highly Qualified Vedic Bengali Pandits.', 'All rituals follow authentic Bengali Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4500, priceMax: 9800, rating: 4.9, reviewCount: 39, duration: '1-2 hours', defaultLanguage: 'bengali', imageType: 'ceremony'
        },
        {
          id: 'bengali-saraswati-puja',
          name: 'Saraswati Puja',
          shortDesc: 'Worship of Maa Saraswati for education, wisdom, and fine arts.',
          description: 'Saraswati Puja in Bengal is celebrated with immense fervor on Vasant Panchami. Students keep their books and instruments at Goddess Saraswati\'s feet, participate in Pushpanjali in yellow attire, and seek academic excellence.',
          keyInsights: [
            'Worship of the Goddess of Wisdom, Learning, and Music.',
            'Pushpanjali recitation, Palash flower offerings, and Kul (berry) bhog.',
            'Initiates children into writing and reading (Hatey Khori).',
            'Ideal for homes, educational institutions, and coaching centers.',
            'Performed by traditional Bengali Brahmins.'
          ],
          promise: ['Highly Qualified Vedic Bengali Pandits.', 'All rituals follow authentic Bengali Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3800, priceMax: 8500, rating: 4.9, reviewCount: 46, duration: '1-2 hours', defaultLanguage: 'bengali', imageType: 'pooja'
        },
        {
          id: 'bengali-satyanarayan-puja',
          name: 'Satyanarayan Puja',
          shortDesc: 'Worship of Lord Satyanarayan with Shinni offering for peace and fulfillment.',
          description: 'Satyanarayan Puja in Bengali tradition is performed on Purnima, birthdays, or auspicious occasions. Includes reading of 5 chapters of Satyanarayan Panchali and preparation of delicious traditional Bengali Shinni prasadam.',
          keyInsights: [
            'Auspicious Satyanarayan Katha and Panchali recitation in Bengali.',
            'Special Shinni Prasadam (flour, milk, banana, sugar, and batasa).',
            'Fulfills desires, removes difficulties, and brings family peace.',
            'Suitable for Purnima, housewarmings, and special milestones.',
            'Complete Puja samagri and Bengali Purohit provided.'
          ],
          promise: ['Highly Qualified Vedic Bengali Pandits.', 'All rituals follow authentic Bengali Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4500, priceMax: 10500, rating: 5.0, reviewCount: 50, duration: '2-3 hours', defaultLanguage: 'bengali', imageType: 'pooja'
        },
        {
          id: 'bengali-upanayan',
          name: 'Upanayan',
          shortDesc: 'Sacred thread initiation ceremony (Poita / Upanayan) for young boys.',
          description: 'Upanayan or Poita is the sacred thread ceremony in Bengali Hindu culture. The young boy is initiated into Vedic studies, receives the sacred Yajnopavita (Poita) and Gayatri Mantra, entering the Brahmacharya phase.',
          keyInsights: [
            'Sacred thread ceremony (Poita / Upanayan Samskara).',
            'Initiation into Gayatri Mantra and spiritual education.',
            'Head shaving, Bhiksha ritual, and sacred fire Havan.',
            'Marks spiritual re-birth and moral discipline.',
            'Conducted by qualified Vedic Bengali Acharyas.'
          ],
          promise: ['Highly Qualified Vedic Bengali Pandits.', 'All rituals follow authentic Bengali Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 12500, priceMax: 35000, rating: 4.9, reviewCount: 28, duration: '4-6 hours', defaultLanguage: 'bengali', imageType: 'ceremony'
        },
        {
          id: 'bengali-vivah-marriage',
          name: 'Vivah (Marriage)',
          shortDesc: 'Authentic Vedic Bengali wedding ceremony with traditional rituals.',
          description: 'Bengali Vivah is a rich, solemn, and joyful Vedic wedding ceremony. Features traditional rituals including Shubho Drishti, Mala Badal, Saat Paak, Kanyadaan, Anjali (Khoi Porano), and Sindoor Daan.',
          keyInsights: [
            'Full traditional Bengali wedding ceremony (Bengali Biye).',
            'Includes Shubho Drishti, Mala Badal, Saptapadi, and Sindoor Daan.',
            'Chanting of authentic Vedic Sampradan mantras by head priests.',
            'Unites two souls and families with divine blessings.',
            'Performed by experienced Bengali Chief Purohits.'
          ],
          promise: ['Highly Qualified Vedic Bengali Pandits.', 'All rituals follow authentic Bengali Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 25000, priceMax: 75000, rating: 5.0, reviewCount: 35, duration: '4-6 hours', defaultLanguage: 'bengali', imageType: 'ceremony'
        }
      ]
    },
    {
      id: 'odia-pooja-services',
      name: 'Odia Pooja Services',
      icon: '🪔',
      gradient: 'linear-gradient(135deg, #FF6B00, #D84315)',
      description: 'Authentic Odia Vedic Pujas and sacred ceremonies performed by experienced Odia Pandits',
      defaultLanguage: 'odia',
      subheader: 'Pujas',
      services: [
        {
          id: 'odia-annaprashan-puja',
          name: 'Annaprashan Puja',
          shortDesc: 'Sacred first grain feeding ritual for the baby according to Odia traditions.',
          description: 'Annaprashan is the traditional Odia first food feeding ritual. Performed during the 6th or 8th month for boys and 5th or 7th month for girls, sacred Kheer (rice pudding) is offered after invoking Lord Jagannath and family deities for the child\'s longevity, health, and prosperity.',
          keyInsights: [
            'First solid food feeding ritual (Kheer Khia) for the infant.',
            'Invokes blessings of Lord Jagannath, Goddess Lakshmi, and Kula Devata.',
            'Silver coin and utensil testing rituals performed as per Odia traditions.',
            'Ensures digestive health, immunity, and lifelong prosperity.',
            'Conducted on an auspicious tithi with certified Odia pandits.'
          ],
          promise: ['Highly Qualified Vedic Odia Pandits.', 'All rituals follow authentic Odia Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4500, priceMax: 9500, rating: 4.9, reviewCount: 38, duration: '1-2 hours', defaultLanguage: 'odia', imageType: 'ceremony'
        },
        {
          id: 'odia-engagement-nirbandha',
          name: 'Engagement Puja - Nirbandha',
          shortDesc: 'Traditional Odia betrothal ceremony and ring exchange ritual.',
          description: 'Nirbandha is the holy Odia engagement ceremony where the commitment between two families is solemnized in front of sacred fire and elders. Sacred Sankalpa, Lagna Patrika reading, and ring/gift exchanges take place.',
          keyInsights: [
            'Formal Odia wedding betrothal ceremony (Nirbandha).',
            'Recitation of Lagna Patrika and exchange of sacred coconuts & clothes.',
            'Invokes divine blessings of Lord Ganesha and Prajapati for marital harmony.',
            'Fixes the auspicious wedding muhurat (Lagna).',
            'Performed by experienced Odia Vedic pandits.'
          ],
          promise: ['Highly Qualified Vedic Odia Pandits.', 'All rituals follow authentic Odia Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5500, priceMax: 12500, rating: 4.8, reviewCount: 42, duration: '2-3 hours', defaultLanguage: 'odia', imageType: 'ceremony'
        },
        {
          id: 'odia-ganapathi-puja',
          name: 'Ganapathi Puja',
          shortDesc: 'Invocational worship of Lord Ganesha for removing all obstacles.',
          description: 'Traditional Odia Ganapathi Puja performed to invoke Lord Ganesha at the beginning of any auspicious work, venture, or festival. Includes Durba grass offerings, modak naivedya, and Vedic stotras for peace and prosperity.',
          keyInsights: [
            'Vighnaraja worship for removing hurdles and bringing good fortune.',
            'Ritualistic Shodasopachara puja with Durba grass and Laddu/Modak offerings.',
            'Invokes Siddhi and Buddhi for wisdom and career growth.',
            'Purifies the residential or commercial venue.',
            'Suitable for all auspicious occasions and monthly Sankashti Chaturthi.'
          ],
          promise: ['Highly Qualified Vedic Odia Pandits.', 'All rituals follow authentic Odia Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3500, priceMax: 7500, rating: 4.9, reviewCount: 50, duration: '1-2 hours', defaultLanguage: 'odia', imageType: 'pooja'
        },
        {
          id: 'odia-griha-pravesh-gruha-pratistha',
          name: 'Griha Pravesh (Gruha Pratistha)',
          shortDesc: 'Sacred Odia housewarming and Vastu purification ceremony.',
          description: 'Gruha Pratistha is the auspicious Odia housewarming ritual. It purifies the new dwelling through Vastu Puja, Boiling of Milk, Surya Puja, Cow Entry (Gau Puja), and Kirtan to ensure eternal happiness and peace in the new home.',
          keyInsights: [
            'Traditional Odia housewarming (Gruha Pratistha & Dwarabandha Puja).',
            'Includes Vastu Shanti, Navagraha Puja, and Boiling Milk ritual.',
            'Sacred Cow entry (Gau Seva) and Kalash sthapana.',
            'Drives away evil eye, negative energies, and spatial doshas.',
            'Complete Samagri and Vedic Odia Purohit service provided.'
          ],
          promise: ['Highly Qualified Vedic Odia Pandits.', 'All rituals follow authentic Odia Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 9800, priceMax: 28500, rating: 5.0, reviewCount: 47, duration: '3-5 hours', defaultLanguage: 'odia', imageType: 'ceremony'
        },
        {
          id: 'odia-janma-chuti-poka-mundan',
          name: 'Janma Chuti Poka (Mundan)',
          shortDesc: 'First haircut and head-shaving ritual for the child.',
          description: 'Janma Chuti Poka is the sacred Odia Mundan ceremony where the child\'s birth hair is shaved for the first time. It symbolizes the shedding of past-life karma, promoting proper hair growth and brain development.',
          keyInsights: [
            'Traditional Odia first tonsure ceremony (Chudakarana / Chuti Poka).',
            'Purifies the child from birth impurities (Jatashaucha).',
            'Invokes longevity, health, and sharp intellect.',
            'Accompanied by Ayushya Homam and Kuladevata puja.',
            'Performed by specialized Odia pandits.'
          ],
          promise: ['Highly Qualified Vedic Odia Pandits.', 'All rituals follow authentic Odia Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4200, priceMax: 8800, rating: 4.7, reviewCount: 31, duration: '1-2 hours', defaultLanguage: 'odia', imageType: 'ceremony'
        },
        {
          id: 'odia-lakshmi-puja',
          name: 'Lakshmi Puja',
          shortDesc: 'Worship of Maa Lakshmi for prosperity, wealth, and domestic harmony.',
          description: 'Maa Lakshmi Puja in Odia tradition (such as Manabasa Gurubara / Kojagari Lakshmi Puja) involves worshipping the Goddess of Wealth with fresh paddy grains (Mana), alpana (Jhoti), white flowers, and traditional Odia pithas.',
          keyInsights: [
            'Authentic Odia Lakshmi Puja featuring traditional Jhoti (alpana) art.',
            'Offerings of Mana (rice measure), Kakara Pitha, and Payasa.',
            'Brings financial abundance, harmony, and luck to the household.',
            'Performed on Thursdays (Gurubara), Diwali, or full moon days.',
            'Chanting of Sri Suktam and Lakshmi Stotra by Odia priests.'
          ],
          promise: ['Highly Qualified Vedic Odia Pandits.', 'All rituals follow authentic Odia Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4000, priceMax: 9000, rating: 4.9, reviewCount: 45, duration: '2-3 hours', defaultLanguage: 'odia', imageType: 'pooja'
        },
        {
          id: 'odia-namkaran-puja-ekoisia',
          name: 'Namkaran Puja (Ekoisia)',
          shortDesc: '21st day naming and blessing ceremony for the newborn.',
          description: 'Ekoisia is the traditional 21st-day Odia naming ceremony for a newborn baby. The mother and baby undergo purification baths, and the child is officially named based on astrological birth star (Rashi & Nakshatra).',
          keyInsights: [
            'Sacred Odia 21st day ceremony (Ekoisia) for newborn naming.',
            'Purification of mother and child after birth period.',
            'Name calculation based on authentic Odia Panchang & Nakshatra.',
            'Whispering the name into the baby\'s ear with honey and ghee.',
            'Brings longevity, health, and protection to the infant.'
          ],
          promise: ['Highly Qualified Vedic Odia Pandits.', 'All rituals follow authentic Odia Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4800, priceMax: 11500, rating: 4.8, reviewCount: 36, duration: '2-3 hours', defaultLanguage: 'odia', imageType: 'ceremony'
        },
        {
          id: 'odia-office-shop-opening-puja',
          name: 'Office/Shop Opening Puja',
          shortDesc: 'Inaugural worship for new business, shop, or commercial premises.',
          description: 'Performed before starting a new business venture, shop, or corporate office in Odisha traditions. Involves Ganesha Puja, Lakshmi-Kubera Puja, Navagraha Shanti, and Vastu Pujan for commercial prosperity.',
          keyInsights: [
            'Inaugural blessing for commercial enterprises and stores.',
            'Invokes Goddess Lakshmi and Lord Ganesha for high profits & growth.',
            'Clears negative energies and commercial Vastu flaws.',
            'Includes ribbon cutting muhurat and sanctified water sprinkling.',
            'Conducted by qualified Odia Vedic Pandits.'
          ],
          promise: ['Highly Qualified Vedic Odia Pandits.', 'All rituals follow authentic Odia Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5200, priceMax: 18500, rating: 4.9, reviewCount: 40, duration: '2-3 hours', defaultLanguage: 'odia', imageType: 'pooja'
        },
        {
          id: 'odia-saraswati-puja',
          name: 'Saraswati Puja',
          shortDesc: 'Worship of Maa Saraswati for wisdom, education, and arts.',
          description: 'Saraswati Puja in Odia tradition is celebrated with immense devotion, especially on Vasant Panchami. Books, pens, and musical instruments are placed before Goddess Saraswati to seek knowledge and academic excellence.',
          keyInsights: [
            'Worship of the Goddess of Wisdom, Learning, and Fine Arts.',
            'Palasa flowers, white garlands, and Khichdi/Fruit bhog offerings.',
            'Initiates students into higher learning and improves concentration.',
            'Ideal for homes, schools, colleges, and educational institutes.',
            'Includes Saraswati Stotra and Pushpanjali rituals.'
          ],
          promise: ['Highly Qualified Vedic Odia Pandits.', 'All rituals follow authentic Odia Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3800, priceMax: 8500, rating: 4.9, reviewCount: 48, duration: '1-2 hours', defaultLanguage: 'odia', imageType: 'pooja'
        },
        {
          id: 'odia-satyanarayan-puja',
          name: 'Satyanarayan Puja',
          shortDesc: 'Traditional Odia Satyanarayan Pala and Vratha worship.',
          description: 'Satyanarayan Puja (often performed with traditional Odia Pala stotras) invokes Lord Satyanarayan (Vishnu) for family peace, fulfillment of vows, and prosperity. Includes 5 chapters of Satyanarayan Katha and Sirini offerings.',
          keyInsights: [
            'Revered Odia Satyanarayan Puja and Pala recitation.',
            'Special Sirini prasadam made with flour, milk, banana, and sugar.',
            'Fulfills desires, cures hardships, and unites family members.',
            'Suitable for Purnima, Sankranti, birthdays, and housewarmings.',
            'Complete puja material provided by certified Odia Pandits.'
          ],
          promise: ['Highly Qualified Vedic Odia Pandits.', 'All rituals follow authentic Odia Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4500, priceMax: 10500, rating: 5.0, reviewCount: 52, duration: '2-3 hours', defaultLanguage: 'odia', imageType: 'pooja'
        },
        {
          id: 'odia-vishwakarma-puja',
          name: 'Vishwakarma Puja',
          shortDesc: 'Worship of the divine architect for machinery, tools, and factories.',
          description: 'Vishwakarma Puja is widely celebrated in Odisha to honor Lord Vishwakarma, the divine architect. Machinery, vehicles, tools, factories, and construction sites are worshipped for smooth operation and safety.',
          keyInsights: [
            'Annual worship of Lord Vishwakarma for industrial & technical success.',
            'Blessing of tools, vehicles, machines, and software systems.',
            'Prevents workplace accidents and equipment breakdown.',
            'Promotes industrial productivity and craftsmanship.',
            'Conducted by professional Odia Pandits at workplace or home.'
          ],
          promise: ['Highly Qualified Vedic Odia Pandits.', 'All rituals follow authentic Odia Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4200, priceMax: 12000, rating: 4.8, reviewCount: 39, duration: '1-2 hours', defaultLanguage: 'odia', imageType: 'pooja'
        }
      ]
    },
    {
      id: 'rudrabhishekam-pashupatham',
      name: 'Rudrabhishekam & Pashupatham',
      icon: '🔱',
      gradient: 'linear-gradient(135deg, #8E0E00, #1F1C1C)',
      description: 'Sacred Maha Rudrabhishekam and 7 Powerful Pashupatha Homam & Abhishekam Rituals for divine boons, health, victory, wealth, and marital bliss.',
      defaultLanguage: 'telugu',
      services: [
        {
          id: 'rudrabhishekam-pooja',
          name: 'Rudrabhishekam Pooja',
          shortDesc: 'Sacred bath offering to Lord Shiva with Sri Rudram chanting.',
          description: 'Rudrabhishekam is an intense pooja where Lord Shiva is worshipped by bathing the Shiva Linga with holy substances (milk, ghee, honey, Panchamrut) while chanting the powerful Sri Rudram.',
          keyInsights: [
            'One of the most powerful poojas for Lord Shiva.',
            'Bathing is done with milk, ghee, honey, and sacred Gangajal.',
            'Removes doshas and grants peace of mind.',
            'Highly beneficial during Pradosham or Mondays.',
            'Cures diseases and brings prosperity.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 4800, priceMax: 47700, rating: 5.0, reviewCount: 45, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
        {
          id: 'vara-pashupatham',
          name: 'Vara Pashupatham',
          shortDesc: 'Vara Pashupatha Homam for divine boons, wish fulfillment & success.',
          description: 'Vara Pashupatham is a revered Shiva-Shakti ritual invoking Pashupatinatha with Sri Vara Pashupatha Mantra. It bestows divine boons, fulfills deep desires, and grants ultimate success in life.',
          keyInsights: [
            'Grants divine boons and wish fulfillment.',
            'Eliminates major life blockages & failures.',
            'Invokes Pashupatinatha & Parvati for grace.',
            'Ideal for achieving major personal goals.',
            'Conducted by certified Vedic Shivacharyas.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 5500, priceMax: 25000, rating: 5.0, reviewCount: 38, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
        {
          id: 'kanya-pashupatham',
          name: 'Kanya Pashupatham',
          shortDesc: 'Kanya Pashupatha Abhishekam for marriage obstacles & suitable partner.',
          description: 'Kanya Pashupatham is performed for eligible women facing delays in marriage or obstacles in finding a suitable life partner. It removes marital doshas and blesses with a harmonious marriage.',
          keyInsights: [
            'Removes severe delays and obstacles in marriage.',
            'Invokes Goddess Parvati & Lord Pashupati.',
            'Blesses with a compatible and loving life partner.',
            'Restores peace in marital discussions.',
            'Performed by specialized Vedic priests.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 5000, priceMax: 21000, rating: 4.9, reviewCount: 42, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
        {
          id: 'vijay-pashupatham',
          name: 'Vijaya Pashupatham',
          shortDesc: 'Vijaya Pashupatha Homam for victory over enemies & legal disputes.',
          description: 'Vijaya Pashupatham invokes the victorious aspect of Lord Pashupati to overcome fierce competition, court cases, legal disputes, corporate rivalries, and enemy obstacles.',
          keyInsights: [
            'Grants victory in court cases and legal matters.',
            'Neutralizes enemy conspiracies and opposition.',
            'Ensures success in high-stakes ventures.',
            'Protects against malice and evil eye.',
            'Conducted by senior Vedic Acharyas.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 6000, priceMax: 28000, rating: 5.0, reviewCount: 36, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'aarogya-pashupatham',
          name: 'Aarogya Pashupatham',
          shortDesc: 'Aarogya Pashupatha Abhishekam for radiant health & vitality.',
          description: 'Aarogya Pashupatham is performed for physical health, mental strength, and protection from illnesses. Sacred herbal juices and bilva patra are offered to Lord Pashupati.',
          keyInsights: [
            'Restores physical energy and immunity.',
            'Wards off chronic health ailments & mental stress.',
            'Includes Bilva Archana and Sacred Abhishekam.',
            'Promotes long life and wellness.',
            'Performed by certified Shivacharya Brahmins.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 5200, priceMax: 22500, rating: 4.9, reviewCount: 40, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
        {
          id: 'dhanvantari-pashupatham',
          name: 'Dhanvantari Pashupatham',
          shortDesc: 'Dhanvantari Pashupatha Homam for supreme healing & chronic relief.',
          description: 'Combines the divine healing attributes of Lord Dhanvantari and Pashupatinatha. Medicinal ghee, herbs, and lotus petals are offered into the sacred fire to cure long-standing health issues.',
          keyInsights: ['Supreme fire ritual for healing critical illness.', 'Invokes divine doctors Dhanvantari & Lord Shiva.', 'Offers 108 medicinal herbs into holy fire.', 'Accelerates medical recovery and vitality.', 'Conducted by senior Vedic Pandits.'],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 6500, priceMax: 32000, rating: 5.0, reviewCount: 35, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'kubera-pashupatham',
          name: 'Kubera Pashupatham',
          shortDesc: 'Kubera Pashupatha Homam for wealth, business luck & abundance.',
          description: 'Kubera Pashupatham invokes Lord Kubera and Pashupati Shiva to unlock financial prosperity, clear business debts, attract wealth, and expand commercial revenue.',
          keyInsights: [
            'Attracts immense financial wealth and profit.',
            'Resolves financial stagnation and heavy debts.',
            'Offerings of Lotus flowers, gold coins & ghee.',
            'Blesses commercial establishments & investments.',
            'Performed by certified Vedic Priests.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 7000, priceMax: 35000, rating: 5.0, reviewCount: 48, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'kalyanam-pashupatham',
          name: 'Kalyana Pashupatham',
          shortDesc: 'Kalyana Pashupatha Homam for marital harmony, love & relationship bliss.',
          description: 'Kalyana Pashupatham is performed for married couples to enhance mutual love, resolve marital friction, ensure family harmony, and bless with blissful togetherness.',
          keyInsights: [
            'Restores deep love and trust between husband & wife.',
            'Resolves marital conflicts and family misunderstandings.',
            'Includes Shiva-Parvati Kalyanam & Special Homam.',
            'Ensures lifelong relationship stability.',
            'Conducted by senior Vedic Brahmins.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards.', 'High-quality Samagri included.', 'Guaranteed Punctuality.'],
          priceMin: 5800, priceMax: 26000, rating: 4.9, reviewCount: 44, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'homam'
        }
      ]
    },
    {
      id: 'ceremonies',
      name: 'Ceremonies',
      icon: '🪔',
      gradient: 'linear-gradient(135deg, #E65100, #FF9933)',
      description: 'Sacred life ceremonies marking important milestones',
      services: [
        {
          id: 'aksharabhyasam',
          name: 'Aksharabhyasam',
          shortDesc: 'Initiation of education and writing.',
          description: 'Aksharabhyasam is one of the 16 sanskaras to be performed, in which when the baby attains age two years and above will be initiated to write the first letter for the first time to get the blessings from Matha Saraswati and Lord Ganesh by performing the Aksharabhyasam pooja to start their schooling life successfully.',
          keyInsights: [
            'Baby writes for the first time with Lords blessing.',
            'It helps the baby to grow healthy and strong.',
            'Performed on any auspicious day after the child attains 2.5 yrs of age.',
           'Mantras are chanted for the baby’s well-being.',

          ],
          promise: ['Highly Qualified and Vedic Pandits.',
                    'All rituals follow Vedic Standards and Procedures.',
                    'High-quality Samagri to ensure a pleasant Puja experience.',
                    'Guaranteed Punctuality and Authenticity.',
                    'Professional Guidance & Support.'],
          priceMin: 4800, priceMax: 9800, rating: 4.9, reviewCount: 45, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },

        // 888888888888888
        {
          id: 'annaprasanam',
          name: 'Annaprasanam',
          shortDesc: 'First feeding ceremony for the baby.',
           keyInsights: [
            'Baby takes solid food for the first time.',
            'It helps the baby to grow healthy and strong.',
            'Performed on 6th or 7th month on Janma Nakshatra day.',
            'Mantras are chanted for the baby’s well-being.',
            'Kheer or Milk Rice is the main ingredient for the ceremony.'
          ],
            promise: ['Highly Qualified and Vedic Pandits.',
                    'All rituals follow Vedic Standards and Procedures.',
                    'High-quality Samagri to ensure a pleasant Puja experience.',
                    'Guaranteed Punctuality and Authenticity.',
                    'Professional Guidance & Support.'],
          priceMin: 4800, priceMax: 18800, rating: 4.8, reviewCount: 38, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },

        // 8888888888888888
        {
          id: 'barasala',
          name: 'Barasala (Namakaranam)',
          shortDesc: 'Naming ceremony for the newborn.',
          description: 'Barasala or Namakaranam is the traditional Hindu naming ceremony. It formally introduces the child to the community and bestows a meaningful name aligned with astrological stars.',
          keyInsights: [
            'Formal naming of the newborn child.',
            'Usually performed on the 11th or 21st day after birth.',
            'Name is chosen based on birth star (Nakshatra).',
            'Blessings from elders and deities are sought.',
            'Honey is often touched to the baby\'s lips.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3000, priceMax: 15000, rating: 4.7, reviewCount: 50, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },


        // 8888888888888888
        {
          id: 'bhima-ratha-shanti',
          name: 'Bhima Ratha Shanti (70th Birthday)',
          shortDesc: 'Celebration and shanti for 70th birthday.',
          description: 'Bhima Ratha Shanti is performed when a person completes 70 years of age. It includes homams and poojas to pray for continued health, vitality, and spiritual progress in their twilight years.',
          keyInsights: [
            'Marks the completion of 70 years.',
            'Includes specific homams for health and longevity.',
            'Removes doshas related to aging.',
            'Seeks blessings from the Trinity.',
            'A grand celebration with family and relatives.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 19800, priceMax: 138000, rating: 4.9, reviewCount: 12, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },


        // 888888888888888888888888
        {
          id: 'devata-kalyanotsavam',
          name: 'Devata Kalyanotsavam',
          shortDesc: 'Divine marriage ceremony of deities.',
          description: 'Kalyanotsavam is the celestial wedding of the presiding deities, performed for the welfare of the world and to bring auspiciousness, peace, and prosperity to the sponsors.',
          keyInsights: [
            'The marriage ceremony is performed for Lords.',
            'Brings immense peace and prosperity to the family.',
            'Removes obstacles in marriage for devotees.',
            'A highly elaborate and sacred ritual.',
            'Can be performed at home or in temples.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 38000, priceMax: 97999, rating: 5.0, reviewCount: 22, duration: '3-5 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },


        // 8888888888888888888/
        {
          id: 'fix-your-muhurtham',
          name: 'Fix Your Muhurtham',
          shortDesc: 'Astrological consultation for auspicious timings.',
          description: 'Consult with expert astrologers and pandits to fix the most auspicious Muhurtham (timing) for your important life events like marriage, housewarming, or starting a business.',
          keyInsights: [
            'Calculation based on exact birth details.',
            'Ensures alignment of positive planetary energies.',
            'Avoids inauspicious times (Rahu Kalam, Yamagandam).',
            'Tailored for specific types of events.',
            'Crucial for the long-term success of the endeavor.'
          ],
          priceMin: 299, priceMax: 499, rating: 4.6, reviewCount: 40, duration: '1 hour', defaultLanguage: 'telugu', imageType: 'ceremony'
        },


        // 8888888888888888888888888888
        {
          id: 'gruhapravesam',
          name: 'Gruhapravesam',
          shortDesc: 'Housewarming ceremony for a new home.',
          description: 'Gruhapravesam is performed before moving into a new house. It purifies the space, wards off negative energies, and invokes blessings for a happy, prosperous, and peaceful life in the new home.',
          keyInsights: [
            'Purifies the new living space.',
            'Involves Vastu Shanti and Navagraha Homam.',
            'Boiling of milk is a key tradition.',
            'Brings positive energy into the house.',
            'Seeks blessings of Lord Ganesha and Lakshmi.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: (18800), priceMax: 91999, rating: 4.9, reviewCount: 50, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },

        // 99999999999999999999999
        {
          id: 'karna-vedha',
          name: 'Karna Vedha',
          shortDesc: 'Sacred ear-piercing ceremony.',
          description: 'Karna Vedha is a traditional Hindu ceremony where a child\'s ears are pierced. It is believed to open the inner ears for receiving sacred sounds and promotes physical health.',
          keyInsights: [
            'One of the 16 major Samskaras.',
            'Believed to prevent diseases like hernia.',
            'Enhances the child\'s hearing and intellect.',
            'Usually performed in the 1st or 3rd year.',
            'Accompanied by Ayush Homam.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5600, priceMax: 11600, rating: 4.8, reviewCount: 15, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },


        // 8888888888888888888
        {
          id: 'marriage',
          name: 'Marriage',
          shortDesc: 'Traditional Vedic wedding ceremony.',
          description: 'A complete Vedic marriage ceremony conducted with utmost devotion. It unites two souls in holy matrimony through sacred rituals like Kanyadanam, Mangalya Dharanam, and Saptapadi.',
          keyInsights: [
            'The most significant Samskara in Hindu life.',
            'Involves elaborate rituals spanning several hours.',
            'Saptapadi (seven steps) solidifies the vows.',
            'Brings two families together.',
            'Performed by experienced head priests.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 50000, priceMax: 150000, rating: 5.0, reviewCount: 30, duration: '6-10 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },


        // 9999999999999999999999999999
        {
          id: 'nischitartham',
          name: 'Nischitartham',
          shortDesc: 'Formal engagement ceremony.',
          description: 'Nischitartham is the official engagement ceremony where two families agree to the marriage. Rings are exchanged, and the marriage date (Muhurtham) is formally announced in front of elders.',
          keyInsights: [
            'Formalizes the marriage alliance.',
            'Exchange of rings and gifts.',
            'Reading of the Lagna Patrika.',
            'Seeking blessings of the ancestors and elders.',
            'A joyous pre-wedding celebration.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5600, priceMax: 6800, rating: 4.7, reviewCount: 25, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },

        // 9999999999999999999
        {
          id: 'pandiri-rata-pooja',
          name: 'Pandiri Rata Pooja',
          shortDesc: 'Erection of the marriage pandal.',
          description: 'Pandiri Rata Pooja is performed before erecting the wedding pandal (tent). It invokes the blessings of the earth and nature deities for a smooth and uninterrupted marriage celebration.',
          keyInsights: [
            'Initiates the physical preparations for a wedding.',
            'Worship of the main pillar of the pandal.',
            'Ensures no obstacles during the main event.',
            'Performed by families of both bride and groom.',
            'Signifies the start of wedding festivities.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3800, priceMax: 4800, rating: 4.5, reviewCount: 8, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },

        // 99999999999999999999999
        {
          id: 'sashtiapthapoorthi',
          name: 'Sashtiapthapoorthi (60th Birthday)',
          shortDesc: 'Celebration of completion of 60 years.',
          description: 'Sashtiapthapoorthi, or Ugraratha Shanti, is celebrated when a man completes 60 years. It marks the renewal of marital vows and involves prayers for health, peace, and spiritual growth.',
          keyInsights: [
            'Marks the completion of 60 years of age.',
            'Couples renew their marriage vows.',
            'Elaborate homams are performed for longevity.',
            'Seeks blessings for the next phase of life.',
            'A major family reunion event.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 19800, priceMax: 138000, rating: 5.0, reviewCount: 18, duration: '5-8 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },

        // 99999999999999999999999
        {
          id: 'sathabhishekam',
          name: 'Sathabhishekam (80th Birthday)',
          shortDesc: 'Grand celebration for 80th birthday.',
          description: 'Sathabhishekam is a grand ceremony celebrating a person\'s 80th birthday, especially when they have seen a thousand full moons. It honors their long life and seeks divine grace for their continued well-being.',
          keyInsights: [
            'Celebrates 80 years or seeing 1000 full moons.',
            'Considered a highly auspicious milestone.',
            'Involves bathing the elder with holy waters.',
            'Extensive chanting of Vedic mantras.',
            'A time of deep gratitude and celebration.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 15800, priceMax: 123000, rating: 5.0, reviewCount: 10, duration: '5-8 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },

        // 99999999999999999999999999999
        {
          id: 'seemantham',
          name: 'Seemantham (Baby Shower)',
          shortDesc: 'Blessing the expectant mother.',
          description: 'Seemantham is performed during the 7th or 9th month of pregnancy. It aims to protect the mother and child from evil eyes and invokes blessings for a safe delivery and healthy baby.',
          keyInsights: [
            'Protects the pregnant mother and fetus.',
            'Bangles are put on the mother for positive sounds.',
            'Invokes blessings for safe childbirth.',
            'A joyous celebration for women in the family.',
            'Nourishing food is offered to the mother.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 11800, priceMax: 19800, rating: 4.8, reviewCount: 35, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },

        // 0000000000000000
        {
          id: 'upanayanam',
          name: 'Upanayanam',
          shortDesc: 'Sacred thread ceremony.',
          description: 'Upanayanam is the sacred thread ceremony that initiates a boy into the study of the Vedas and spiritual practices. It marks his second birth, empowering him to perform Vedic rituals.',
          keyInsights: [
            'Initiation into Brahmacharya phase of life.',
            'The boy receives the sacred Gayatri Mantra.',
            'Wearing of the Yajnopavitam (sacred thread).',
            'Requires strict adherence to spiritual discipline.',
            'A vital milestone in a young boy\'s life.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 25800, priceMax: 118800, rating: 4.9, reviewCount: 28, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
        // 0000000000000000000
        {
          id: 'venkateshwara-kalyanotsavam',
          name: 'Venkateshwara Kalyanotsavam',
          shortDesc: 'Divine wedding of Lord Venkateshwara.',
          description: 'A highly auspicious ceremony re-enacting the wedding of Lord Venkateshwara and Goddess Padmavathi. It is performed for the overall prosperity, peace, and well-being of the family.',
          keyInsights: [
            'Brings the blessings of Tirupati Balaji to your home.',
            'Ensures marital harmony and prosperity.',
            'Removes obstacles and doshas.',
            'Involves elaborate alankaram and chanting.',
            'A deeply spiritual and uplifting experience.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 15000, priceMax: 97999, rating: 5.0, reviewCount: 20, duration: '3-5 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        }
      ]

      // 0000000000000000000000
    },
    {
      id: 'poojalu',
      name: 'Poojalu',
      icon: '🙏',
      gradient: 'linear-gradient(135deg, #C41E3A, #FF6B6B)',
      description: 'Traditional worship and prayer ceremonies',
      services: [
        {
          id: 'ayudha-pooja',
          name: 'Ayudha Pooja',
          shortDesc: 'Worship of tools and instruments.',
          description: 'Ayudha Pooja is performed to express gratitude for the tools, instruments, and vehicles that aid in one\'s livelihood, seeking success and safety in professional endeavors.',
          keyInsights: [
            'Part of the Navaratri festival celebrations.',
            'Blesses tools, machinery, and vehicles.',
            'Promotes safety and prosperity in work.',
            'Invokes Goddess Saraswati, Parvati, and Lakshmi.',
            'Essential for factories and businesses.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3200, priceMax: 3800, rating: 4.8, reviewCount: 40, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },

        // 00000000000000000000
        {
          id: 'bhoomi-pooja',
          name: 'Bhoomi Pooja (Sankusthapana)',
          shortDesc: 'Blessing the land before construction.',
          description: 'Bhoomi Pooja is conducted before commencing any construction. It seeks the permission and blessings of Mother Earth (Bhoomi Devi) to ensure a smooth and successful building process.',
          keyInsights: [
            'Must be performed before digging the land.',
            'Appeases Bhoomi Devi and Vastu Purusha.',
            'Removes negative energies from the plot.',
            'Ensures safety during construction.',
            'A foundational ritual for any property.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4800, priceMax: 5800, rating: 4.9, reviewCount: 38, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },

        // 000000000000000000000
        {
          id: 'chandi-saptashati-parayanam',
          name: 'Chandi Saptashati Parayanam',
          shortDesc: 'Chanting of 700 verses of Goddess Durga.',
          description: 'A powerful recitation of the 700 verses from the Devi Mahatmyam. It invokes the supreme energy of Goddess Chandi to destroy negativity, enemies, and obstacles in life.',
          keyInsights: [
            'Highly potent for removing severe obstacles.',
            'Brings victory and success in endeavors.',
            'Protects against black magic and evil forces.',
            'Requires intense devotion and purity.',
            'Usually takes several hours to complete.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4800, priceMax: 22800, rating: 5.0, reviewCount: 22, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },


        // 00000000000000000000000
        {
          id: 'dhanalakshmi-pooja',
          name: 'Dhanalakshmi Pooja',
          shortDesc: 'Worship for wealth and prosperity.',
          description: 'Dhanalakshmi Pooja is performed to invoke Goddess Lakshmi, the deity of wealth and prosperity. It is done to resolve financial crises, clear debts, and attract abundance.',
          keyInsights: [
            'Attracts wealth and financial stability.',
            'Helps in overcoming business losses.',
            'Especially auspicious on Fridays or Diwali.',
            'Involves offering lotus flowers and coins.',
            'Brings harmony and prosperity to the home.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4200, priceMax: 4500, rating: 4.9, reviewCount: 45, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },

        // 000000000000000000000000
        {
          id: 'durga-pooja',
          name: 'Durga Pooja',
          shortDesc: 'Worship of Goddess Durga for protection.',
          description: 'Durga Pooja is performed to seek the protective grace of Mother Durga. It destroys evil forces, removes fear, and instills courage and confidence in the devotees.',
          keyInsights: [
            'Invokes the fierce protective aspect of the Divine Mother.',
            'Removes fear and negative influences.',
            'Provides strength to overcome challenges.',
            'Highly beneficial during Navaratri.',
            'Involves recitation of Durga Suktam.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3200, priceMax: 3800, rating: 4.9, reviewCount: 32, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },

            // 00000000000000000000
        {
          id: 'ganapati-pooja',
          name: 'Ganapati Pooja',
          shortDesc: 'Worship of the remover of obstacles.',
          description: 'Ganapati Pooja is the foundational worship in Hinduism, performed before any new venture or ritual. It ensures that the undertaking is completed without any hurdles.',
          keyInsights: [
            'Always performed first in any Hindu ritual.',
            'Removes obstacles (Vighna Nasana).',
            'Ensures success in new beginnings.',
            'Modak and Durva grass are key offerings.',
            'Brings wisdom and intellect.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4500, priceMax: 9500, rating: 4.8, reviewCount: 50, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },


        // 0000000000000000000000
        {
          id: 'kedareswara-nomu',
          name: 'Kedareswara Nomu or Vratham',
          shortDesc: 'Fasting and prayer for Lord Shiva.',
          description: 'Kedareswara Vratham is observed with intense devotion, primarily by women, for the longevity, health, and prosperity of their husbands and families, seeking Lord Shiva\'s blessings.',
          keyInsights: [
            'Dedicated to Lord Shiva (Kedareswara).',
            'Observed strictly for family well-being.',
            'A 21-thread toram is tied on the wrist.',
            'Usually performed during the month of Karthika.',
            'Brings immense peace and marital harmony.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4500, priceMax: 10500, rating: 4.7, reviewCount: 15, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },

        // 000000000000000000000000
        {
          id: 'lalitha-sahasranama-pooja',
          name: 'Lalitha Sahasranama Pooja',
          shortDesc: 'Chanting of 1000 names of Goddess Lalitha.',
          description: 'A deeply spiritual pooja involving the recitation of the 1000 names of Goddess Lalitha Tripura Sundari. It brings immense peace, prosperity, and spiritual elevation.',
          keyInsights: [
            'Highly revered text from Brahmanda Purana.',
            'Invokes the Divine Mother in her supreme form.',
            'Kumkumarchana is often performed during chanting.',
            'Removes doshas and grants all desires.',
            'Very auspicious on Fridays and full moon days.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4800, priceMax: 66000, rating: 5.0, reviewCount: 42, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },

        // 0000000000000000000000
        {
          id: 'maha-lingarchana',
          name: 'Maha Lingarchana',
          shortDesc: 'Elaborate worship using clay Shiva Lingas.',
          description: 'Maha Lingarchana involves creating and worshipping hundreds or thousands of small clay Shiva Lingas. It is a highly meritorious ritual for health, wealth, and liberation.',
          keyInsights: [
            'Worship of usually 365 or 1116 Parthiva Lingas.',
            'Extremely pleasing to Lord Shiva.',
            'Helps in overcoming severe health issues.',
            'Grants moksha and material prosperity.',
            'Requires meticulous preparation and devotion.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 2200, priceMax: 2500, rating: 5.0, reviewCount: 18, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },

        // 00000000000000000
        {
          id: 'new-business-office-opening-pooja',
          name: 'New Business / Office Opening Pooja',
          shortDesc: 'Inaugural pooja for a new business.',
          description: 'Performed before starting operations in a new office or shop. It invokes Lord Ganesha and Goddess Lakshmi to bless the business with profitability, growth, and a positive environment.',
          keyInsights: [
            'Ensures a prosperous start to business operations.',
            'Removes negative energies from the workspace.',
            'Builds positive morale among employees.',
            'Involves Navagraha and Vastu Poojas.',
            'Crucial for commercial success.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4800, priceMax: 20800, rating: 4.8, reviewCount: 48, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },

        // 000000000000000000000
        {
          id: 'new-vehicle-pooja',
          name: 'New Vehicle Pooja',
          shortDesc: 'Blessing ceremony for a new vehicle.',
          description: 'A brief yet significant pooja performed on a newly purchased vehicle. It seeks the protection of deities to ensure safe travels and guard against accidents.',
          keyInsights: [
            'Protects the vehicle and its passengers.',
            'Wards off negative energies and evil eye.',
            'Crushing of lemons under tires is customary.',
            'Quick but essential ritual.',
            'Can be done at home or temple.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 2200, priceMax: 2500, rating: 4.7, reviewCount: 50, duration: '1 hour', defaultLanguage: 'telugu', imageType: 'pooja'
        },


        // 0000000000000000
        {
          id: 'punyahavachanam',
          name: 'Punyahavachanam',
          shortDesc: 'Purification ritual for home or individuals.',
          description: 'Punyahavachanam is a cleansing ritual performed to purify a place or person after events like birth or death. It involves chanting mantras and sprinkling holy water.',
          keyInsights: [
            'Restores purity (Shuddhi) to a space or person.',
            'Essential before starting major religious events.',
            'Involves worship of Lord Varuna.',
            'Holy water (Tirtham) is sprinkled using mango leaves.',
            'Clears impurities and negative vibes.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3200, priceMax: 3500, rating: 4.8, reviewCount: 30, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },


        // 000000000000000000
        {
          id: 'rudrabhishekam-pooja',
          name: 'Rudrabhishekam Pooja',
          shortDesc: 'Sacred bath offering to Lord Shiva.',
          description: 'Rudrabhishekam is an intense pooja where Lord Shiva is worshipped by bathing the Shiva Linga with holy substances while chanting the powerful Sri Rudram.',
          keyInsights: [
            'One of the most powerful poojas for Lord Shiva.',
            'Bathing is done with milk, ghee, honey, etc.',
            'Removes doshas and grants peace of mind.',
            'Highly beneficial during Pradosham or Mondays.',
            'Cures diseases and brings prosperity.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4800, priceMax: 47700, rating: 5.0, reviewCount: 45, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },

        // 00000000000000000000
        {
          id: 'saraswathi-pooja',
          name: 'Saraswathi Pooja',
          shortDesc: 'Worship of the Goddess of Knowledge.',
          description: 'Saraswathi Pooja is performed to seek the blessings of the Goddess of knowledge, music, arts, and wisdom. It is especially beneficial for students and professionals.',
          keyInsights: [
            'Enhances memory, concentration, and intellect.',
            'Books and instruments are kept for blessings.',
            'Prominently celebrated during Navaratri.',
            'Removes obstacles in education.',
            'Brings clarity of thought.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3800, priceMax: 7800, rating: 4.9, reviewCount: 35, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },

        // 0000000000000000000
        {
          id: 'satyanarayana-pooja',
          name: 'Satyanarayana Pooja',
          shortDesc: 'Worship of Lord Vishnu for truth and prosperity.',
          description: 'A very popular and auspicious pooja dedicated to Lord Satyanarayana (Vishnu). It is usually performed on full moon days or special occasions to bring abundance, peace, and joy.',
          keyInsights: [
            'Can be performed on any auspicious day.',
            'Involves reciting the Satyanarayana Katha (story).',
            'Brings family harmony and prosperity.',
            'Prasadam made of semolina and banana is offered.',
            'A joyous and communal prayer event.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4800, priceMax: 9800, rating: 5.0, reviewCount: 50, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },

        // 00000000000000000000
        {
          id: 'udaka-shanti',
          name: 'Udaka Shanti',
          shortDesc: 'Purification and peace-invoking ritual.',
          description: 'Udaka Shanti is performed to invoke peace and purity. Sacred waters in a Kalash are infused with powerful Vedic mantras, and the water is then sprinkled to purify the surroundings.',
          keyInsights: [
            'Often performed before weddings or upanayanams.',
            'Purifies the mind, body, and environment.',
            'Involves chanting of the Udaka Shanti mantras.',
            'Wards off evil spirits and bad omens.',
            'Brings tranquility and auspiciousness.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 15800, priceMax: 24800, rating: 4.8, reviewCount: 20, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },

        // 000000000000000000000
        {
          id: 'varalakshmi-pooja',
          name: 'Varalakshmi Pooja',
          shortDesc: 'Fasting and prayer for Goddess Lakshmi.',
          description: 'Varalakshmi Vratam is a sacred fasting day observed by married women for the well-being of their husbands and family, invoking the boon-granting form of Goddess Lakshmi.',
          keyInsights: [
            'Observed on a Friday in Sravana month.',
            'Grants boons (Vara) of health, wealth, and family.',
            'A sacred thread is tied on the right hand.',
            'Worship of the Kalash decorated as the Goddess.',
            'Highly revered among South Indian women.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3200, priceMax: 3800, rating: 4.9, reviewCount: 42, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
        // 00000000000
        {
          id: 'vasakal-Pooja',
          name: 'Vasakal Pooja (Dwarabandhanam)',
          shortDesc: 'Pooja for the main door frame.',
          description: 'Dwarabandhanam is performed during house construction when fixing the main entrance door frame. It invites auspiciousness and blocks negative energies from entering the house.',
          keyInsights: [
            'Vital step in house construction.',
            'Worship of the main doorway threshold.',
            'Ensures a secure and blessed home.',
            'Invokes protective deities.',
            'Marks the formal defining of the home\'s entrance.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4200, priceMax: 4800, rating: 4.7, reviewCount: 12, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },


        // 00000000000000000000
        {
          id: 'vastu-shanti-pooja',
          name: 'Vastu Shanti Pooja',
          shortDesc: 'Pacifying the Vastu Purusha for harmony.',
          description: 'Vastu Shanti is performed to correct any architectural or directional flaws (Vastu Doshas) in a building, ensuring peace, prosperity, and health for its occupants.',
          keyInsights: [
            'Essential for new homes and offices.',
            'Pacifies the Vastu Purusha (deity of the plot).',
            'Neutralizes negative energies due to structural defects.',
            'Brings harmony among family members.',
            'Involves Vastu Homam and Navagraha Pooja.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 16800, priceMax: 22800, rating: 4.9, reviewCount: 38, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },

        // 000000000000000000
        {
          id: 'vishnu-sahasranama-pooja',
          name: 'Vishnu Sahasranama Pooja',
          shortDesc: 'Chanting of 1000 names of Lord Vishnu.',
          description: 'A deeply meditative pooja involving the recitation of the thousand names of Lord Vishnu. It brings ultimate peace, protection from evil, and spiritual elevation.',
          keyInsights: [
            'A potent stotra from the Mahabharata.',
            'Brings mental peace and removes fear.',
            'Protects against planetary afflictions.',
            'Tulsi leaves are primarily used for worship.',
            'Aids in achieving both material and spiritual goals.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4800, priceMax: 66000, rating: 5.0, reviewCount: 30, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        }
      ]

      // 00000000000000000000000
    },
    {
      id: 'homalu',
      name: 'Homalu',
      icon: '🔥',
      gradient: 'linear-gradient(135deg, #FF6B00, #FFA000)',
      description: 'Sacred fire rituals for specific benefits',
      services: [
        {
          id: 'ayushya-homam',
          name: 'Ayushya Homam',
          shortDesc: 'Fire ritual for health and longevity.',
          description: 'Ayushya Homam is performed to invoke the blessings of Ayur Devata for a long, healthy, and disease-free life. It is especially performed on birthdays.',
          keyInsights: [
            'Performed typically on the 1st birthday or milestone birthdays.',
            'Removes health-related afflictions.',
            'Boiled rice and ghee are primary offerings.',
            'Promotes physical and mental well-being.',
            'Invokes the deity of life force.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 9800, priceMax: 42100, rating: 4.9, reviewCount: 35, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },

        // 0000000000000
        {
          id: 'chandi-homam',
          name: 'Chandi Homam',
          shortDesc: 'Ultimate fire ritual for success and protection.',
          description: 'Chandi Homam is one of the most powerful Vedic rituals, performed to invoke Goddess Durga. It removes massive obstacles, enemies, and brings ultimate victory.',
          keyInsights: [
            'A grand and elaborate homam.',
            'Requires strict discipline and expert priests.',
            'Clears deep karmic blockages.',
            'Involves recitation of 700 verses (Saptashati).',
            'Grants strength, courage, and immense success.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 28000, priceMax: 99000, rating: 5.0, reviewCount: 40, duration: '5-8 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },

        // ///////////////////
        {
          id: 'dhanvantari-homam',
          name: 'Dhanvantari Homam',
          shortDesc: 'Fire ritual for curing diseases.',
          description: 'Dedicated to Lord Dhanvantari, the divine physician, this homam is performed to cure chronic illnesses, improve vitality, and ensure excellent physical health.',
          keyInsights: [
            'Invokes the God of Ayurveda.',
            'Highly effective for severe or chronic health issues.',
            'Medicinal herbs are offered in the fire.',
            'Brings positive healing energy.',
            'Aids in quick recovery post-surgery.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 6000, priceMax: 22000, rating: 4.9, reviewCount: 25, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'durga-homam',
          name: 'Durga Homam',
          shortDesc: 'Fire ritual for protection and courage.',
          description: 'Durga Homam is performed to seek the fierce protection of Goddess Durga. It destroys negative forces, removes fear, and grants the courage to face life\'s challenges.',
          keyInsights: [
            'Wards off enemies and evil eye.',
            'Provides a shield of divine protection.',
            'Builds self-confidence and strength.',
            'Especially powerful during Navaratri.',
            'Removes sorrow and struggles.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 7000, priceMax: 25000, rating: 4.8, reviewCount: 30, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'ganapathi-homam',
          name: 'Ganapathi Homam',
          shortDesc: 'Fire ritual to remove obstacles.',
          description: 'Ganapathi Homam is usually the first fire ritual performed before starting new ventures, building a house, or entering a new phase of life, to ensure hurdle-free success.',
          keyInsights: [
            'Removes Vighnas (obstacles).',
            'Brings auspicious beginnings.',
            'Ashtadravya (8 items) are commonly offered.',
            'Usually done early in the morning.',
            'Grants wisdom and smooth progress.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4000, priceMax: 15000, rating: 4.9, reviewCount: 50, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'hayagreeva-homam',
          name: 'Hayagreeva Homam',
          shortDesc: 'Fire ritual for knowledge and education.',
          description: 'Dedicated to Lord Hayagreeva (the horse-headed avatar of Vishnu), this homam is highly beneficial for students and professionals to attain superior knowledge, memory, and analytical skills.',
          keyInsights: [
            'Enhances memory power and concentration.',
            'Removes laziness and academic obstacles.',
            'Ideal for students facing exams.',
            'Brings clarity and eloquence in speech.',
            'Invokes divine wisdom.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5000, priceMax: 18000, rating: 4.8, reviewCount: 22, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'kala-bhairava-homam',
          name: 'Kala Bhairava Homam',
          shortDesc: 'Fire ritual for time management and protection.',
          description: 'Kala Bhairava Homam invokes the fierce form of Lord Shiva who controls time. It helps in overcoming debts, protecting against accidents, and managing time effectively.',
          keyInsights: [
            'Protects against black magic and evil forces.',
            'Helps in clearing heavy debts.',
            'Overcomes the fear of death and accidents.',
            'Improves punctuality and efficiency.',
            'Best performed on Ashtami thithi.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 6000, priceMax: 20000, rating: 4.7, reviewCount: 15, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'karthaveeryarjuna-homam',
          name: 'Karthaveeryarjuna Homam',
          shortDesc: 'Fire ritual to recover lost wealth.',
          description: 'This specific homam is performed to recover lost or stolen property, wealth, or people. It invokes the powerful king Karthaveeryarjuna to bring back what rightfully belongs to you.',
          keyInsights: [
            'Highly specific for recovering lost items/money.',
            'Helps in resolving property disputes.',
            'Removes obstacles in receiving trapped funds.',
            'A very rare and specialized ritual.',
            'Requires precise chanting.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 8000, priceMax: 25000, rating: 4.6, reviewCount: 10, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'lakshmi-ganapathi-homam',
          name: 'Lakshmi Ganapathi Homam',
          shortDesc: 'Fire ritual for wealth and obstacle removal.',
          description: 'A combined worship of Goddess Lakshmi and Lord Ganesha in the fire to simultaneously remove obstacles and bring abundant wealth, making it ideal for business success.',
          keyInsights: [
            'Dual benefits of success and prosperity.',
            'Ideal for business owners and entrepreneurs.',
            'Brings financial stability.',
            'Clears the path for career growth.',
            'A very popular and auspicious homam.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 6000, priceMax: 22000, rating: 5.0, reviewCount: 45, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'lakshmi-kubera-homam',
          name: 'Lakshmi Kubera Homam',
          shortDesc: 'Fire ritual for extreme wealth and prosperity.',
          description: 'This homam invokes Goddess Lakshmi and Lord Kubera (the banker of heaven) to attract massive wealth, clear huge debts, and ensure long-term financial security.',
          keyInsights: [
            'Attracts new avenues of income.',
            'Helps in wealth accumulation and retention.',
            'Beneficial for large business deals.',
            'Usually performed on Fridays or Akshaya Tritiya.',
            'Uses coins and specific herbs for offering.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 7000, priceMax: 25000, rating: 4.9, reviewCount: 38, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'lakshmi-narasimha-homam',
          name: 'Lakshmi Narasimha Homam',
          shortDesc: 'Fire ritual for protection and peace.',
          description: 'Invokes the fierce yet compassionate form of Lord Narasimha along with Goddess Lakshmi to grant immediate protection from enemies, severe illnesses, and to bring peace.',
          keyInsights: [
            'Provides immediate relief from sudden problems.',
            'Cures severe health issues.',
            'Removes hidden enemies and jealousy.',
            'Brings a sense of absolute security.',
            'Pacifies negative planetary influences.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 8000, priceMax: 25000, rating: 4.9, reviewCount: 20, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'maha-mrityunjaya-homam',
          name: 'Maha Mrityunjaya Homam',
          shortDesc: 'Ultimate fire ritual to conquer death/disease.',
          description: 'A deeply powerful homam invoking Lord Shiva as the conqueror of death. It is performed for critically ill patients to restore health, vitality, and prevent untimely death.',
          keyInsights: [
            'Chanting of the powerful Mrityunjaya Mantra.',
            'Extremely effective for severe illnesses.',
            'Wards off Apamrityu (untimely death).',
            'Brings immense positive healing vibrations.',
            'Requires significant preparation and devotion.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 12000, priceMax: 45000, rating: 5.0, reviewCount: 32, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'maha-sudarshana-homam',
          name: 'Maha Sudarshana Homam',
          shortDesc: 'Fire ritual for ultimate protection and victory.',
          description: 'Invokes the Sudarshana Chakra, the divine weapon of Lord Vishnu. It is a highly powerful homam to destroy negative energies, enemies, and grant victory in all endeavors.',
          keyInsights: [
            'Destroys unseen enemies and evil forces.',
            'Brings quick relief from unexplainable sufferings.',
            'Ensures success in legal or competitive matters.',
            'Often combined with Narasimha Homam.',
            'A very energetic and powerful ritual.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 10000, priceMax: 35000, rating: 4.9, reviewCount: 40, duration: '3-5 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'mahalakshmi-homam',
          name: 'Mahalakshmi Homam',
          shortDesc: 'Fire ritual for abundance and joy.',
          description: 'Dedicated purely to Goddess Mahalakshmi to invite abundance, joy, beauty, and grace into one\'s home or business, removing poverty and sorrow.',
          keyInsights: [
            'Focuses on overall well-being and prosperity.',
            'Brings harmony to the household.',
            'Lotus flowers are a primary offering.',
            'Creates a highly positive aura.',
            'Ideal for Fridays and Diwali.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 6000, priceMax: 20000, rating: 4.8, reviewCount: 45, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'navagraha-homam',
          name: 'Navagraha Homam',
          shortDesc: 'Fire ritual to pacify the nine planets.',
          description: 'Navagraha Homam is performed to appease the nine celestial planets. It mitigates the malefic effects of badly placed planets in a horoscope and enhances the positive ones.',
          keyInsights: [
            'Balances planetary energies.',
            'Removes obstacles caused by Graha Doshas.',
            'Nine specific types of wood (Samidhas) are used.',
            'Essential part of housewarming ceremonies.',
            'Brings overall peace and success.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 7000, priceMax: 25000, rating: 4.9, reviewCount: 50, duration: '3-5 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'pavamana-homam',
          name: 'Pavamana Homam',
          shortDesc: 'Fire ritual for extreme purification.',
          description: 'Pavamana Homam involves the chanting of Pavamana Suktam to deeply purify an individual or place from severe sins, impurities, and negative karmic baggage.',
          keyInsights: [
            'Highly purifying and cleansing ritual.',
            'Removes deep-rooted guilt and negative energy.',
            'Restores mental peace and clarity.',
            'Often performed after major life upheavals.',
            'Invokes Lord Soma (purifying aspect).'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 8000, priceMax: 25000, rating: 4.7, reviewCount: 12, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'pratyangira-homam',
          name: 'Pratyangira Homam',
          shortDesc: 'Fierce fire ritual to destroy black magic.',
          description: 'A highly secretive and powerful homam invoking Goddess Pratyangira to completely reverse and destroy severe black magic, witchcraft, and the evil eye.',
          keyInsights: [
            'The ultimate remedy against dark arts.',
            'Requires highly specialized priests.',
            'Usually performed during Amavasya (new moon) nights.',
            'Dried red chilies are often offered in the fire.',
            'Provides an impenetrable shield of protection.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 15000, priceMax: 50000, rating: 5.0, reviewCount: 18, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'purusha-sukta-homam',
          name: 'Purusha Sukta Homam',
          shortDesc: 'Fire ritual for progeny and spiritual growth.',
          description: 'Involves the chanting of the majestic Purusha Suktam. It is performed for spiritual upliftment, overall prosperity, and specifically for couples seeking healthy children.',
          keyInsights: [
            'Chanting of profound Vedic hymns.',
            'Brings harmony between the material and spiritual.',
            'Highly beneficial for Santhana Prapthi (progeny).',
            'Pleasing to Lord Vishnu.',
            'Creates a serene and divine atmosphere.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 7000, priceMax: 22000, rating: 4.8, reviewCount: 25, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'raja-matangi-homam',
          name: 'Raja Matangi Homam',
          shortDesc: 'Fire ritual for arts, music, and attraction.',
          description: 'Invokes Goddess Raja Matangi, the deity of arts, music, and spoken word. It blesses the performer with eloquence, magnetism, and success in creative fields.',
          keyInsights: [
            'Ideal for artists, musicians, and public speakers.',
            'Grants charisma and persuasive speech.',
            'Helps in attracting positive relationships.',
            'Removes harmony issues in married life.',
            'A very graceful and beautiful ritual.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 8000, priceMax: 25000, rating: 4.9, reviewCount: 15, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'raja-shyamala-homam',
          name: 'Raja Shyamala Homam',
          shortDesc: 'Fire ritual for ultimate power and political success.',
          description: 'A powerful ritual invoking Goddess Shyamala (Mantrini) for success in politics, administration, leadership roles, and for gaining control over complex situations.',
          keyInsights: [
            'Highly favored by politicians and leaders.',
            'Grants authority, fame, and influence.',
            'Helps in making strategic decisions.',
            'Overcomes fierce competition.',
            'Requires deep devotion and purity.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 15000, priceMax: 60000, rating: 5.0, reviewCount: 20, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'rudra-homam',
          name: 'Rudra Homam',
          shortDesc: 'Fire ritual for peace and destruction of sorrow.',
          description: 'Rudra Homam involves offering oblations into the fire while chanting the Sri Rudram. It destroys all sins, sorrow, and brings profound peace and liberation.',
          keyInsights: [
            'Cleanses the environment of all negativity.',
            'Brings deep mental peace.',
            'Helps in spiritual evolution.',
            'Highly meritorious on Mondays or Pradosham.',
            'Destroys internal and external enemies.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 8000, priceMax: 30000, rating: 4.9, reviewCount: 35, duration: '3-5 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'saraswati-homam',
          name: 'Saraswati Homam',
          shortDesc: 'Fire ritual for academic excellence.',
          description: 'Dedicated to the Goddess of Knowledge, this homam is specifically performed to remove obstacles in education, improve memory, and excel in studies and arts.',
          keyInsights: [
            'Highly recommended for students of all ages.',
            'Improves focus and concentration.',
            'Helps in mastering complex subjects.',
            'Usually performed before major exams.',
            'White flowers and sweet rice are offered.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5000, priceMax: 15000, rating: 4.8, reviewCount: 40, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
        {
          id: 'sri-sukta-homam',
          name: 'Sri Sukta Homam',
          shortDesc: 'Fire ritual for supreme wealth and grace.',
          description: 'Involves chanting the highly revered Sri Suktam. It is a very aesthetic and powerful homam for attracting supreme wealth, beauty, and the grace of Goddess Lakshmi.',
          keyInsights: [
            'One of the most potent hymns for wealth.',
            'Brings both material and spiritual abundance.',
            'Removes poverty and debts (Daridrya Dahana).',
            'Lotus flowers dipped in ghee are a primary offering.',
            'Creates a magnetic aura of prosperity.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 7000, priceMax: 25000, rating: 5.0, reviewCount: 38, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'homam'
        }
      ]
    },
    {
      id: 'shanti-homalu',
      name: 'Shanti Homalu',
      icon: '☮️',
      gradient: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
      description: 'Rituals for peace and pacification of negative energies',
      services: [
        {
          id: 'dhanishta-panchakam-shanti',
          name: 'Dhanishta Panchakam Shanti',
          shortDesc: 'Pacification ritual for death in specific stars.',
          description: 'Performed when a family member passes away during the Dhanishta Panchakam (last 5 Nakshatras). It prevents negative repercussions and further losses in the family.',
          keyInsights: [
            'Crucial ritual following a death under specific stars.',
            'Prevents continuous misfortunes in the family.',
            'Ensures peaceful transition for the departed soul.',
            'Must be performed within a specific timeframe.',
            'A very specific and necessary Shanti.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 8000, priceMax: 20000, rating: 4.8, reviewCount: 15, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'shanti'
        },
        {
          id: 'kuja-rahu-sandhi-shanti',
          name: 'Kuja Rahu Sandhi Shanti',
          shortDesc: 'Pacification for Mars-Rahu planetary transition.',
          description: 'Performed to pacify the turbulent transition period (Sandhi) between Kuja (Mars) Dasha and Rahu Dasha in a person\'s horoscope, preventing accidents and sudden downfalls.',
          keyInsights: [
            'Mitigates a highly volatile astrological period.',
            'Prevents sudden health crises or accidents.',
            'Brings stability during transitions.',
            'Requires specific planetary mantras.',
            'Provides a protective shield.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 6000, priceMax: 18000, rating: 4.7, reviewCount: 12, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'shanti'
        },
        {
          id: 'rahu-brihaspati-sandhi-shanti',
          name: 'Rahu Brihaspati Sandhi Shanti',
          shortDesc: 'Pacification for Rahu-Jupiter planetary transition.',
          description: 'A Shanti homam performed to ease the transition from the chaotic Rahu Dasha to the beneficial Brihaspati (Jupiter) Dasha, ensuring the good effects are not blocked.',
          keyInsights: [
            'Eases the shift from struggle to prosperity.',
            'Removes lingering negative karma.',
            'Unlocks the positive potential of Jupiter.',
            'Ensures career and financial stability.',
            'A vital astrological remedy.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 6000, priceMax: 18000, rating: 4.8, reviewCount: 10, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'shanti'
        },
        {
          id: 'shani-rahu-shrapit-dosha-nivarana',
          name: 'Shani Rahu Shrapit Dosha Nivarana',
          shortDesc: 'Remedy for Saturn-Rahu conjunction curse.',
          description: 'A powerful remedy for horoscopes having a Shrapit Dosha (curse) due to the conjunction of Saturn and Rahu. It removes deep blockages and continuous struggles in life.',
          keyInsights: [
            'Addresses severe karmic curses from past lives.',
            'Removes chronic obstacles in career and marriage.',
            'Brings relief from prolonged suffering.',
            'Involves intense chanting and homam.',
            'Requires experienced Vedic astrologers/priests.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 10000, priceMax: 30000, rating: 4.9, reviewCount: 22, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'shanti'
        },
        {
          id: 'shukra-aditya-sandhi-shanti',
          name: 'Shukra Aditya Sandhi Shanti',
          shortDesc: 'Pacification for Venus-Sun planetary transition.',
          description: 'Performed during the Dasha transition between Shukra (Venus) and Aditya (Sun). It prevents loss of wealth, marital discord, and ego clashes during this sensitive period.',
          keyInsights: [
            'Protects wealth and relationships during transition.',
            'Balances material desires and ego.',
            'Ensures smooth career progression.',
            'Involves worship of Venus and Sun deities.',
            'Maintains harmony in personal life.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 6000, priceMax: 18000, rating: 4.7, reviewCount: 8, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'shanti'
        }
      ]
    },
    {
      id: 'pariharams',
      name: 'Pariharams',
      icon: '🛡️',
      gradient: 'linear-gradient(135deg, #5C0614, #C41E3A)',
      description: 'Remedial rituals to overcome specific doshas',
      services: [
        {
          id: 'drishti-durga-homam',
          name: 'Drishti Durga Homam',
          shortDesc: 'Remedy for severe evil eye and jealousy.',
          description: 'A specialized homam to remove severe \'Drishti\' (evil eye) and jealousy from competitors or neighbors. It protects businesses, families, and individuals from sudden downfalls.',
          keyInsights: [
            'Instantly removes negative vibes and sluggishness.',
            'Protects businesses suffering from sudden losses.',
            'Shields children from frequent unexplained illnesses.',
            'Uses specific ingredients to burn negative energy.',
            'Restores peace and growth.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 6000, priceMax: 20000, rating: 4.8, reviewCount: 28, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'durga-lakshmi-saraswati-homam',
          name: 'Durga Lakshmi Saraswati Homam',
          shortDesc: 'Trinity Goddess ritual for holistic success.',
          description: 'A comprehensive ritual invoking the trinity of Goddesses—Durga for courage, Lakshmi for wealth, and Saraswati for wisdom. It provides complete protection and success in all areas of life.',
          keyInsights: [
            'All-encompassing remedy for multiple life issues.',
            'Brings balance of power, wealth, and intellect.',
            'Excellent for families seeking overall upliftment.',
            'Very auspicious during Navaratri.',
            'Creates a harmonious and prosperous environment.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 12000, priceMax: 35000, rating: 4.9, reviewCount: 35, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'homam-for-good-education',
          name: 'Homam For Good Education',
          shortDesc: 'Ritual to clear academic hurdles.',
          description: 'A specialized combination of homams tailored to remove astrological blocks related to education, ensuring focus, better memory, and success in competitive exams.',
          keyInsights: [
            'Tailored specifically based on the student\'s horoscope.',
            'Removes afflictions to the 4th and 5th houses.',
            'Invokes Hayagreeva and Saraswati.',
            'Boosts confidence before crucial exams.',
            'Helps in securing admissions.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5000, priceMax: 18000, rating: 4.8, reviewCount: 40, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'homam-for-good-health',
          name: 'Homam For Good Health',
          shortDesc: 'Ritual to cure illnesses and boost immunity.',
          description: 'A remedial fire ritual designed to counteract severe health issues and chronic diseases. It invokes healing energies to aid medical treatments and speed up recovery.',
          keyInsights: [
            'Complements medical treatments for faster healing.',
            'Removes karmic causes of illnesses.',
            'Involves Dhanvantari and Mrityunjaya mantras.',
            'Boosts overall vitality and immune system.',
            'Brings physical and mental strength.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 7000, priceMax: 25000, rating: 4.9, reviewCount: 30, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'homam-for-job-and-career',
          name: 'Homam For Job and Career',
          shortDesc: 'Ritual for career growth and employment.',
          description: 'Performed to remove obstacles in finding a job, getting a promotion, or achieving career stability. It clears the path for professional success and recognition.',
          keyInsights: [
            'Removes blocks in career progression.',
            'Helps in securing desired job roles.',
            'Mitigates office politics and hidden enemies.',
            'Invokes deities for success and leadership.',
            'Brings stability in professional life.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 6000, priceMax: 20000, rating: 4.8, reviewCount: 45, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'homam-for-pregnancy',
          name: 'Homam For Pregnancy',
          shortDesc: 'Ritual to overcome infertility issues.',
          description: 'A powerful remedial ritual for couples facing difficulties in conceiving. It removes biological or astrological doshas hindering pregnancy and blesses the couple with healthy progeny.',
          keyInsights: [
            'Specifically targets Santhana Dosham.',
            'Invokes Santhana Gopala (Baby Krishna).',
            'Removes karmic blocks to parenthood.',
            'Brings hope and positive energy to the couple.',
            'Requires strict dietary and lifestyle discipline.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 8000, priceMax: 25000, rating: 4.9, reviewCount: 22, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'homam-for-wealth',
          name: 'Homam For Wealth',
          shortDesc: 'Ritual to overcome financial crises.',
          description: 'A remedy to remove severe financial blockages, clear mounting debts, and attract new sources of income. It corrects astrological flaws causing poverty or continuous losses.',
          keyInsights: [
            'Addresses Daridra Yoga in horoscopes.',
            'Helps in recovering stuck money.',
            'Attracts sudden financial gains.',
            'Invokes Lakshmi and Kubera.',
            'Brings long-term financial stability.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 7000, priceMax: 22000, rating: 4.8, reviewCount: 38, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'janana-nakshatra-shanti-homam',
          name: 'Janana Nakshatra Shanti Homam',
          shortDesc: 'Pacification for inauspicious birth stars.',
          description: 'Performed when a child is born under specific inauspicious nakshatras (like Moola, Aslesha, Jyeshta) to pacify negative effects on the child\'s health and the parents\' well-being.',
          keyInsights: [
            'Crucial for babies born in Gandamool nakshatras.',
            'Protects the child\'s health and longevity.',
            'Prevents negative impacts on parents and relatives.',
            'Usually performed on the 27th day after birth.',
            'Ensures a smooth life path for the newborn.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5000, priceMax: 15000, rating: 4.7, reviewCount: 30, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'kadali-vivaham',
          name: 'Kadali Vivaham',
          shortDesc: 'Remedial marriage to a banana tree.',
          description: 'A specialized astrological remedy for men suffering from severe Manglik Dosha or Kalathra Dosha. A symbolic marriage is performed with a banana tree to absorb the negative karma before actual marriage.',
          keyInsights: [
            'Highly effective remedy for severe marriage delays in men.',
            'Absorbs the malefic effects of Mars/Venus.',
            'Clears the path for a happy real marriage.',
            'The tree is cut down after the ritual symbolically ending the dosha.',
            'Must be prescribed by an expert astrologer.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5000, priceMax: 15000, rating: 4.6, reviewCount: 15, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'kala-sarpa-dosha-nivarana',
          name: 'Kala Sarpa Dosha Nivarana',
          shortDesc: 'Remedy for Kala Sarpa alignment in horoscope.',
          description: 'A major remedial pooja to nullify the effects of Kala Sarpa Dosha (when all planets are hemmed between Rahu and Ketu), which causes continuous struggles, delays, and instability in life.',
          keyInsights: [
            'Removes severe blocks in career and marriage.',
            'Brings sudden positive changes in life trajectory.',
            'Involves worship of silver snake idols.',
            'Often performed at specific powerful kshetras (e.g., Srikalahasti) or at home.',
            'A very crucial remedy for those afflicted.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 8000, priceMax: 25000, rating: 4.9, reviewCount: 42, duration: '3-5 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'kalathra-dosha-nivarana',
          name: 'Kalathra Dosha Nivarana',
          shortDesc: 'Remedy for marital discord and delays.',
          description: 'A remedial homam for those facing constant delays in marriage or severe disharmony in married life due to afflictions in the 7th house (Kalathra sthana) of their horoscope.',
          keyInsights: [
            'Removes obstacles to finding a suitable partner.',
            'Resolves severe misunderstandings between spouses.',
            'Pacifies malefic planets affecting the 7th house.',
            'Brings peace and marital bliss.',
            'Can prevent separation or divorce.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 7000, priceMax: 22000, rating: 4.8, reviewCount: 25, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'kumbha-vivaham',
          name: 'Kumbha Vivaham',
          shortDesc: 'Remedial marriage to a pot for women.',
          description: 'A specific astrological remedy for women with severe Manglik/Kuja Dosha. A symbolic marriage is performed with a Kumbha (pot) or a Vishnu idol to absorb the dosha before her actual marriage.',
          keyInsights: [
            'Remedy for severe marriage delays in women.',
            'Protects the future husband from malefic planetary effects.',
            'Clears karmic blocks preventing marriage.',
            'A deeply symbolic and effective ritual.',
            'Requires expert astrological guidance.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5000, priceMax: 15000, rating: 4.7, reviewCount: 18, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'santhana-gopala-homam',
          name: 'Santhana Gopala Homam (Putra Kameshti)',
          shortDesc: 'Powerful ritual for blessing of a child.',
          description: 'A highly revered homam dedicated to Lord Krishna in his infant form (Santhana Gopala). It is performed by couples desiring a child, removing all biological and karmic obstacles to conception.',
          keyInsights: [
            'The most potent Vedic remedy for infertility.',
            'Chanting of the powerful Santhana Gopala Mantra.',
            'Couples usually perform this with intense fasting and devotion.',
            'Ensures the birth of a healthy and intelligent child.',
            'Brings immense joy to the family.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 10000, priceMax: 30000, rating: 5.0, reviewCount: 35, duration: '4-5 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'shatru-samhara-homam',
          name: 'Shatru Samhara Homam',
          shortDesc: 'Fierce ritual to defeat enemies and lawsuits.',
          description: 'A highly powerful and secretive homam dedicated to Lord Subramanya (Karthikeya). It completely destroys visible and invisible enemies, competitors, and ensures victory in legal battles.',
          keyInsights: [
            'Provides absolute protection from fierce adversaries.',
            'Ensures success in prolonged court cases.',
            'Requires strict discipline and purity to perform.',
            'Invokes the warrior energy of Lord Murugan.',
            'Removes fear and grants immense courage.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 15000, priceMax: 45000, rating: 4.9, reviewCount: 20, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        },
        {
          id: 'swayamvara-parvathi-homam',
          name: 'Swayamvara Parvathi Homam',
          shortDesc: 'Ritual for finding the ideal life partner.',
          description: 'Dedicated to Goddess Parvati, this homam is performed to remove obstacles in finding a suitable match. It blesses the individual with a loving, understanding, and ideal life partner.',
          keyInsights: [
            'Highly effective for delayed marriages.',
            'Helps in resolving love-marriage obstacles.',
            'Invokes the divine union of Shiva and Parvati.',
            'Chanting of the Swayamvara Parvathi mantra.',
            'Brings harmony and rapid marriage prospects.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 8000, priceMax: 25000, rating: 4.9, reviewCount: 48, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'parihar'
        }
      ]
    },
    {
      id: 'devi-homams',
      name: 'Powerful Devi Homams',
      icon: '🔱',
      gradient: 'linear-gradient(135deg, #7B1FA2, #CE93D8)',
      description: 'Intense fire rituals invoking fierce Goddesses',
      services: [
        {
          id: 'bagalamukhi-homam',
          name: 'Bagalamukhi Homam',
          shortDesc: 'Fierce ritual to paralyze enemies and obstacles.',
          description: 'A highly esoteric homam invoking Goddess Bagalamukhi, one of the Mahavidyas. She has the power to silence enemies, freeze opposition, and guarantee victory in legal or political battles.',
          keyInsights: [
            'Stops gossip, false allegations, and legal troubles.',
            'Paralyzes the negative intentions of enemies.',
            'Yellow colored offerings (turmeric, yellow clothes) are strictly used.',
            'Requires expert initiation and extreme purity.',
            'Grants absolute dominance over competitors.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 25000, priceMax: 75000, rating: 5.0, reviewCount: 15, duration: '5-8 hours', defaultLanguage: 'telugu', imageType: 'devi'
        },
        {
          id: 'varahi-devi-homam',
          name: 'Varahi Devi Homam',
          shortDesc: 'Ritual for ultimate protection and victory.',
          description: 'Invokes Goddess Varahi, the commander-in-chief of Goddess Lalitha\'s army. She provides swift and fierce protection against black magic, evil eye, and sudden massive misfortunes.',
          keyInsights: [
            'Extremely fast-acting remedy for severe problems.',
            'Protects wealth, property, and life.',
            'Destroys hidden enemies and evil forces instantly.',
            'Usually performed during the night.',
            'Requires a highly qualified and fearless priest.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 20000, priceMax: 60000, rating: 5.0, reviewCount: 22, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'devi'
        }
      ]
    },
    {
      id: 'ancestor-rituals',
      name: 'Ancestor Rituals',
      icon: '🕯️',
      gradient: 'linear-gradient(135deg, #4E342E, #8D6E63)',
      description: 'Sacred rites honoring and pacifying departed souls',
      services: [
        {
          id: 'annadanam-for-brahmins',
          name: 'Annadanam for Brahmins',
          shortDesc: 'Sacred food offering to priests.',
          description: 'Providing a traditional, pure vegetarian meal to Brahmins on behalf of ancestors. It is a highly meritorious act that brings peace to departed souls and blessings to the family.',
          keyInsights: [
            'Considered one of the highest forms of charity (Maha Daanam).',
            'Pacifies ancestors and brings their blessings.',
            'Helps in reducing Pitru Dosha.',
            'Food must be prepared with strict purity and hygiene.',
            'Usually involves serving 3, 5, or more Brahmins.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3000, priceMax: 15000, rating: 4.9, reviewCount: 50, duration: '2 hours', defaultLanguage: 'telugu', imageType: 'ancestor'
        },
        {
          id: 'pitru-paksha-taddinam',
          name: 'Pitru Paksha Taddinam',
          shortDesc: 'Annual ancestor worship during Mahalaya.',
          description: 'Special ancestral rites performed during the 15-day period of Pitru Paksha. It is the most important time of the year to offer oblations to ancestors, ensuring their peace and our prosperity.',
          keyInsights: [
            'Performed during the dark fortnight of Bhadrapada month.',
            'Offers water and sesame seeds (Tarpanam).',
            'Clears accumulated ancestral debts (Pitru Rina).',
            'Brings harmony, health, and wealth to the family.',
            'A mandatory duty for the eldest son.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5000, priceMax: 15000, rating: 4.8, reviewCount: 45, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'ancestor'
        },
        {
          id: 'samvatsarikam',
          name: 'Samvatsarikam - First Year Ceremony',
          shortDesc: 'First death anniversary ritual.',
          description: 'The major annual ceremony performed exactly one year after a person\'s passing based on the thithi. It marks the soul\'s transition to the ancestral realm (Pitru Loka).',
          keyInsights: [
            'A critical milestone in ancestral rites.',
            'Involves elaborate homams and pinda pradanam.',
            'Requires fasting and strict observance by the performer.',
            'Ensures the soul\'s peaceful journey.',
            'Conducted by specialized priests.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 15000, priceMax: 35000, rating: 4.9, reviewCount: 20, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'ancestor'
        },
        {
          id: 'taddinam',
          name: 'Taddinam',
          shortDesc: 'Regular annual death anniversary ritual.',
          description: 'The annual Shraddha ceremony performed every year on the exact thithi of a person\'s death. It is a vital duty to nourish the ancestors in the afterlife with offerings of rice balls (Pindas).',
          keyInsights: [
            'Performed annually on the lunar death anniversary.',
            'Nourishes the ancestors (Pitrus).',
            'Invokes blessings for the current generation.',
            'Involves Homam, Pinda Pradanam, and Brahmin Bhojanam.',
            'Keeps the family lineage pure and blessed.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 8000, priceMax: 20000, rating: 4.8, reviewCount: 40, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'ancestor'
        },
        {
          id: 'tarpanam-hiranya-shradham',
          name: 'Tarpanam / Hiranya Shradham',
          shortDesc: 'Brief water offering ritual for ancestors.',
          description: 'A simpler form of ancestor worship involving the offering of water mixed with black sesame seeds (Tarpanam) or offering raw provisions and Dakshina (Hiranya Shradham) when a full ritual isn\'t possible.',
          keyInsights: [
            'A concise alternative to elaborate Shraddha.',
            'Often performed on Amavasya (new moon) days.',
            'Tarpanam satisfies the thirst of the ancestors.',
            'Hiranya Shradham involves giving raw food materials.',
            'Maintains the continuity of ancestral worship.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 2000, priceMax: 5000, rating: 4.7, reviewCount: 35, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'ancestor'
        }
      ]
    },
    {
      id: 'vratam-japalu',
      name: 'Vratam & Japalu',
      icon: '📿',
      gradient: 'linear-gradient(135deg, #1565C0, #42A5F5)',
      description: 'Fasting vows and continuous mantra chanting',
      services: [
        {
          id: 'anagha-vratham',
          name: 'Anagha Vratham',
          shortDesc: 'Worship of Lord Dattatreya for peace.',
          description: 'A powerful vratam dedicated to Lord Dattatreya and his consort Anagha Devi. It destroys all sins (Agha), removes sorrows, and brings profound peace and spiritual upliftment.',
          keyInsights: [
            'Highly effective for mental peace and clarity.',
            'Removes guilt and karmic baggage.',
            'Usually performed on Margashira Purnima.',
            'Involves worship of the Ashtanga (8 paths) of Yoga.',
            'Grants liberation and material prosperity.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4000, priceMax: 12000, rating: 4.8, reviewCount: 15, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'ananta-padmanabha-vratham',
          name: 'Ananta Padmanabha Vratham',
          shortDesc: 'Worship of Lord Vishnu for endless wealth.',
          description: 'Observed on Ananta Chaturdashi, this vratam is dedicated to Lord Vishnu resting on the serpent Ananta. A 14-knot sacred thread is worn for protection, endless wealth, and removal of continuous struggles.',
          keyInsights: [
            'A red thread with 14 knots (Ananta Daram) is worn.',
            'Grants endless (Ananta) prosperity and joy.',
            'Removes poverty and clears massive debts.',
            'Involves reciting the story of Sushila.',
            'Requires strict fasting and devotion.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5000, priceMax: 15000, rating: 4.9, reviewCount: 22, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'budha-graha-japam',
          name: 'Budha Graha Japam',
          shortDesc: 'Mantra chanting to pacify Mercury.',
          description: 'Continuous chanting of the Budha (Mercury) mantra to alleviate negative effects of a weak or afflicted Mercury in the horoscope. It improves intellect, communication skills, and business acumen.',
          keyInsights: [
            'Enhances analytical thinking and memory.',
            'Resolves skin diseases and nervous disorders.',
            'Crucial for students and business people.',
            'Usually involves 4000 or 17000 chants.',
            'Green gram is offered as Naivedyam.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3000, priceMax: 12000, rating: 4.7, reviewCount: 20, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'chandra-graha-japam',
          name: 'Chandra Graha Japam',
          shortDesc: 'Mantra chanting to pacify the Moon.',
          description: 'Japam dedicated to Chandra (Moon) to resolve emotional instability, depression, and mental stress. It brings peace of mind, improves relationships with the mother, and cures respiratory issues.',
          keyInsights: [
            'Brings mental peace and emotional stability.',
            'Helps in curing insomnia and depression.',
            'Usually involves 11000 chants.',
            'White flowers and milk are offered.',
            'Beneficial for those with Moon-Rahu/Ketu doshas.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3000, priceMax: 12000, rating: 4.8, reviewCount: 25, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'guru-graha-japam',
          name: 'Guru Graha Japam',
          shortDesc: 'Mantra chanting to pacify Jupiter.',
          description: 'Chanting to invoke the blessings of Guru (Jupiter). It is performed to remove obstacles in marriage, education, and childbirth, and to attain wealth, wisdom, and spiritual growth.',
          keyInsights: [
            'Removes delays in marriage and childbirth.',
            'Brings immense wisdom and prosperity.',
            'Usually involves 16000 chants.',
            'Bengal gram (Chana) and yellow flowers are offered.',
            'Crucial during Guru Dasha or transit.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4000, priceMax: 15000, rating: 4.9, reviewCount: 30, duration: '3-5 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'ketu-graha-japam',
          name: 'Ketu Graha Japam',
          shortDesc: 'Mantra chanting to pacify Ketu.',
          description: 'Japam for Ketu to mitigate sudden losses, spiritual confusion, and mysterious illnesses. It aids in spiritual liberation, detachment, and sudden unexpected gains.',
          keyInsights: [
            'Removes obstacles to spiritual growth.',
            'Cures strange and undiagnosable diseases.',
            'Usually involves 7000 or 17000 chants.',
            'Horse gram (Ulavalu) is offered.',
            'Brings detachment and intuition.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3500, priceMax: 12000, rating: 4.7, reviewCount: 18, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'mangal-graha-japam',
          name: 'Mangal Graha Japam',
          shortDesc: 'Mantra chanting to pacify Mars.',
          description: 'Dedicated to Mangal (Kuja/Mars) to resolve Kuja Dosha, clear debts, resolve property disputes, and calm anger issues. It brings courage, energy, and victory over enemies.',
          keyInsights: [
            'Essential remedy for Kuja/Manglik Dosha.',
            'Clears heavy debts and property disputes.',
            'Usually involves 10000 chants.',
            'Red gram (Toor dal) and red flowers are offered.',
            'Brings courage and vitality.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3500, priceMax: 15000, rating: 4.8, reviewCount: 35, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'mangala-gowri-vratham',
          name: 'Mangala Gowri Vratham',
          shortDesc: 'Fasting ritual for newlywed women.',
          description: 'A traditional vratam observed by newly married women on Tuesdays in the month of Sravana for the first five years of marriage. It ensures a long, happy married life and the husband\'s longevity.',
          keyInsights: [
            'Dedicated to Goddess Gowri (Parvati).',
            'Observed for marital bliss and longevity of the spouse.',
            'Cotton wicks (16 numbers) are lit.',
            'Promotes a strong bond between the couple.',
            'A joyous gathering of married women.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3000, priceMax: 10000, rating: 4.9, reviewCount: 28, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'mrityunjaya-japam',
          name: 'Mrityunjaya Japam',
          shortDesc: 'Continuous chanting of the life-saving mantra.',
          description: 'The intense and continuous chanting of the Maha Mrityunjaya Mantra (often 100,000 times) by multiple priests to create a massive shield of healing energy for critically ill patients.',
          keyInsights: [
            'The ultimate mantra for health and life.',
            'Creates powerful healing vibrations.',
            'Can be performed over several days.',
            'Wards off untimely death (Apamrityu).',
            'Requires strict adherence to pronunciation.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 15000, priceMax: 75000, rating: 5.0, reviewCount: 40, duration: '1-3 days', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'nakshatra-japam',
          name: 'Nakshatra Japam',
          shortDesc: 'Chanting for one\'s birth star.',
          description: 'Japam performed focusing on the deity of one\'s birth star (Janma Nakshatra). It removes general doshas, boosts overall luck, and ensures smooth progress in life.',
          keyInsights: [
            'Personalized to the individual\'s birth star.',
            'Enhances positive traits of the Nakshatra.',
            'Usually performed on the individual\'s birthday.',
            'Removes minor life hurdles.',
            'Brings overall well-being.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3000, priceMax: 10000, rating: 4.7, reviewCount: 20, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'navagraha-japam',
          name: 'Navagraha Japam',
          shortDesc: 'Combined chanting for all nine planets.',
          description: 'Continuous chanting of the mantras for all nine planets. It is a comprehensive remedy to balance all planetary energies, removing multiple doshas and ensuring overall success and peace.',
          keyInsights: [
            'Balances the entire horoscope.',
            'Mitigates complex planetary afflictions.',
            'Involves chanting for each of the 9 planets.',
            'Highly effective for unknown or complex problems.',
            'Brings comprehensive relief.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 8000, priceMax: 25000, rating: 4.9, reviewCount: 38, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'rahu-graha-japam',
          name: 'Rahu Graha Japam',
          shortDesc: 'Mantra chanting to pacify Rahu.',
          description: 'Japam dedicated to Rahu to remove obstacles, sudden misfortunes, phobias, and delays in marriage. It turns the chaotic energy of Rahu into sudden gains and worldly success.',
          keyInsights: [
            'Crucial remedy for Kala Sarpa Dosha.',
            'Removes fear, phobias, and confusion.',
            'Usually involves 18000 chants.',
            'Black gram (Urad dal) is offered.',
            'Can bring sudden unexpected wealth.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4000, priceMax: 15000, rating: 4.8, reviewCount: 32, duration: '3-5 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'shani-graha-japam',
          name: 'Shani Graha Japam',
          shortDesc: 'Mantra chanting to pacify Saturn.',
          description: 'A highly sought-after japam to mitigate the severe effects of Sade Sati (7.5 years of Saturn), Ashtama Shani, or a malefic Saturn. It removes delays, poverty, and chronic suffering.',
          keyInsights: [
            'Essential remedy during Sade Sati.',
            'Reduces suffering and harsh life lessons.',
            'Usually involves 19000 chants.',
            'Black sesame seeds and blue flowers are used.',
            'Brings discipline and eventual success.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 5000, priceMax: 18000, rating: 4.9, reviewCount: 45, duration: '3-5 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'shukra-graha-japam',
          name: 'Shukra Graha Japam',
          shortDesc: 'Mantra chanting to pacify Venus.',
          description: 'Japam for Shukra (Venus) to resolve marital discord, financial instability, and lack of luxury. It enhances love, beauty, wealth, and artistic talents.',
          keyInsights: [
            'Improves romantic relationships and marriage.',
            'Attracts luxury, vehicles, and comforts.',
            'Usually involves 16000 chants.',
            'White beans (Mochai) and white flowers are offered.',
            'Beneficial for artists and actors.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4000, priceMax: 15000, rating: 4.8, reviewCount: 22, duration: '3-5 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        },
        {
          id: 'surya-graha-japam',
          name: 'Surya Graha Japam',
          shortDesc: 'Mantra chanting to pacify the Sun.',
          description: 'Chanting for Surya (Sun) to overcome health issues (especially heart/eye), problems with authority/government, and lack of confidence. It brings leadership, fame, and vitality.',
          keyInsights: [
            'Improves health and vitality.',
            'Helps in resolving government or legal issues.',
            'Usually involves 7000 chants.',
            'Wheat and red flowers are offered.',
            'Boosts self-esteem and career authority.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3000, priceMax: 12000, rating: 4.7, reviewCount: 18, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'vratam'
        }
      ]
    },
    {
      id: 'festival-poojas',
      name: 'Festival Poojas',
      icon: '🎊',
      gradient: 'linear-gradient(135deg, #F9A825, #FFEE58)',
      description: 'Special rituals performed during major Hindu festivals',
      services: [
        {
          id: 'ganesh-chaturthi-pooja',
          name: 'Ganesh Chaturthi Pooja',
          shortDesc: 'Detailed worship on Ganesh Chaturthi.',
          description: 'A comprehensive pooja performed to welcome and worship Lord Ganesha during the Ganesh Chaturthi festival. It involves Prana Pratishta, Shodasopachara Pooja, and offering of Modaks.',
          keyInsights: [
            'Invokes Lord Ganesha into the clay idol.',
            'Brings wisdom, prosperity, and removes obstacles.',
            'Involves reading of the Syamantaka Mani Katha.',
            '21 types of leaves (Patri) are offered.',
            'A joyous family celebration.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 2000, priceMax: 8000, rating: 4.9, reviewCount: 50, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'festival'
        },
        {
          id: 'gowri-pooja',
          name: 'Gowri Pooja',
          shortDesc: 'Worship of Goddess Gowri on festivals.',
          description: 'Usually performed on the day before Ganesh Chaturthi or during Navaratri. Goddess Gowri (Parvati) is worshipped for marital bliss, the well-being of the family, and a rich harvest.',
          keyInsights: [
            'Worship of the Divine Mother for auspiciousness.',
            'Highly significant for married women.',
            'Involves making a turmeric idol of the Goddess.',
            'Brings peace and harmony to the household.',
            'Often accompanied by offering of sweets and flowers.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 2000, priceMax: 7000, rating: 4.8, reviewCount: 35, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'festival'
        }
      ]
    },
    {
  "id": "hindi-pujas",
  "name": "Pujas",
  "icon": "📿",
  "gradient": "linear-gradient(135deg, #FF6B00, #E65100)",
  "description": "Authentic Hindi Pujas and sacred worship rituals",
  "defaultLanguage": "hindi",
  "services": [
    {
      "id": "hindi-annaprashan-puja",
      "name": "Annaprashan Puja",
      "shortDesc": "First solid grain feeding ceremony for baby as per Hindi tradition.",
      "imageType": "ceremony",
      "description": "Annaprashan Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Annaprashan Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-bhoomi-puja",
      "name": "Bhoomi Puja",
      "shortDesc": "Land blessing & Vastu purification before starting construction.",
      "imageType": "pooja",
      "description": "Bhoomi Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Bhoomi Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-brihaspati-vrat-udyapan",
      "name": "Brihaspati Vrat Udyapan Puja",
      "shortDesc": "Conclusion ritual for Thursday Jupiter fasts.",
      "imageType": "vratam",
      "description": "Brihaspati Vrat Udyapan Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Brihaspati Vrat Udyapan Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-durga-puja",
      "name": "Durga Puja",
      "shortDesc": "Worship of Goddess Durga for protection, power, and victory.",
      "imageType": "devi",
      "description": "Durga Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Durga Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-ekadashi-vrat-udyapan",
      "name": "Ekadashi Vrat Udyapan Puja",
      "shortDesc": "Sacred completion ceremony for Ekadashi fasts.",
      "imageType": "vratam",
      "description": "Ekadashi Vrat Udyapan Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Ekadashi Vrat Udyapan Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-engagement-sagai",
      "name": "Engagement Puja-Sagai",
      "shortDesc": "Traditional Hindi betrothal & ring exchange ceremony.",
      "imageType": "ceremony",
      "description": "Engagement Puja-Sagai performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Engagement Puja-Sagai as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-fix-your-muhurat",
      "name": "Fix Your Muhurat",
      "shortDesc": "Astrological consultation for fixing auspicious timings.",
      "imageType": "pooja",
      "description": "Fix Your Muhurat performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Fix Your Muhurat as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-gand-mool-nakshatra-shanti",
      "name": "Gand Mool Nakshatra Shanti Puja",
      "shortDesc": "Pacification ritual for babies born under Gand Mool Nakshatras.",
      "imageType": "shanti",
      "description": "Gand Mool Nakshatra Shanti Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Gand Mool Nakshatra Shanti Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-ganesh-puja",
      "name": "Ganesh Puja",
      "shortDesc": "Invocational worship of Lord Ganesha for obstacle-free success.",
      "imageType": "pooja",
      "description": "Ganesh Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Ganesh Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-ganpati-atharvashirsha-path-abhishek",
      "name": "Ganpati Atharvashirsha Path & Abhishek",
      "shortDesc": "Continuous recitation of Ganpati Atharvashirsha with Milk Abhishekam.",
      "imageType": "pooja",
      "description": "Ganpati Atharvashirsha Path & Abhishek performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Ganpati Atharvashirsha Path & Abhishek as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-godh-bharai-puja",
      "name": "Godh Bharai Puja (Baby Shower)",
      "shortDesc": "Traditional Hindi baby shower and mother blessing ceremony.",
      "imageType": "ceremony",
      "description": "Godh Bharai Puja (Baby Shower) performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Godh Bharai Puja (Baby Shower) as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-graha-shanti-puja",
      "name": "Graha Shanti Puja",
      "shortDesc": "Pacifying all nine planets for health, career, and harmony.",
      "imageType": "shanti",
      "description": "Graha Shanti Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Graha Shanti Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-griha-pravesh",
      "name": "Griha Pravesh",
      "shortDesc": "Sacred Hindi housewarming and Vastu purification ceremony.",
      "imageType": "ceremony",
      "description": "Griha Pravesh performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Griha Pravesh as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-haldi-ceremony",
      "name": "Haldi Ceremony",
      "shortDesc": "Pre-wedding turmeric blessing ceremony for bride/groom.",
      "imageType": "ceremony",
      "description": "Haldi Ceremony performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Haldi Ceremony as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-janamdin-birthday-puja",
      "name": "Janamdin Puja - Birthday Puja",
      "shortDesc": "Birthday prayer for health, longevity, and growth.",
      "imageType": "pooja",
      "description": "Janamdin Puja - Birthday Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Janamdin Puja - Birthday Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-kali-maa-pujan",
      "name": "Kali Maa Pujan",
      "shortDesc": "Worship of Maa Kali for destroying fear and negativity.",
      "imageType": "devi",
      "description": "Kali Maa Pujan performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Kali Maa Pujan as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-kuber-upasana-puja",
      "name": "Kuber Upasana Puja",
      "shortDesc": "Worship of Lord Kuber for financial growth.",
      "imageType": "pooja",
      "description": "Kuber Upasana Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Kuber Upasana Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-lalitha-sahasranam-puja",
      "name": "Lalitha Sahasranam Puja",
      "shortDesc": "Chanting 1000 divine names of Goddess Lalitha.",
      "imageType": "devi",
      "description": "Lalitha Sahasranam Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Lalitha Sahasranam Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-mahalaxmi-puja",
      "name": "Mahalaxmi Puja",
      "shortDesc": "Worship of Goddess Mahalaxmi for wealth and prosperity.",
      "imageType": "pooja",
      "description": "Mahalaxmi Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Mahalaxmi Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-mundan-chudakarana",
      "name": "Mundan or Chudakarana Ceremony",
      "shortDesc": "First head-shaving ritual for child health and purity.",
      "imageType": "ceremony",
      "description": "Mundan or Chudakarana Ceremony performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Mundan or Chudakarana Ceremony as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-murti-pran-pratishta",
      "name": "Murti Pran Pratishta At Home",
      "shortDesc": "Consecration of deity idol before home mandir worship.",
      "imageType": "pooja",
      "description": "Murti Pran Pratishta At Home performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Murti Pran Pratishta At Home as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-namkaran-puja",
      "name": "Namkaran Puja",
      "shortDesc": "Formal naming and blessing ceremony for newborn.",
      "imageType": "ceremony",
      "description": "Namkaran Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Namkaran Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-new-vehicle-puja",
      "name": "New Vehicle Puja",
      "shortDesc": "Blessing ritual for new car, bike, or commercial vehicle.",
      "imageType": "pooja",
      "description": "New Vehicle Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic New Vehicle Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-office-opening-puja",
      "name": "Office Opening Puja",
      "shortDesc": "Inaugural worship for new shop, office, or business premise.",
      "imageType": "pooja",
      "description": "Office Opening Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Office Opening Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-punsavan-sanskar",
      "name": "Punsavan Sanskar",
      "shortDesc": "Second prenatal Vedic ritual for healthy offspring.",
      "imageType": "ceremony",
      "description": "Punsavan Sanskar performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Punsavan Sanskar as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-roka-ceremony",
      "name": "Roka Ceremony",
      "shortDesc": "Initial family alliance & marriage commitment ceremony.",
      "imageType": "ceremony",
      "description": "Roka Ceremony performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Roka Ceremony as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-rudrabhishek-puja",
      "name": "Rudrabhishek Puja",
      "shortDesc": "Sacred bath to Shivling with Sri Rudram chanting.",
      "imageType": "pooja",
      "description": "Rudrabhishek Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Rudrabhishek Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-saraswati-puja",
      "name": "Saraswati Puja",
      "shortDesc": "Worship of Maa Saraswati for wisdom, education, and speech.",
      "imageType": "pooja",
      "description": "Saraswati Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Saraswati Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-satyanarayan-puja",
      "name": "Satyanarayan Puja",
      "shortDesc": "Traditional Satyanarayan Vratha & Katha for family peace.",
      "imageType": "pooja",
      "description": "Satyanarayan Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Satyanarayan Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-shuddhikaran-puja",
      "name": "Shuddhikaran Puja",
      "shortDesc": "Purification ritual for home, space, or individuals.",
      "imageType": "pooja",
      "description": "Shuddhikaran Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Shuddhikaran Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-solah-somvar-udyapan",
      "name": "Solah Somvar Udyapan Puja",
      "shortDesc": "Udyapan ceremony upon completing 16 Monday Shiva fasts.",
      "imageType": "vratam",
      "description": "Solah Somvar Udyapan Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Solah Somvar Udyapan Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-surya-puja",
      "name": "Surya Puja",
      "shortDesc": "Worship of Surya Devata for health, leadership, and fame.",
      "imageType": "pooja",
      "description": "Surya Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Surya Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-vastu-shanti-puja",
      "name": "Vastu Shanti Puja",
      "shortDesc": "Pacifying Vastu Purusha to clear architectural defects.",
      "imageType": "shanti",
      "description": "Vastu Shanti Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Vastu Shanti Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-vidyarambham-patti-pujan",
      "name": "Vidyarambham (Patti Pujan)",
      "shortDesc": "First learning initiation ritual for young children.",
      "imageType": "ceremony",
      "description": "Vidyarambham (Patti Pujan) performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Vidyarambham (Patti Pujan) as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-vishwakarma-puja",
      "name": "Vishwakarma Puja",
      "shortDesc": "Worship of divine architect Lord Vishwakarma for tools/machines.",
      "imageType": "pooja",
      "description": "Vishwakarma Puja performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Vishwakarma Puja as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-vivah-marriage",
      "name": "Vivah (Marriage)",
      "shortDesc": "Authentic Vedic Hindi wedding ceremony.",
      "imageType": "ceremony",
      "description": "Vivah (Marriage) performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Vivah (Marriage) as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    },
    {
      "id": "hindi-yagnopavit-sanskar",
      "name": "Yagnopavit Sanskar",
      "shortDesc": "Sacred thread ceremony (Janeu) for young boys.",
      "imageType": "ceremony",
      "description": "Yagnopavit Sanskar performed with complete Vedic rituals by expert Hindi Pandits.",
      "keyInsights": [
        "Authentic Yagnopavit Sanskar as per Hindi tradition.",
        "Invokes divine grace & prosperity.",
        "Conducted by certified Hindi Vedic Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri.",
        "Guaranteed Punctuality."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi"
    }
  ]
},
    {
  "id": "hindi-havans",
  "name": "Havans",
  "icon": "🔥",
  "gradient": "linear-gradient(135deg, #FF6B00, #FFA000)",
  "description": "Sacred Hindi Fire Havan & Homam Rituals",
  "defaultLanguage": "hindi",
  "services": [
    {
      "id": "hindi-ayush-havan",
      "name": "Ayush Havan",
      "shortDesc": "Sacred Ayush Havan for health, prosperity, and divine protection.",
      "description": "Ayush Havan performed in sacred fire with authentic Hindi Vedic mantras and herbal samagri.",
      "keyInsights": [
        "Sacred Ayush Havan fire ritual.",
        "Destroys negative energy & karmic blocks.",
        "Performed by senior Hindi Acharyas."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "homam"
    },
    {
      "id": "hindi-chandi-havan",
      "name": "Chandi Havan",
      "shortDesc": "Sacred Chandi Havan for health, prosperity, and divine protection.",
      "description": "Chandi Havan performed in sacred fire with authentic Hindi Vedic mantras and herbal samagri.",
      "keyInsights": [
        "Sacred Chandi Havan fire ritual.",
        "Destroys negative energy & karmic blocks.",
        "Performed by senior Hindi Acharyas."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "homam"
    },
    {
      "id": "hindi-dhanvantri-havan",
      "name": "Dhanvantri Havan",
      "shortDesc": "Sacred Dhanvantri Havan for health, prosperity, and divine protection.",
      "description": "Dhanvantri Havan performed in sacred fire with authentic Hindi Vedic mantras and herbal samagri.",
      "keyInsights": [
        "Sacred Dhanvantri Havan fire ritual.",
        "Destroys negative energy & karmic blocks.",
        "Performed by senior Hindi Acharyas."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "homam"
    },
    {
      "id": "hindi-ganapathi-havan",
      "name": "Ganapathi Havan",
      "shortDesc": "Sacred Ganapathi Havan for health, prosperity, and divine protection.",
      "description": "Ganapathi Havan performed in sacred fire with authentic Hindi Vedic mantras and herbal samagri.",
      "keyInsights": [
        "Sacred Ganapathi Havan fire ritual.",
        "Destroys negative energy & karmic blocks.",
        "Performed by senior Hindi Acharyas."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "homam"
    },
    {
      "id": "hindi-gayatri-havan",
      "name": "Gayatri Havan",
      "shortDesc": "Sacred Gayatri Havan for health, prosperity, and divine protection.",
      "description": "Gayatri Havan performed in sacred fire with authentic Hindi Vedic mantras and herbal samagri.",
      "keyInsights": [
        "Sacred Gayatri Havan fire ritual.",
        "Destroys negative energy & karmic blocks.",
        "Performed by senior Hindi Acharyas."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "homam"
    },
    {
      "id": "hindi-laxmi-kubera-havan",
      "name": "Laxmi Kubera Havan",
      "shortDesc": "Sacred Laxmi Kubera Havan for health, prosperity, and divine protection.",
      "description": "Laxmi Kubera Havan performed in sacred fire with authentic Hindi Vedic mantras and herbal samagri.",
      "keyInsights": [
        "Sacred Laxmi Kubera Havan fire ritual.",
        "Destroys negative energy & karmic blocks.",
        "Performed by senior Hindi Acharyas."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "homam"
    },
    {
      "id": "hindi-laxmi-narasimha-havan",
      "name": "Laxmi Narasimha Havan",
      "shortDesc": "Sacred Laxmi Narasimha Havan for health, prosperity, and divine protection.",
      "description": "Laxmi Narasimha Havan performed in sacred fire with authentic Hindi Vedic mantras and herbal samagri.",
      "keyInsights": [
        "Sacred Laxmi Narasimha Havan fire ritual.",
        "Destroys negative energy & karmic blocks.",
        "Performed by senior Hindi Acharyas."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "homam"
    },
    {
      "id": "hindi-mrityunjaya-havan",
      "name": "Mrityunjaya Havan",
      "shortDesc": "Sacred Mrityunjaya Havan for health, prosperity, and divine protection.",
      "description": "Mrityunjaya Havan performed in sacred fire with authentic Hindi Vedic mantras and herbal samagri.",
      "keyInsights": [
        "Sacred Mrityunjaya Havan fire ritual.",
        "Destroys negative energy & karmic blocks.",
        "Performed by senior Hindi Acharyas."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "homam"
    },
    {
      "id": "hindi-navagraha-havan",
      "name": "Navagraha Havan",
      "shortDesc": "Sacred Navagraha Havan for health, prosperity, and divine protection.",
      "description": "Navagraha Havan performed in sacred fire with authentic Hindi Vedic mantras and herbal samagri.",
      "keyInsights": [
        "Sacred Navagraha Havan fire ritual.",
        "Destroys negative energy & karmic blocks.",
        "Performed by senior Hindi Acharyas."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "homam"
    },
    {
      "id": "hindi-rudra-havan",
      "name": "Rudra Havan",
      "shortDesc": "Sacred Rudra Havan for health, prosperity, and divine protection.",
      "description": "Rudra Havan performed in sacred fire with authentic Hindi Vedic mantras and herbal samagri.",
      "keyInsights": [
        "Sacred Rudra Havan fire ritual.",
        "Destroys negative energy & karmic blocks.",
        "Performed by senior Hindi Acharyas."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "homam"
    },
    {
      "id": "hindi-saraswati-havan",
      "name": "Saraswati Havan",
      "shortDesc": "Sacred Saraswati Havan for health, prosperity, and divine protection.",
      "description": "Saraswati Havan performed in sacred fire with authentic Hindi Vedic mantras and herbal samagri.",
      "keyInsights": [
        "Sacred Saraswati Havan fire ritual.",
        "Destroys negative energy & karmic blocks.",
        "Performed by senior Hindi Acharyas."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "homam"
    },
    {
      "id": "hindi-sri-sukta-havan",
      "name": "Sri Sukta Havan",
      "shortDesc": "Sacred Sri Sukta Havan for health, prosperity, and divine protection.",
      "description": "Sri Sukta Havan performed in sacred fire with authentic Hindi Vedic mantras and herbal samagri.",
      "keyInsights": [
        "Sacred Sri Sukta Havan fire ritual.",
        "Destroys negative energy & karmic blocks.",
        "Performed by senior Hindi Acharyas."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "homam"
    },
    {
      "id": "hindi-sudarshan-havan",
      "name": "Sudarshan Havan",
      "shortDesc": "Sacred Sudarshan Havan for health, prosperity, and divine protection.",
      "description": "Sudarshan Havan performed in sacred fire with authentic Hindi Vedic mantras and herbal samagri.",
      "keyInsights": [
        "Sacred Sudarshan Havan fire ritual.",
        "Destroys negative energy & karmic blocks.",
        "Performed by senior Hindi Acharyas."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards & High Quality Samagri."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "homam"
    }
  ]
},
    {
  "id": "hindi-jaaps",
  "name": "Jaaps",
  "icon": "📿",
  "gradient": "linear-gradient(135deg, #1565C0, #42A5F5)",
  "description": "Mantra Jaaps & Graha Shanti Recitations in Hindi custom",
  "defaultLanguage": "hindi",
  "services": [
    {
      "id": "hindi-budha-graha-shanti-jaap",
      "name": "Budha Graha Shanti Jaap",
      "shortDesc": "Continuous Budha Graha Shanti Jaap for planetary peace and mental clarity.",
      "description": "Continuous mantra recitation for Budha Graha Shanti Jaap to balance planetary energies and resolve horoscope doshas.",
      "keyInsights": [
        "Mantra chanting for Budha Graha Shanti Jaap.",
        "Mitigates malefic planetary transits.",
        "Performed by expert Vedic Chanting Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards."
      ],
      "priceMin": 3800,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "3-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-chandra-graha-shanti-jaap",
      "name": "Chandra Graha Shanti Jaap",
      "shortDesc": "Continuous Chandra Graha Shanti Jaap for planetary peace and mental clarity.",
      "description": "Continuous mantra recitation for Chandra Graha Shanti Jaap to balance planetary energies and resolve horoscope doshas.",
      "keyInsights": [
        "Mantra chanting for Chandra Graha Shanti Jaap.",
        "Mitigates malefic planetary transits.",
        "Performed by expert Vedic Chanting Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards."
      ],
      "priceMin": 3800,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "3-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-gayatri-mantra-jaap",
      "name": "Gayatri Mantra Jaap",
      "shortDesc": "Continuous Gayatri Mantra Jaap for planetary peace and mental clarity.",
      "description": "Continuous mantra recitation for Gayatri Mantra Jaap to balance planetary energies and resolve horoscope doshas.",
      "keyInsights": [
        "Mantra chanting for Gayatri Mantra Jaap.",
        "Mitigates malefic planetary transits.",
        "Performed by expert Vedic Chanting Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards."
      ],
      "priceMin": 3800,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "3-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-guru-graha-shanti-jaap",
      "name": "Guru Graha Shanti Jaap",
      "shortDesc": "Continuous Guru Graha Shanti Jaap for planetary peace and mental clarity.",
      "description": "Continuous mantra recitation for Guru Graha Shanti Jaap to balance planetary energies and resolve horoscope doshas.",
      "keyInsights": [
        "Mantra chanting for Guru Graha Shanti Jaap.",
        "Mitigates malefic planetary transits.",
        "Performed by expert Vedic Chanting Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards."
      ],
      "priceMin": 3800,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "3-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-ketu-graha-shanti-jaap",
      "name": "Ketu Graha Shanti Jaap",
      "shortDesc": "Continuous Ketu Graha Shanti Jaap for planetary peace and mental clarity.",
      "description": "Continuous mantra recitation for Ketu Graha Shanti Jaap to balance planetary energies and resolve horoscope doshas.",
      "keyInsights": [
        "Mantra chanting for Ketu Graha Shanti Jaap.",
        "Mitigates malefic planetary transits.",
        "Performed by expert Vedic Chanting Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards."
      ],
      "priceMin": 3800,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "3-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-maha-mrityunjaya-jaap",
      "name": "Maha Mrityunjaya Jaap",
      "shortDesc": "Continuous Maha Mrityunjaya Jaap for planetary peace and mental clarity.",
      "description": "Continuous mantra recitation for Maha Mrityunjaya Jaap to balance planetary energies and resolve horoscope doshas.",
      "keyInsights": [
        "Mantra chanting for Maha Mrityunjaya Jaap.",
        "Mitigates malefic planetary transits.",
        "Performed by expert Vedic Chanting Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards."
      ],
      "priceMin": 3800,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "3-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-mangal-graha-shanti-jaap",
      "name": "Mangal Graha Shanti Jaap",
      "shortDesc": "Continuous Mangal Graha Shanti Jaap for planetary peace and mental clarity.",
      "description": "Continuous mantra recitation for Mangal Graha Shanti Jaap to balance planetary energies and resolve horoscope doshas.",
      "keyInsights": [
        "Mantra chanting for Mangal Graha Shanti Jaap.",
        "Mitigates malefic planetary transits.",
        "Performed by expert Vedic Chanting Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards."
      ],
      "priceMin": 3800,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "3-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-rahu-graha-shanti-jaap",
      "name": "Rahu Graha Shanti Jaap",
      "shortDesc": "Continuous Rahu Graha Shanti Jaap for planetary peace and mental clarity.",
      "description": "Continuous mantra recitation for Rahu Graha Shanti Jaap to balance planetary energies and resolve horoscope doshas.",
      "keyInsights": [
        "Mantra chanting for Rahu Graha Shanti Jaap.",
        "Mitigates malefic planetary transits.",
        "Performed by expert Vedic Chanting Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards."
      ],
      "priceMin": 3800,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "3-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-santan-gopal-mantra-jaap",
      "name": "Santan Gopal Mantra Jaap",
      "shortDesc": "Continuous Santan Gopal Mantra Jaap for planetary peace and mental clarity.",
      "description": "Continuous mantra recitation for Santan Gopal Mantra Jaap to balance planetary energies and resolve horoscope doshas.",
      "keyInsights": [
        "Mantra chanting for Santan Gopal Mantra Jaap.",
        "Mitigates malefic planetary transits.",
        "Performed by expert Vedic Chanting Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards."
      ],
      "priceMin": 3800,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "3-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-shani-graha-shanti-jaap",
      "name": "Shani Graha Shanti Jaap",
      "shortDesc": "Continuous Shani Graha Shanti Jaap for planetary peace and mental clarity.",
      "description": "Continuous mantra recitation for Shani Graha Shanti Jaap to balance planetary energies and resolve horoscope doshas.",
      "keyInsights": [
        "Mantra chanting for Shani Graha Shanti Jaap.",
        "Mitigates malefic planetary transits.",
        "Performed by expert Vedic Chanting Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards."
      ],
      "priceMin": 3800,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "3-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-shukra-graha-shanti-jaap",
      "name": "Shukra Graha Shanti Jaap",
      "shortDesc": "Continuous Shukra Graha Shanti Jaap for planetary peace and mental clarity.",
      "description": "Continuous mantra recitation for Shukra Graha Shanti Jaap to balance planetary energies and resolve horoscope doshas.",
      "keyInsights": [
        "Mantra chanting for Shukra Graha Shanti Jaap.",
        "Mitigates malefic planetary transits.",
        "Performed by expert Vedic Chanting Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards."
      ],
      "priceMin": 3800,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "3-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-surya-graha-shanti-jaap",
      "name": "Surya Graha Shanti Jaap",
      "shortDesc": "Continuous Surya Graha Shanti Jaap for planetary peace and mental clarity.",
      "description": "Continuous mantra recitation for Surya Graha Shanti Jaap to balance planetary energies and resolve horoscope doshas.",
      "keyInsights": [
        "Mantra chanting for Surya Graha Shanti Jaap.",
        "Mitigates malefic planetary transits.",
        "Performed by expert Vedic Chanting Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits.",
        "Vedic Standards."
      ],
      "priceMin": 3800,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "3-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    }
  ]
},
    {
  "id": "hindi-paths",
  "name": "Paths",
  "icon": "📖",
  "gradient": "linear-gradient(135deg, #2E7D32, #66BB6A)",
  "description": "Sacred Scriptures Recitations & Paths in Hindi",
  "defaultLanguage": "hindi",
  "services": [
    {
      "id": "hindi-akhand-ramayan-path",
      "name": "Akhand Ramayan Path",
      "shortDesc": "Sacred recitation of Akhand Ramayan Path for peace and protection.",
      "description": "Complete recitation of Akhand Ramayan Path bringing divine aura, courage, and spiritual joy into the household.",
      "keyInsights": [
        "Sacred recitation of Akhand Ramayan Path.",
        "Creates positive energy shield.",
        "Conducted by devoted Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 25000,
      "rating": 4.9,
      "reviewCount": 45,
      "duration": "2-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "pooja"
    },
    {
      "id": "hindi-chandi-path-durga-saptashati-path-",
      "name": "Chandi Path (Durga Saptashati Path)",
      "shortDesc": "Sacred recitation of Chandi Path (Durga Saptashati Path) for peace and protection.",
      "description": "Complete recitation of Chandi Path (Durga Saptashati Path) bringing divine aura, courage, and spiritual joy into the household.",
      "keyInsights": [
        "Sacred recitation of Chandi Path (Durga Saptashati Path).",
        "Creates positive energy shield.",
        "Conducted by devoted Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 25000,
      "rating": 4.9,
      "reviewCount": 45,
      "duration": "2-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "pooja"
    },
    {
      "id": "hindi-hanuman-chalisa-path",
      "name": "Hanuman Chalisa Path",
      "shortDesc": "Sacred recitation of Hanuman Chalisa Path for peace and protection.",
      "description": "Complete recitation of Hanuman Chalisa Path bringing divine aura, courage, and spiritual joy into the household.",
      "keyInsights": [
        "Sacred recitation of Hanuman Chalisa Path.",
        "Creates positive energy shield.",
        "Conducted by devoted Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 25000,
      "rating": 4.9,
      "reviewCount": 45,
      "duration": "2-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "pooja"
    },
    {
      "id": "hindi-shanti-path",
      "name": "Shanti Path",
      "shortDesc": "Sacred recitation of Shanti Path for peace and protection.",
      "description": "Complete recitation of Shanti Path bringing divine aura, courage, and spiritual joy into the household.",
      "keyInsights": [
        "Sacred recitation of Shanti Path.",
        "Creates positive energy shield.",
        "Conducted by devoted Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 25000,
      "rating": 4.9,
      "reviewCount": 45,
      "duration": "2-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "pooja"
    },
    {
      "id": "hindi-shrimad-bhagwat-mool-path",
      "name": "Shrimad Bhagwat Mool Path",
      "shortDesc": "Sacred recitation of Shrimad Bhagwat Mool Path for peace and protection.",
      "description": "Complete recitation of Shrimad Bhagwat Mool Path bringing divine aura, courage, and spiritual joy into the household.",
      "keyInsights": [
        "Sacred recitation of Shrimad Bhagwat Mool Path.",
        "Creates positive energy shield.",
        "Conducted by devoted Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 25000,
      "rating": 4.9,
      "reviewCount": 45,
      "duration": "2-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "pooja"
    },
    {
      "id": "hindi-sunderkand-path",
      "name": "Sunderkand Path",
      "shortDesc": "Sacred recitation of Sunderkand Path for peace and protection.",
      "description": "Complete recitation of Sunderkand Path bringing divine aura, courage, and spiritual joy into the household.",
      "keyInsights": [
        "Sacred recitation of Sunderkand Path.",
        "Creates positive energy shield.",
        "Conducted by devoted Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 25000,
      "rating": 4.9,
      "reviewCount": 45,
      "duration": "2-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "pooja"
    },
    {
      "id": "hindi-vishnu-sahasranam-path",
      "name": "Vishnu Sahasranam Path",
      "shortDesc": "Sacred recitation of Vishnu Sahasranam Path for peace and protection.",
      "description": "Complete recitation of Vishnu Sahasranam Path bringing divine aura, courage, and spiritual joy into the household.",
      "keyInsights": [
        "Sacred recitation of Vishnu Sahasranam Path.",
        "Creates positive energy shield.",
        "Conducted by devoted Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 25000,
      "rating": 4.9,
      "reviewCount": 45,
      "duration": "2-4 hours",
      "defaultLanguage": "hindi",
      "imageType": "pooja"
    }
  ]
},
    {
  "id": "hindi-festival-pujas",
  "name": "Festival Pujas",
  "icon": "🎊",
  "gradient": "linear-gradient(135deg, #F9A825, #FFEE58)",
  "description": "Hindi Festive Celebrations and Vratam Worship",
  "defaultLanguage": "hindi",
  "services": [
    {
      "id": "hindi-diwali-lakshmi-puja",
      "name": "Diwali Lakshmi Puja",
      "shortDesc": "Festive Diwali Lakshmi Puja worship as per Hindi tradition.",
      "description": "Auspicious Diwali Lakshmi Puja celebrated with complete Shodasopachara rituals, Bhog offering, and Aarti.",
      "keyInsights": [
        "Traditional Diwali Lakshmi Puja celebration.",
        "Brings joy & divine blessings.",
        "Performed by certified Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi",
      "imageType": "festival"
    },
    {
      "id": "hindi-dussehra-puja",
      "name": "Dussehra Puja",
      "shortDesc": "Festive Dussehra Puja worship as per Hindi tradition.",
      "description": "Auspicious Dussehra Puja celebrated with complete Shodasopachara rituals, Bhog offering, and Aarti.",
      "keyInsights": [
        "Traditional Dussehra Puja celebration.",
        "Brings joy & divine blessings.",
        "Performed by certified Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi",
      "imageType": "festival"
    },
    {
      "id": "hindi-ganesh-sthapana-and-visarjan-puja",
      "name": "Ganesh Sthapana and Visarjan Puja",
      "shortDesc": "Festive Ganesh Sthapana and Visarjan Puja worship as per Hindi tradition.",
      "description": "Auspicious Ganesh Sthapana and Visarjan Puja celebrated with complete Shodasopachara rituals, Bhog offering, and Aarti.",
      "keyInsights": [
        "Traditional Ganesh Sthapana and Visarjan Puja celebration.",
        "Brings joy & divine blessings.",
        "Performed by certified Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi",
      "imageType": "festival"
    },
    {
      "id": "hindi-hartalika-teej-puja",
      "name": "Hartalika Teej Puja",
      "shortDesc": "Festive Hartalika Teej Puja worship as per Hindi tradition.",
      "description": "Auspicious Hartalika Teej Puja celebrated with complete Shodasopachara rituals, Bhog offering, and Aarti.",
      "keyInsights": [
        "Traditional Hartalika Teej Puja celebration.",
        "Brings joy & divine blessings.",
        "Performed by certified Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi",
      "imageType": "festival"
    },
    {
      "id": "hindi-holika-puja",
      "name": "Holika Puja",
      "shortDesc": "Festive Holika Puja worship as per Hindi tradition.",
      "description": "Auspicious Holika Puja celebrated with complete Shodasopachara rituals, Bhog offering, and Aarti.",
      "keyInsights": [
        "Traditional Holika Puja celebration.",
        "Brings joy & divine blessings.",
        "Performed by certified Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi",
      "imageType": "festival"
    },
    {
      "id": "hindi-janmashtami-puja",
      "name": "Janmashtami Puja",
      "shortDesc": "Festive Janmashtami Puja worship as per Hindi tradition.",
      "description": "Auspicious Janmashtami Puja celebrated with complete Shodasopachara rituals, Bhog offering, and Aarti.",
      "keyInsights": [
        "Traditional Janmashtami Puja celebration.",
        "Brings joy & divine blessings.",
        "Performed by certified Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi",
      "imageType": "festival"
    },
    {
      "id": "hindi-navratri-kalash-sthapana-puja-and-havan",
      "name": "Navratri Kalash Sthapana Puja and Havan",
      "shortDesc": "Festive Navratri Kalash Sthapana Puja and Havan worship as per Hindi tradition.",
      "description": "Auspicious Navratri Kalash Sthapana Puja and Havan celebrated with complete Shodasopachara rituals, Bhog offering, and Aarti.",
      "keyInsights": [
        "Traditional Navratri Kalash Sthapana Puja and Havan celebration.",
        "Brings joy & divine blessings.",
        "Performed by certified Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi",
      "imageType": "festival"
    },
    {
      "id": "hindi-tulsi-vivah-puja",
      "name": "Tulsi Vivah Puja",
      "shortDesc": "Festive Tulsi Vivah Puja worship as per Hindi tradition.",
      "description": "Auspicious Tulsi Vivah Puja celebrated with complete Shodasopachara rituals, Bhog offering, and Aarti.",
      "keyInsights": [
        "Traditional Tulsi Vivah Puja celebration.",
        "Brings joy & divine blessings.",
        "Performed by certified Hindi Pandits."
      ],
      "promise": [
        "Highly Qualified Hindi Pandits."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 40,
      "duration": "2 hours",
      "defaultLanguage": "hindi",
      "imageType": "festival"
    }
  ]
},
    {
  "id": "hindi-shanti-pujas",
  "name": "Shanti Pujas",
  "icon": "☮️",
  "gradient": "linear-gradient(135deg, #7B1FA2, #CE93D8)",
  "description": "Special Remedy & Shanti Rituals in Hindi custom",
  "defaultLanguage": "hindi",
  "services": [
    {
      "id": "hindi-ark-vivah-for-male",
      "name": "Ark Vivah For Male",
      "shortDesc": "Remedial Ark Vivah For Male to clear severe horoscope doshas.",
      "description": "Remedial Shanti ritual for Ark Vivah For Male to absorb negative planetary influences and grant lifelong harmony.",
      "keyInsights": [
        "Remedial ritual for Ark Vivah For Male.",
        "Resolves severe astrological doshas.",
        "Conducted by specialized Vedic Shanti Acharyas."
      ],
      "promise": [
        "Certified Vedic Shanti Acharyas."
      ],
      "priceMin": 6500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "3 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-grahan-yog-shanti-puja",
      "name": "Grahan Yog Shanti Puja",
      "shortDesc": "Remedial Grahan Yog Shanti Puja to clear severe horoscope doshas.",
      "description": "Remedial Shanti ritual for Grahan Yog Shanti Puja to absorb negative planetary influences and grant lifelong harmony.",
      "keyInsights": [
        "Remedial ritual for Grahan Yog Shanti Puja.",
        "Resolves severe astrological doshas.",
        "Conducted by specialized Vedic Shanti Acharyas."
      ],
      "promise": [
        "Certified Vedic Shanti Acharyas."
      ],
      "priceMin": 6500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "3 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-guru-chandal-yoga-shanti",
      "name": "Guru Chandal Yoga Shanti",
      "shortDesc": "Remedial Guru Chandal Yoga Shanti to clear severe horoscope doshas.",
      "description": "Remedial Shanti ritual for Guru Chandal Yoga Shanti to absorb negative planetary influences and grant lifelong harmony.",
      "keyInsights": [
        "Remedial ritual for Guru Chandal Yoga Shanti.",
        "Resolves severe astrological doshas.",
        "Conducted by specialized Vedic Shanti Acharyas."
      ],
      "promise": [
        "Certified Vedic Shanti Acharyas."
      ],
      "priceMin": 6500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "3 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-kaal-sarp-dosh-puja",
      "name": "Kaal Sarp Dosh Puja",
      "shortDesc": "Remedial Kaal Sarp Dosh Puja to clear severe horoscope doshas.",
      "description": "Remedial Shanti ritual for Kaal Sarp Dosh Puja to absorb negative planetary influences and grant lifelong harmony.",
      "keyInsights": [
        "Remedial ritual for Kaal Sarp Dosh Puja.",
        "Resolves severe astrological doshas.",
        "Conducted by specialized Vedic Shanti Acharyas."
      ],
      "promise": [
        "Certified Vedic Shanti Acharyas."
      ],
      "priceMin": 6500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "3 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-kumbh-vivah-for-female",
      "name": "Kumbh Vivah For Female",
      "shortDesc": "Remedial Kumbh Vivah For Female to clear severe horoscope doshas.",
      "description": "Remedial Shanti ritual for Kumbh Vivah For Female to absorb negative planetary influences and grant lifelong harmony.",
      "keyInsights": [
        "Remedial ritual for Kumbh Vivah For Female.",
        "Resolves severe astrological doshas.",
        "Conducted by specialized Vedic Shanti Acharyas."
      ],
      "promise": [
        "Certified Vedic Shanti Acharyas."
      ],
      "priceMin": 6500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "3 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-shani-chandra-vish-yog-nivaran",
      "name": "Shani Chandra Vish Yog Nivaran",
      "shortDesc": "Remedial Shani Chandra Vish Yog Nivaran to clear severe horoscope doshas.",
      "description": "Remedial Shanti ritual for Shani Chandra Vish Yog Nivaran to absorb negative planetary influences and grant lifelong harmony.",
      "keyInsights": [
        "Remedial ritual for Shani Chandra Vish Yog Nivaran.",
        "Resolves severe astrological doshas.",
        "Conducted by specialized Vedic Shanti Acharyas."
      ],
      "promise": [
        "Certified Vedic Shanti Acharyas."
      ],
      "priceMin": 6500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "3 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-shani-ketu-shrapit-dosh-nivaran",
      "name": "Shani Ketu Shrapit Dosh Nivaran",
      "shortDesc": "Remedial Shani Ketu Shrapit Dosh Nivaran to clear severe horoscope doshas.",
      "description": "Remedial Shanti ritual for Shani Ketu Shrapit Dosh Nivaran to absorb negative planetary influences and grant lifelong harmony.",
      "keyInsights": [
        "Remedial ritual for Shani Ketu Shrapit Dosh Nivaran.",
        "Resolves severe astrological doshas.",
        "Conducted by specialized Vedic Shanti Acharyas."
      ],
      "promise": [
        "Certified Vedic Shanti Acharyas."
      ],
      "priceMin": 6500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "3 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-shani-rahu-shrapit-dosh-nivaran",
      "name": "Shani Rahu Shrapit Dosh Nivaran",
      "shortDesc": "Remedial Shani Rahu Shrapit Dosh Nivaran to clear severe horoscope doshas.",
      "description": "Remedial Shanti ritual for Shani Rahu Shrapit Dosh Nivaran to absorb negative planetary influences and grant lifelong harmony.",
      "keyInsights": [
        "Remedial ritual for Shani Rahu Shrapit Dosh Nivaran.",
        "Resolves severe astrological doshas.",
        "Conducted by specialized Vedic Shanti Acharyas."
      ],
      "promise": [
        "Certified Vedic Shanti Acharyas."
      ],
      "priceMin": 6500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "3 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-vishnu-vivah-for-female",
      "name": "Vishnu Vivah For Female",
      "shortDesc": "Remedial Vishnu Vivah For Female to clear severe horoscope doshas.",
      "description": "Remedial Shanti ritual for Vishnu Vivah For Female to absorb negative planetary influences and grant lifelong harmony.",
      "keyInsights": [
        "Remedial ritual for Vishnu Vivah For Female.",
        "Resolves severe astrological doshas.",
        "Conducted by specialized Vedic Shanti Acharyas."
      ],
      "promise": [
        "Certified Vedic Shanti Acharyas."
      ],
      "priceMin": 6500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "3 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    },
    {
      "id": "hindi-vishti-karan-bhadra-shanti-puja",
      "name": "Vishti Karan (Bhadra) Shanti Puja",
      "shortDesc": "Remedial Vishti Karan (Bhadra) Shanti Puja to clear severe horoscope doshas.",
      "description": "Remedial Shanti ritual for Vishti Karan (Bhadra) Shanti Puja to absorb negative planetary influences and grant lifelong harmony.",
      "keyInsights": [
        "Remedial ritual for Vishti Karan (Bhadra) Shanti Puja.",
        "Resolves severe astrological doshas.",
        "Conducted by specialized Vedic Shanti Acharyas."
      ],
      "promise": [
        "Certified Vedic Shanti Acharyas."
      ],
      "priceMin": 6500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 35,
      "duration": "3 hours",
      "defaultLanguage": "hindi",
      "imageType": "shanti"
    }
  ]
},
    {
  "id": "hindi-pitru-pujas",
  "name": "Pitru Pujas",
  "icon": "🕯️",
  "gradient": "linear-gradient(135deg, #4E342E, #8D6E63)",
  "description": "Ancestor & Shradh Ceremonies in Hindi custom",
  "defaultLanguage": "hindi",
  "services": [
    {
      "id": "hindi-amavasya-tarpan",
      "name": "Amavasya Tarpan",
      "shortDesc": "Sacred Amavasya Tarpan for ancestor peace and blessings.",
      "description": "Amavasya Tarpan performed with reverence to honor ancestors, grant peace to departed souls, and receive Pitru blessings.",
      "keyInsights": [
        "Sacred Amavasya Tarpan ritual.",
        "Honors ancestors & grants soul peace.",
        "Conducted by experienced Vedic Priests."
      ],
      "promise": [
        "Experienced Vedic Shradh Priests."
      ],
      "priceMin": 3000,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "ancestor"
    },
    {
      "id": "hindi-antim-sanskar-last-rites",
      "name": "Antim Sanskar - Last Rites",
      "shortDesc": "Sacred Antim Sanskar - Last Rites for ancestor peace and blessings.",
      "description": "Antim Sanskar - Last Rites performed with reverence to honor ancestors, grant peace to departed souls, and receive Pitru blessings.",
      "keyInsights": [
        "Sacred Antim Sanskar - Last Rites ritual.",
        "Honors ancestors & grants soul peace.",
        "Conducted by experienced Vedic Priests."
      ],
      "promise": [
        "Experienced Vedic Shradh Priests."
      ],
      "priceMin": 3000,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "ancestor"
    },
    {
      "id": "hindi-asthi-visarjan",
      "name": "Asthi Visarjan",
      "shortDesc": "Sacred Asthi Visarjan for ancestor peace and blessings.",
      "description": "Asthi Visarjan performed with reverence to honor ancestors, grant peace to departed souls, and receive Pitru blessings.",
      "keyInsights": [
        "Sacred Asthi Visarjan ritual.",
        "Honors ancestors & grants soul peace.",
        "Conducted by experienced Vedic Priests."
      ],
      "promise": [
        "Experienced Vedic Shradh Priests."
      ],
      "priceMin": 3000,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "ancestor"
    },
    {
      "id": "hindi-barsi-ceremony",
      "name": "Barsi Ceremony",
      "shortDesc": "Sacred Barsi Ceremony for ancestor peace and blessings.",
      "description": "Barsi Ceremony performed with reverence to honor ancestors, grant peace to departed souls, and receive Pitru blessings.",
      "keyInsights": [
        "Sacred Barsi Ceremony ritual.",
        "Honors ancestors & grants soul peace.",
        "Conducted by experienced Vedic Priests."
      ],
      "promise": [
        "Experienced Vedic Shradh Priests."
      ],
      "priceMin": 3000,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "ancestor"
    },
    {
      "id": "hindi-brahmins-for-bhojan",
      "name": "Brahmins for Bhojan",
      "shortDesc": "Sacred Brahmins for Bhojan for ancestor peace and blessings.",
      "description": "Brahmins for Bhojan performed with reverence to honor ancestors, grant peace to departed souls, and receive Pitru blessings.",
      "keyInsights": [
        "Sacred Brahmins for Bhojan ritual.",
        "Honors ancestors & grants soul peace.",
        "Conducted by experienced Vedic Priests."
      ],
      "promise": [
        "Experienced Vedic Shradh Priests."
      ],
      "priceMin": 3000,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "ancestor"
    },
    {
      "id": "hindi-garud-puran-path",
      "name": "Garud Puran Path",
      "shortDesc": "Sacred Garud Puran Path for ancestor peace and blessings.",
      "description": "Garud Puran Path performed with reverence to honor ancestors, grant peace to departed souls, and receive Pitru blessings.",
      "keyInsights": [
        "Sacred Garud Puran Path ritual.",
        "Honors ancestors & grants soul peace.",
        "Conducted by experienced Vedic Priests."
      ],
      "promise": [
        "Experienced Vedic Shradh Priests."
      ],
      "priceMin": 3000,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "ancestor"
    },
    {
      "id": "hindi-pitru-paksha-mahalaya-shradh-puja",
      "name": "Pitru Paksha (Mahalaya) Shradh Puja",
      "shortDesc": "Sacred Pitru Paksha (Mahalaya) Shradh Puja for ancestor peace and blessings.",
      "description": "Pitru Paksha (Mahalaya) Shradh Puja performed with reverence to honor ancestors, grant peace to departed souls, and receive Pitru blessings.",
      "keyInsights": [
        "Sacred Pitru Paksha (Mahalaya) Shradh Puja ritual.",
        "Honors ancestors & grants soul peace.",
        "Conducted by experienced Vedic Priests."
      ],
      "promise": [
        "Experienced Vedic Shradh Priests."
      ],
      "priceMin": 3000,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "ancestor"
    },
    {
      "id": "hindi-shradh",
      "name": "Shradh",
      "shortDesc": "Sacred Shradh for ancestor peace and blessings.",
      "description": "Shradh performed with reverence to honor ancestors, grant peace to departed souls, and receive Pitru blessings.",
      "keyInsights": [
        "Sacred Shradh ritual.",
        "Honors ancestors & grants soul peace.",
        "Conducted by experienced Vedic Priests."
      ],
      "promise": [
        "Experienced Vedic Shradh Priests."
      ],
      "priceMin": 3000,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "ancestor"
    },
    {
      "id": "hindi-swayampaka-seedha-daan-for-brahmins",
      "name": "Swayampaka/Seedha Daan for Brahmins",
      "shortDesc": "Sacred Swayampaka/Seedha Daan for Brahmins for ancestor peace and blessings.",
      "description": "Swayampaka/Seedha Daan for Brahmins performed with reverence to honor ancestors, grant peace to departed souls, and receive Pitru blessings.",
      "keyInsights": [
        "Sacred Swayampaka/Seedha Daan for Brahmins ritual.",
        "Honors ancestors & grants soul peace.",
        "Conducted by experienced Vedic Priests."
      ],
      "promise": [
        "Experienced Vedic Shradh Priests."
      ],
      "priceMin": 3000,
      "priceMax": 15000,
      "rating": 4.8,
      "reviewCount": 30,
      "duration": "2-3 hours",
      "defaultLanguage": "hindi",
      "imageType": "ancestor"
    }
  ]
},
    {
  "id": "marathi-pujas",
  "name": "Puja",
  "icon": "📿",
  "gradient": "linear-gradient(135deg, #FF6B00, #E65100)",
  "description": "Traditional Marathi Puja and sacred worship rituals",
  "defaultLanguage": "marathi",
  "services": [
    {
      "id": "marathi-annaprashan-puja",
      "name": "Annaprashan Puja",
      "shortDesc": "Traditional Marathi Annaprashan Puja as per Vedic tradition.",
      "description": "Annaprashan Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Annaprashan Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-bhoomi-puja",
      "name": "Bhoomi Puja",
      "shortDesc": "Traditional Marathi Bhoomi Puja as per Vedic tradition.",
      "description": "Bhoomi Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Bhoomi Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-durga-puja",
      "name": "Durga Puja",
      "shortDesc": "Traditional Marathi Durga Puja as per Vedic tradition.",
      "description": "Durga Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Durga Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-engagement-sakharpuda",
      "name": "Engagement/Sakharpuda",
      "shortDesc": "Traditional Marathi Engagement/Sakharpuda as per Vedic tradition.",
      "description": "Engagement/Sakharpuda performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Engagement/Sakharpuda.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-fix-your-muhurat",
      "name": "Fix Your Muhurat",
      "shortDesc": "Traditional Marathi Fix Your Muhurat as per Vedic tradition.",
      "description": "Fix Your Muhurat performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Fix Your Muhurat.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-ganesh-puja",
      "name": "Ganesh Puja",
      "shortDesc": "Traditional Marathi Ganesh Puja as per Vedic tradition.",
      "description": "Ganesh Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Ganesh Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-ganpati-atharvashirsha-abhishek",
      "name": "Ganpati Atharvashirsha Abhishek",
      "shortDesc": "Traditional Marathi Ganpati Atharvashirsha Abhishek as per Vedic tradition.",
      "description": "Ganpati Atharvashirsha Abhishek performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Ganpati Atharvashirsha Abhishek.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-griha-pravesh-puja",
      "name": "Griha Pravesh Puja",
      "shortDesc": "Traditional Marathi Griha Pravesh Puja as per Vedic tradition.",
      "description": "Griha Pravesh Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Griha Pravesh Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-janamdin-puja-birthday-puja",
      "name": "Janamdin Puja-Birthday Puja",
      "shortDesc": "Traditional Marathi Janamdin Puja-Birthday Puja as per Vedic tradition.",
      "description": "Janamdin Puja-Birthday Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Janamdin Puja-Birthday Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-kuber-upasana-puja",
      "name": "Kuber Upasana Puja",
      "shortDesc": "Traditional Marathi Kuber Upasana Puja as per Vedic tradition.",
      "description": "Kuber Upasana Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Kuber Upasana Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-lagna-marriage-puja",
      "name": "Lagna-Marriage Puja",
      "shortDesc": "Traditional Marathi Lagna-Marriage Puja as per Vedic tradition.",
      "description": "Lagna-Marriage Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Lagna-Marriage Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-mahalaxmi-puja",
      "name": "Mahalaxmi Puja",
      "shortDesc": "Traditional Marathi Mahalaxmi Puja as per Vedic tradition.",
      "description": "Mahalaxmi Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Mahalaxmi Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-mangla-gauri-puja",
      "name": "Mangla Gauri Puja",
      "shortDesc": "Traditional Marathi Mangla Gauri Puja as per Vedic tradition.",
      "description": "Mangla Gauri Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Mangla Gauri Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-mundan-ceremony",
      "name": "Mundan Ceremony",
      "shortDesc": "Traditional Marathi Mundan Ceremony as per Vedic tradition.",
      "description": "Mundan Ceremony performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Mundan Ceremony.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-munja-ceremony",
      "name": "Munja Ceremony",
      "shortDesc": "Traditional Marathi Munja Ceremony as per Vedic tradition.",
      "description": "Munja Ceremony performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Munja Ceremony.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-murti-pran-pratishta-at-home",
      "name": "Murti Pran Pratishta At Home",
      "shortDesc": "Traditional Marathi Murti Pran Pratishta At Home as per Vedic tradition.",
      "description": "Murti Pran Pratishta At Home performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Murti Pran Pratishta At Home.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-namkaran-puja",
      "name": "Namkaran Puja",
      "shortDesc": "Traditional Marathi Namkaran Puja as per Vedic tradition.",
      "description": "Namkaran Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Namkaran Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-new-office-opening-puja",
      "name": "New Office Opening Puja",
      "shortDesc": "Traditional Marathi New Office Opening Puja as per Vedic tradition.",
      "description": "New Office Opening Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi New Office Opening Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-rudrabhishek-puja",
      "name": "Rudrabhishek Puja",
      "shortDesc": "Traditional Marathi Rudrabhishek Puja as per Vedic tradition.",
      "description": "Rudrabhishek Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Rudrabhishek Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-saptashati-path",
      "name": "Saptashati Path",
      "shortDesc": "Traditional Marathi Saptashati Path as per Vedic tradition.",
      "description": "Saptashati Path performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Saptashati Path.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-saraswati-puja",
      "name": "Saraswati Puja",
      "shortDesc": "Traditional Marathi Saraswati Puja as per Vedic tradition.",
      "description": "Saraswati Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Saraswati Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-satyanarayan-puja",
      "name": "Satyanarayan Puja",
      "shortDesc": "Traditional Marathi Satyanarayan Puja as per Vedic tradition.",
      "description": "Satyanarayan Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Satyanarayan Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-sunderkand-path",
      "name": "Sunderkand Path",
      "shortDesc": "Traditional Marathi Sunderkand Path as per Vedic tradition.",
      "description": "Sunderkand Path performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Sunderkand Path.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-surya-puja",
      "name": "Surya Puja",
      "shortDesc": "Traditional Marathi Surya Puja as per Vedic tradition.",
      "description": "Surya Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Surya Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-udaka-shanti-puja",
      "name": "Udaka Shanti Puja",
      "shortDesc": "Traditional Marathi Udaka Shanti Puja as per Vedic tradition.",
      "description": "Udaka Shanti Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Udaka Shanti Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-vastu-shanti-puja",
      "name": "Vastu Shanti Puja",
      "shortDesc": "Traditional Marathi Vastu Shanti Puja as per Vedic tradition.",
      "description": "Vastu Shanti Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Vastu Shanti Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-vishkumbha-yog-shanti-puja",
      "name": "Vishkumbha Yog Shanti Puja",
      "shortDesc": "Traditional Marathi Vishkumbha Yog Shanti Puja as per Vedic tradition.",
      "description": "Vishkumbha Yog Shanti Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Vishkumbha Yog Shanti Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-vishnu-sahasranam-path",
      "name": "Vishnu Sahasranam Path",
      "shortDesc": "Traditional Marathi Vishnu Sahasranam Path as per Vedic tradition.",
      "description": "Vishnu Sahasranam Path performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Vishnu Sahasranam Path.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-vishti-karan-bhadra-shanti-pooja",
      "name": "Vishti Karan (Bhadra) Shanti Pooja",
      "shortDesc": "Traditional Marathi Vishti Karan (Bhadra) Shanti Pooja as per Vedic tradition.",
      "description": "Vishti Karan (Bhadra) Shanti Pooja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Vishti Karan (Bhadra) Shanti Pooja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-vishwakarma-puja",
      "name": "Vishwakarma Puja",
      "shortDesc": "Traditional Marathi Vishwakarma Puja as per Vedic tradition.",
      "description": "Vishwakarma Puja performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Vishwakarma Puja.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    },
    {
      "id": "marathi-vyatipat-yog-shanti",
      "name": "Vyatipat Yog Shanti",
      "shortDesc": "Traditional Marathi Vyatipat Yog Shanti as per Vedic tradition.",
      "description": "Vyatipat Yog Shanti performed in authentic Marathi tradition by certified Gurujis & Purohits.",
      "keyInsights": [
        "Traditional Marathi Vyatipat Yog Shanti.",
        "Invokes divine blessings & prosperity.",
        "Conducted by certified Marathi Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis.",
        "Vedic Standards & Samagri."
      ],
      "priceMin": 3500,
      "priceMax": 15000,
      "rating": 4.9,
      "reviewCount": 38,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "pooja"
    }
  ]
},
    {
  "id": "marathi-havans",
  "name": "Havan",
  "icon": "🔥",
  "gradient": "linear-gradient(135deg, #FF6B00, #FFA000)",
  "description": "Sacred Marathi Havan & Homam Rituals",
  "defaultLanguage": "marathi",
  "services": [
    {
      "id": "marathi-chandi-havan",
      "name": "Chandi Havan",
      "shortDesc": "Sacred Marathi Chandi Havan fire ritual.",
      "description": "Chandi Havan performed in sacred fire with authentic Vedic mantras and herbal offerings.",
      "keyInsights": [
        "Sacred Marathi Chandi Havan.",
        "Brings divine protection & health.",
        "Conducted by expert Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 32,
      "duration": "2-3 hours",
      "defaultLanguage": "marathi",
      "imageType": "homam"
    },
    {
      "id": "marathi-dhanvantri-havan",
      "name": "Dhanvantri Havan",
      "shortDesc": "Sacred Marathi Dhanvantri Havan fire ritual.",
      "description": "Dhanvantri Havan performed in sacred fire with authentic Vedic mantras and herbal offerings.",
      "keyInsights": [
        "Sacred Marathi Dhanvantri Havan.",
        "Brings divine protection & health.",
        "Conducted by expert Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 32,
      "duration": "2-3 hours",
      "defaultLanguage": "marathi",
      "imageType": "homam"
    },
    {
      "id": "marathi-ganapathi-havan",
      "name": "Ganapathi Havan",
      "shortDesc": "Sacred Marathi Ganapathi Havan fire ritual.",
      "description": "Ganapathi Havan performed in sacred fire with authentic Vedic mantras and herbal offerings.",
      "keyInsights": [
        "Sacred Marathi Ganapathi Havan.",
        "Brings divine protection & health.",
        "Conducted by expert Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 32,
      "duration": "2-3 hours",
      "defaultLanguage": "marathi",
      "imageType": "homam"
    },
    {
      "id": "marathi-laxmi-kubera-havan",
      "name": "Laxmi Kubera Havan",
      "shortDesc": "Sacred Marathi Laxmi Kubera Havan fire ritual.",
      "description": "Laxmi Kubera Havan performed in sacred fire with authentic Vedic mantras and herbal offerings.",
      "keyInsights": [
        "Sacred Marathi Laxmi Kubera Havan.",
        "Brings divine protection & health.",
        "Conducted by expert Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 32,
      "duration": "2-3 hours",
      "defaultLanguage": "marathi",
      "imageType": "homam"
    },
    {
      "id": "marathi-mrityunjaya-havan",
      "name": "Mrityunjaya Havan",
      "shortDesc": "Sacred Marathi Mrityunjaya Havan fire ritual.",
      "description": "Mrityunjaya Havan performed in sacred fire with authentic Vedic mantras and herbal offerings.",
      "keyInsights": [
        "Sacred Marathi Mrityunjaya Havan.",
        "Brings divine protection & health.",
        "Conducted by expert Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 32,
      "duration": "2-3 hours",
      "defaultLanguage": "marathi",
      "imageType": "homam"
    },
    {
      "id": "marathi-navagraha-havan",
      "name": "Navagraha Havan",
      "shortDesc": "Sacred Marathi Navagraha Havan fire ritual.",
      "description": "Navagraha Havan performed in sacred fire with authentic Vedic mantras and herbal offerings.",
      "keyInsights": [
        "Sacred Marathi Navagraha Havan.",
        "Brings divine protection & health.",
        "Conducted by expert Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 32,
      "duration": "2-3 hours",
      "defaultLanguage": "marathi",
      "imageType": "homam"
    },
    {
      "id": "marathi-saraswati-havan",
      "name": "Saraswati Havan",
      "shortDesc": "Sacred Marathi Saraswati Havan fire ritual.",
      "description": "Saraswati Havan performed in sacred fire with authentic Vedic mantras and herbal offerings.",
      "keyInsights": [
        "Sacred Marathi Saraswati Havan.",
        "Brings divine protection & health.",
        "Conducted by expert Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 32,
      "duration": "2-3 hours",
      "defaultLanguage": "marathi",
      "imageType": "homam"
    },
    {
      "id": "marathi-sudarshan-havan",
      "name": "Sudarshan Havan",
      "shortDesc": "Sacred Marathi Sudarshan Havan fire ritual.",
      "description": "Sudarshan Havan performed in sacred fire with authentic Vedic mantras and herbal offerings.",
      "keyInsights": [
        "Sacred Marathi Sudarshan Havan.",
        "Brings divine protection & health.",
        "Conducted by expert Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis."
      ],
      "priceMin": 5500,
      "priceMax": 18000,
      "rating": 4.9,
      "reviewCount": 32,
      "duration": "2-3 hours",
      "defaultLanguage": "marathi",
      "imageType": "homam"
    }
  ]
},
    {
  "id": "marathi-festival-pujas",
  "name": "Festival Puja",
  "icon": "🎊",
  "gradient": "linear-gradient(135deg, #F9A825, #FFEE58)",
  "description": "Marathi Festive Celebrations and Vratam Worship",
  "defaultLanguage": "marathi",
  "services": [
    {
      "id": "marathi-diwali-lakshmi-puja",
      "name": "Diwali Lakshmi Puja",
      "shortDesc": "Traditional Marathi Diwali Lakshmi Puja festival worship.",
      "description": "Sacred Diwali Lakshmi Puja performed during festive occasions in traditional Marathi Vidhi.",
      "keyInsights": [
        "Traditional Marathi Diwali Lakshmi Puja.",
        "Brings joy & festive prosperity.",
        "Conducted by expert Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 42,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "festival"
    },
    {
      "id": "marathi-ganapathi-sthapana-and-visarjan-puja",
      "name": "Ganapathi Sthapana and Visarjan Puja",
      "shortDesc": "Traditional Marathi Ganapathi Sthapana and Visarjan Puja festival worship.",
      "description": "Sacred Ganapathi Sthapana and Visarjan Puja performed during festive occasions in traditional Marathi Vidhi.",
      "keyInsights": [
        "Traditional Marathi Ganapathi Sthapana and Visarjan Puja.",
        "Brings joy & festive prosperity.",
        "Conducted by expert Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 42,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "festival"
    },
    {
      "id": "marathi-janmashtami-puja",
      "name": "Janmashtami Puja",
      "shortDesc": "Traditional Marathi Janmashtami Puja festival worship.",
      "description": "Sacred Janmashtami Puja performed during festive occasions in traditional Marathi Vidhi.",
      "keyInsights": [
        "Traditional Marathi Janmashtami Puja.",
        "Brings joy & festive prosperity.",
        "Conducted by expert Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 42,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "festival"
    },
    {
      "id": "marathi-navratri-ghatasthapana-puja-and-havan",
      "name": "Navratri Ghatasthapana Puja and Havan",
      "shortDesc": "Traditional Marathi Navratri Ghatasthapana Puja and Havan festival worship.",
      "description": "Sacred Navratri Ghatasthapana Puja and Havan performed during festive occasions in traditional Marathi Vidhi.",
      "keyInsights": [
        "Traditional Marathi Navratri Ghatasthapana Puja and Havan.",
        "Brings joy & festive prosperity.",
        "Conducted by expert Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 42,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "festival"
    },
    {
      "id": "marathi-tulsi-vivah-puja",
      "name": "Tulsi Vivah Puja",
      "shortDesc": "Traditional Marathi Tulsi Vivah Puja festival worship.",
      "description": "Sacred Tulsi Vivah Puja performed during festive occasions in traditional Marathi Vidhi.",
      "keyInsights": [
        "Traditional Marathi Tulsi Vivah Puja.",
        "Brings joy & festive prosperity.",
        "Conducted by expert Gurujis."
      ],
      "promise": [
        "Certified Marathi Gurujis."
      ],
      "priceMin": 3500,
      "priceMax": 12000,
      "rating": 4.9,
      "reviewCount": 42,
      "duration": "2 hours",
      "defaultLanguage": "marathi",
      "imageType": "festival"
    }
  ]
}
  ]
};

// Auto-ensure Astrologer Category exists across ALL languages
(function ensureAstrologerInAllLanguages() {
  if (!window.APP_DATA || !window.APP_DATA.languages || !window.APP_DATA.categories) return;

  window.APP_DATA.languages.forEach(lang => {
    const langId = lang.id;
    const catId = langId === 'telugu' ? 'astrologer' : `${langId}-astrologer`;
    const exists = window.APP_DATA.categories.some(c => c.id === catId || (c.defaultLanguage === langId && c.name.toLowerCase().includes('astrologer')));

    if (!exists) {
      window.APP_DATA.categories.push({
        id: catId,
        name: 'Astrologer',
        icon: '🔮',
        gradient: 'linear-gradient(135deg, #4A148C, #7B1FA2)',
        description: `Authentic Jyotishya, Horoscope, and Astrological Consultation by Certified Vedic Astrologers in ${lang.name}.`,
        defaultLanguage: langId,
        services: [
          {
            id: `${langId}-fix-your-muhurat`,
            name: 'Fix Your Muhurtham',
            shortDesc: 'Astrological consultation for fixing auspicious timings & Panchang.',
            description: 'Consult expert Vedic astrologers and Jyotish pandits to calculate the most auspicious Muhurtham (timing) based on birth charts for marriage, housewarming, or new business.',
            keyInsights: ['Panchang calculation based on exact birth details.', 'Avoids Rahu Kaal and inauspicious planetary transits.', 'Tailored for marriage, Griha Pravesh, and business.', 'Ensures long-term success.', 'Provided by certified Jyotishis.'],
            promise: ['Experienced Astrologers.', 'Accurate Panchang Calculation.', 'Detailed Report Provided.'],
            priceMin: 500, priceMax: 2500, rating: 4.8, reviewCount: 55, duration: '1 hour', defaultLanguage: langId, imageType: 'pooja'
          },
          {
            id: `${langId}-janam-kundali-matching`,
            name: 'Janam Kundali & Jathakam Matching',
            shortDesc: 'Comprehensive horoscope matching for marriage & compatibility.',
            description: 'Detailed Ashta Koota and Dasha Sandhi horoscope analysis for bride and groom to check marital harmony, longevity, Kuja dosha, and family prosperity.',
            keyInsights: ['36 Gun Milan & Ashta Koota matching.', 'Kuja/Mangal Dosha & Papa Samyam check.', 'Analysis of 7th and 8th house transits.', 'Remedy suggestions for marital peace.', 'Conducted by senior Jyotish Acharyas.'],
            promise: ['Certified Astrologers.', '100% Confidential Consultation.', 'Detailed Matching Report.'],
            priceMin: 1100, priceMax: 5000, rating: 4.9, reviewCount: 62, duration: '1-2 hours', defaultLanguage: langId, imageType: 'pooja'
          },
          {
            id: `${langId}-career-business-astrology`,
            name: 'Career & Business Astrology Reading',
            shortDesc: 'Astrological guidance for job promotion, business growth & finance.',
            description: 'In-depth analysis of 10th house (Karma Bhava) and 11th house (Gain Bhava) to resolve career stagnation, job loss, partnership issues, and financial bottlenecks.',
            keyInsights: ['Career path guidance & job switch muhurat.', 'Business expansion & partnership compatibility.', 'Financial luck remedies & Dasha analysis.', 'Conducted by experienced Astrologers.'],
            promise: ['Expert Jyotish Consultation.', 'Clear Remedies & Guidance.'],
            priceMin: 1500, priceMax: 7500, rating: 4.9, reviewCount: 48, duration: '1 hour', defaultLanguage: langId, imageType: 'pooja'
          },
          {
            id: `${langId}-marriage-compatibility-horoscope`,
            name: 'Marriage & Compatibility Horoscope',
            shortDesc: 'Solving marital delays, relationship disputes & Kuja dosha.',
            description: 'Expert horoscope reading to remove obstacles in finding a life partner, mitigate Manglik/Kuja doshas, and restore harmony between spouses.',
            keyInsights: ['Mitigates Mangal & Rahu/Ketu marriage delays.', 'Relationship harmony remedies.', 'Personalized mantra and Yantra suggestions.'],
            promise: ['Authentic Vedic Remedy Advice.', 'Experienced Astrologers.'],
            priceMin: 1200, priceMax: 5500, rating: 4.8, reviewCount: 40, duration: '1 hour', defaultLanguage: langId, imageType: 'pooja'
          },
          {
            id: `${langId}-dosha-nivarana-consultation`,
            name: 'Dosha Nivarana & Remedy Advice',
            shortDesc: 'Identification and remedy guidance for Kaal Sarp, Sade Sati & Pitru dosha.',
            description: 'Comprehensive analysis of affliction in Janam Kundali to prescribe effective Vedic remedies, Mantra Japams, and Havan rituals for relief.',
            keyInsights: ['Kaal Sarp & Shani Sade Sati remedies.', 'Pitru & Rahu/Ketu affliction remedies.', 'Customized Pooja & Havan recommendations.'],
            promise: ['Effective Vedic Remedies.', 'Detailed Horoscope Report.'],
            priceMin: 1500, priceMax: 6000, rating: 4.9, reviewCount: 50, duration: '1 hour', defaultLanguage: langId, imageType: 'shanti'
          },
          {
            id: `${langId}-vastu-astrology-guidance`,
            name: 'Vastu & Birth Chart Astrology Services',
            shortDesc: 'Directional Vastu alignment based on individual horoscope.',
            description: 'Combines home/commercial Vastu principles with personal planetary charts to maximize health, peace, and wealth flow into the living space.',
            keyInsights: ['Horoscope-aligned Vastu evaluation.', 'Removes spatial and energy blockages.', 'Commercial & residential site guidance.'],
            promise: ['Senior Vastu Experts.', 'Practical Non-Demolition Remedies.'],
            priceMin: 2500, priceMax: 11000, rating: 5.0, reviewCount: 38, duration: '2 hours', defaultLanguage: langId, imageType: 'shanti'
          },
          {
            id: `${langId}-gemstone-rudraksha-recommendation`,
            name: 'Gemstone & Rudraksha Selection Advice',
            shortDesc: 'Auspicious gemstone and authentic Rudraksha consultation.',
            description: 'Scientific astrological recommendation of lucky gemstones (Ratna) and sacred Rudraksha beads based on Lagna lord and planetary strength.',
            keyInsights: ['Determines correct Ratna (Ruby, Emerald, Sapphire, etc.).', 'Authentic Mukhi Rudraksha prescription.', 'Prana Pratishtha method for wearing.'],
            promise: ['100% Authentic Astrological Advice.', 'No Forced Commercial Selling.'],
            priceMin: 1100, priceMax: 4500, rating: 4.9, reviewCount: 45, duration: '45 mins', defaultLanguage: langId, imageType: 'pooja'
          }
        ]
      });
    }
  });
})();