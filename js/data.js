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
    { id: 'tamil', name: 'Tamil' },
    { id: 'kannada', name: 'Kannada' },
    { id: 'hindi', name: 'Hindi' },
    { id: 'marathi', name: 'Marathi' },
    { id: 'gujarati', name: 'Gujarati' },
    { id: 'bengali', name: 'Bengali' },
    { id: 'malayalam', name: 'Malayalam' },
    { id: 'odia', name: 'Odia' },
    { id: 'english', name: 'English' }
  ],
  defaultLanguage: 'telugu',

  categories: [
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
          description: 'Perform the sacred Annaprashan Puja to mark your baby’s first solid food intake with blessings of health, strength, and prosperity. Harivara provides experienced North Indian Pandits, complete puja samagri, muhurat selection, and hassle-free doorstep service across India.',
          keyInsights: [
            'Initiates the child into the world of alphabets.',
            'Performed typically at the age of two to two-and-a-half years.',
            'Invokes Goddess Saraswati for knowledge and wisdom.',
            'The child writes Omkara on rice or sand.',
            'Helps in the intellectual growth of the child.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 3500, priceMax: 12000, rating: 4.9, reviewCount: 45, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
        {
          id: 'annaprasanam',
          name: 'Annaprasanam',
          shortDesc: 'First feeding ceremony for the baby.',
          description: 'Annaprasanam marks the baby\'s first intake of solid food other than milk. It is a significant milestone in a child\'s growth, celebrated by invoking deities for health and longevity.',
          keyInsights: [
            'The baby takes solid food for the first time.',
            'Helps the baby grow healthy and strong.',
            'Performed on 6th or 7th month on Janma Nakshatra day.',
            'Mantras are chanted for the baby\'s well-being.',
            'Payasam or Milk Rice is the main ingredient.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 4800, priceMax: 18800, rating: 4.8, reviewCount: 38, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
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
          priceMin: 15000, priceMax: 45000, rating: 4.9, reviewCount: 12, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
        {
          id: 'devata-kalyanotsavam',
          name: 'Devata Kalyanotsavam',
          shortDesc: 'Divine marriage ceremony of deities.',
          description: 'Kalyanotsavam is the celestial wedding of the presiding deities, performed for the welfare of the world and to bring auspiciousness, peace, and prosperity to the sponsors.',
          keyInsights: [
            'Re-enactment of the divine marriage.',
            'Brings immense peace and prosperity to the family.',
            'Removes obstacles in marriage for devotees.',
            'A highly elaborate and sacred ritual.',
            'Can be performed at home or in temples.'
          ],
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 12000, priceMax: 35000, rating: 5.0, reviewCount: 22, duration: '3-5 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
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
          promise: ['Vedic Patashala certified and experienced priests.', 'All rituals follow Vedic Standards and Procedures.', 'High-quality Samagri to ensure a pleasant Pooja experience.', 'Guaranteed Punctuality and Authenticity.'],
          priceMin: 1000, priceMax: 5000, rating: 4.6, reviewCount: 40, duration: '1 hour', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
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
          priceMin: 10000, priceMax: 40000, rating: 4.9, reviewCount: 50, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
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
          priceMin: 3000, priceMax: 10000, rating: 4.8, reviewCount: 15, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
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
          priceMin: 35000, priceMax: 150000, rating: 5.0, reviewCount: 30, duration: '6-10 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
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
          priceMin: 8000, priceMax: 25000, rating: 4.7, reviewCount: 25, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
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
          priceMin: 4000, priceMax: 12000, rating: 4.5, reviewCount: 8, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
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
          priceMin: 20000, priceMax: 60000, rating: 5.0, reviewCount: 18, duration: '5-8 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
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
          priceMin: 25000, priceMax: 70000, rating: 5.0, reviewCount: 10, duration: '5-8 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
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
          priceMin: 8000, priceMax: 25000, rating: 4.8, reviewCount: 35, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
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
          priceMin: 15000, priceMax: 40000, rating: 4.9, reviewCount: 28, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        },
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
          priceMin: 15000, priceMax: 45000, rating: 5.0, reviewCount: 20, duration: '3-5 hours', defaultLanguage: 'telugu', imageType: 'ceremony'
        }
      ]
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
          priceMin: 3000, priceMax: 10000, rating: 4.8, reviewCount: 40, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 5000, priceMax: 20000, rating: 4.9, reviewCount: 38, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 8000, priceMax: 25000, rating: 5.0, reviewCount: 22, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 4000, priceMax: 15000, rating: 4.9, reviewCount: 45, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 5000, priceMax: 18000, rating: 4.9, reviewCount: 32, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 2000, priceMax: 8000, rating: 4.8, reviewCount: 50, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 3500, priceMax: 12000, rating: 4.7, reviewCount: 15, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 4000, priceMax: 15000, rating: 5.0, reviewCount: 42, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 15000, priceMax: 50000, rating: 5.0, reviewCount: 18, duration: '4-6 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 5000, priceMax: 20000, rating: 4.8, reviewCount: 48, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 1500, priceMax: 4000, rating: 4.7, reviewCount: 50, duration: '1 hour', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 2500, priceMax: 8000, rating: 4.8, reviewCount: 30, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 6000, priceMax: 25000, rating: 5.0, reviewCount: 45, duration: '2-4 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 3000, priceMax: 10000, rating: 4.9, reviewCount: 35, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 4000, priceMax: 15000, rating: 5.0, reviewCount: 50, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 5000, priceMax: 18000, rating: 4.8, reviewCount: 20, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 4000, priceMax: 15000, rating: 4.9, reviewCount: 42, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
        {
          id: 'varakal-regia',
          name: 'Varakal Regia (Dwarabandhanam)',
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
          priceMin: 3000, priceMax: 10000, rating: 4.7, reviewCount: 12, duration: '1-2 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 6000, priceMax: 22000, rating: 4.9, reviewCount: 38, duration: '3-4 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        },
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
          priceMin: 4000, priceMax: 12000, rating: 5.0, reviewCount: 30, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'pooja'
        }
      ]
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
          priceMin: 5000, priceMax: 18000, rating: 4.9, reviewCount: 35, duration: '2-3 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
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
          priceMin: 20000, priceMax: 100000, rating: 5.0, reviewCount: 40, duration: '5-8 hours', defaultLanguage: 'telugu', imageType: 'homam'
        },
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
    }
  ]
};
