const COUNTRIES_DATA = [
  {
    id: "india",
    name: "India",
    tagline: "Land of Divine Heritage & Colors",
    image: "images/taj..jpg", // Preserved local image
    intro: "India is a vibrant South Asian nation known for its ancient temples, profound spirituality, diverse landscapes, and incredible culinary heritage.",
    states: [
      {
        id: "andhra-pradesh",
        name: "Andhra Pradesh",
        tagline: "The Spiritual Capital",
        intro: "Home to deeply revered shrines and rich coastal heritage. The state is globally known for the Tirumala Temple.",
        image: "images/andhra pradesh.jpg", 
        locations: [
          { 
            name: "Tirumala Venkateswara Temple", 
            description: "One of the richest and most visited Hindu temples in the world, dedicated to Lord Venkateswara.", 
            image: "images/andhra pradesh.jpg", 
            food: "Tirupati Laddu, Pulihora", 
            hotel: "Taj Tirupati", 
            restaurant: "Kamat Hotel" 
          },
          { 
            name: "Araku Valley", 
            description: "Scenic hill station famous for its sprawling coffee plantations, lush green forests, and tribal heritage.", 
            image: "images/araku valley.webp", 
            food: "Bamboo Chicken", 
            hotel: "Haritha Hill Resort", 
            restaurant: "Tribal Spice Restaurant" 
          },
          {
            name: "Lepakshi Veerabhadra Temple",
            description: "A 16th-century Vijayanagara architectural masterpiece famous for its hanging pillar and monolithic Nandi.",
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80",
            food: "Gongura Royyalu, Bobbatlu",
            hotel: "Haritha Hotel Hindupur",
            restaurant: "Aharanam Restaurant"
          }
        ],
        items: [
          { name: "Pesarattu Dosa", description: "A crispy crepe made from green gram, served with ginger chutney.", image: "images/pesarattu dosa.png" },
          { name: "Andhra Chicken Biryani", description: "Extremely spicy and aromatic rice dish layered with marinated chicken.", image: "images/andhra biryani.jpg" },
          { name: "Gongura Pachadi", description: "A tangy and spicy chutney prepared from sorrel leaves and traditional spices.", image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400&q=80" }
        ]
      },
      {
        id: "arunachal-pradesh",
        name: "Arunachal Pradesh",
        tagline: "Land of the Dawn-lit Mountains",
        intro: "A pristine northeastern paradise featuring snow-clad peaks and ancient Buddhist monasteries.",
        image: "images/sela pass.jpg", 
        locations: [
          { 
            name: "Tawang Monastery", 
            description: "The largest Buddhist monastery in India, perched beautifully at 10,000 feet in the Himalayas.", 
            image: "images/tawang monestory.png", 
            food: "Zan, Khura", 
            hotel: "Vivanta Tawang", 
            restaurant: "The Dragon Restaurant" 
          },
          { 
            name: "Namdapha National Park", 
            description: "A biodiversity hotspot known for its incredible range of flora and rare snow leopards.", 
            image: "images/namdhapha.jpg", 
            food: "Apong Rice Beer, Thukpa", 
            hotel: "Miao Eco Resort", 
            restaurant: "Namdapha River Cafe" 
          },
          {
            name: "Ziro Valley",
            description: "A UNESCO heritage site famous for rice terraces, Apatani tribal culture, and music festivals.",
            image: "images/ziro.webp",
            food: "Pika Pila, Bamboo Shoot Stew",
            hotel: "Ziro Cascade Resort",
            restaurant: "Sii Lake Restaurant"
          }
        ],
        items: [
          { name: "Thukpa", description: "A hot noodle soup with vegetables and meat, perfect for the mountain weather.", image: "images/thukpa.jpg" },
          { name: "Momos", description: "Steamed dumplings filled with savory meat or fresh vegetables.", image: "images/momo.jpg" },
          { name: "Apong Rice Beer", description: "Traditional fermented rice beer brewed natively by tribal communities.", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80" }
        ]
      },
      {
        id: "assam",
        name: "Assam",
        tagline: "The Land of Red River and Blue Hills",
        intro: "Known for vast tea gardens, the mighty Brahmaputra River, and the sacred Kamakhya Temple.",
        image: "images/assam.webp", 
        locations: [
          { 
            name: "Kamakhya Temple", 
            description: "A highly revered ancient Shakti Peetha temple situated on the Nilachal Hill in Guwahati.", 
            image: "images/kamakhya temple.jpg", 
            food: "Khar, Duck Meat Curry", 
            hotel: "Radisson Blu Hotel Guwahati", 
            restaurant: "Paradise Restaurant" 
          },
          { 
            name: "Kaziranga National Park", 
            description: "UNESCO World Heritage site home to two-thirds of the world's great one-horned rhinoceroses.", 
            image: "images/kaziranga national park.jpg", 
            food: "Masor Tenga", 
            hotel: "IORA - The Retreat", 
            restaurant: "Jupuri Ghar" 
          },
          {
            name: "Majuli Island",
            description: "The world's largest river island, known for its vibrant Neo-Vaishnavite satras and mask-making traditions.",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
            food: "Pitha, Assamese Fish Thali",
            hotel: "Dekasang Majuli",
            restaurant: "Riverbank Cafe"
          }
        ],
        items: [
          { name: "Masor Tenga", description: "A signature light and tangy Assamese fish curry cooked with tomatoes and lemon.", image: "images/Masor Tenga.jpg" },
          { name: "Papaya Khar", description: "A unique traditional liquid dish prepared by filtering water through dried banana peel ashes.", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80" },
          { name: "Assam Black Tea", description: "World-famous malty black tea grown abundantly in the Brahmaputra valley.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80" }
        ]
      },
      {
        id: "bihar",
        name: "Bihar",
        tagline: "Land of Buddha & Ashoka",
        intro: "The birthplace of Buddhism and Jainism, home to the sacred Mahabodhi Temple and ancient ruins.",
        image: "images/Bihar.jpg", 
        locations: [
          { 
            name: "Mahabodhi Temple", 
            description: "A UNESCO World Heritage site marking the exact spot where Lord Buddha attained enlightenment.", 
            image: "images/mahabodhi temple.jpg", 
            food: "Litti Chokha, Khaja", 
            hotel: "Hyatt Place Bodh Gaya", 
            restaurant: "Be Happy Cafe" 
          },
          { 
            name: "Nalanda University Ruins", 
            description: "The historical remains of one of the world's first and greatest residential universities.", 
            image: "images/Bihar.jpg", 
            food: "Sattu Paratha", 
            hotel: "Hotel Rajgir International", 
            restaurant: "Maurya Vihar" 
          },
          {
            name: "Takht Sri Patna Sahib",
            description: "A sacred Sikh Gurdwara commemorating the birthplace of Guru Gobind Singh Ji.",
            image:"images/takht shri sahib.jpg",
            food: "Kada Prasad, Malpua",
            hotel: "Hotel Maurya Patna",
            restaurant: "Pind Balluchi"
          }
        ],
        items: [
          { name: "Litti Chokha", description: "Baked wheat flour balls stuffed with roasted gram flour, served with mashed eggplant.", image: "images/litti chokha.jpg" },
          { name: "Sattu Paratha", description: "Hearty and nutritious flatbread stuffed with spiced roasted gram flour.", image: "images/sattu paratha.jpg" },
          { name: "Silao Khaja", description: "A crispy, multi-layered sweet pastry famous from the town of Silao.", image: "images/silao khaja.jpg" }
        ]
      },
      {
        id: "chhattisgarh",
        name: "Chhattisgarh",
        tagline: "The Tribal Heartland",
        intro: "Known for ancient temples set deeply amidst lush green forests and tribal heritage.",
        image: "images/chhattisgarh.jpg", 
        locations: [
          { 
            name: "Bhoramdeo Temple", 
            description: "An ancient Hindu temple dedicated to Lord Shiva, often called the Khajuraho of Chhattisgarh due to its carvings.", 
            image: "images/bhoramdeo temple.jpg", 
            food: "Chila, Fara", 
            hotel: "Bhoramdeo Jungle Retreat", 
            restaurant: "Tribal Tadka" 
          },
          { 
            name: "Chitrakote Falls", 
            description: "Known as the Niagara of India, this massive and magnificent waterfall is a visual treat.", 
            image: "images/chhattisgarh.jpg", 
            food: "Muthia, Sabudana Khichdi", 
            hotel: "Dandami Luxury Resort", 
            restaurant: "Naman Cafe" 
          }
        ],
        items: [
          { name: "Fara", description: "Steamed rice flour dumplings often tossed with mustard seeds and green chilies.", image: "images/fara.jpg" },
          { name: "Muthia", description: "Crispy and savory steamed dumplings made from a healthy rice batter.", image: "images/muthiya.webp" }
        ]
      },
      {
        id: "goa",
        name: "Goa",
        tagline: "Sun, Sand & Soul",
        intro: "A coastal state famous for its beaches, spice plantations, and historic Portuguese-era churches.",
        image: "images/goa.jpg", 
        locations: [
          { 
            name: "Basilica of Bom Jesus", 
            description: "A UNESCO World Heritage site and iconic 16th-century church housing the relics of St. Francis Xavier.", 
            image: "images/Basilica of Bom Jesus.jpg", 
            food: "Sorpotel, Bebinca", 
            hotel: "Taj Cidade de Goa", 
            restaurant: "Mum's Kitchen" 
          },
          { 
            name: "Baga Beach", 
            description: "One of the most famous tourist beaches known for incredible water sports and nightlife.", 
            image: "images/baga beach.jpg", 
            food: "Goan Fish Curry", 
            hotel: "Acron Waterfront Resort", 
            restaurant: "Britto's Shack" 
          },
          {
            name: "Fort Aguada",
            description: "A well-preserved 17th-century Portuguese fort and lighthouse providing views of the Arabian Sea.",
            image: "images/fort aguada.jpg",
            food: "Pork Vindaloo, Cashew Feni",
            hotel: "Taj Fort Aguada Resort",
            restaurant: "Fisherman's Wharf"
          }
        ],
        items: [
          { name: "Goan Fish Curry", description: "A rich coconut-based curry cooked with fresh local fish and tangy kokum.", image: "images/goan fish curry.jpg" },
          { name: "Bebinca", description: "A traditional multi-layered sweet dessert baked to perfection with coconut milk.", image: "images/bebinca.jpg" },
          { name: "Pork Vindaloo", description: "An intensely spicy, tangy pork dish heavily influenced by Portuguese culinary traditions.", image: "images/pork vindaloo.jpg" }
        ]
      },
      {
        id: "gujarat",
        name: "Gujarat",
        tagline: "The Land of Legends",
        intro: "A vibrant state featuring majestic coastal temples, salt deserts, and rich spiritual history.",
        image: "images/statue of unity.jpg", 
        locations: [
          { 
            name: "Somnath Temple", 
            description: "The first among the twelve Jyotirlinga shrines of Shiva, located beautifully on the western coast.", 
            image: "images/somnath temple.jpg", 
            food: "Gujarati Thali", 
            hotel: "The Fern Gir Forest Resort", 
            restaurant: "Gopi Dining Hall" 
          },
          { 
            name: "Gir National Park", 
            description: "Famous for being the only natural habitat of the Asiatic lions in the wild.", 
            image: "images/gir national park.jpg", 
            food: "Dhokla, Khandvi", 
            hotel: "Gir Jungle Lodge", 
            restaurant: "Lion's Paw Diner" 
          },
          {
            name: "Statue of Unity",
            description: "The world's tallest statue (182 meters) dedicated to Sardar Vallabhbhai Patel.",
            image: "images/statue of unity.jpg",
            food: "Undhiyu, Thepla",
            hotel: "Tent City Narmada",
            restaurant: "Ekta Food Court"
          }
        ],
        items: [
          { name: "Gujarati Thali", description: "An elaborate vegetarian meal featuring sweet and savory curries, rotis, and rice.", image: "images/gujarati thali.jpg" },
          { name: "Dhokla", description: "A popular, fluffy, and savory steamed cake made from fermented gram flour.", image: "images/dhokla.jpg" },
          { name: "Khandvi", description: "Delicate rolled gram flour and yogurt snacks tempered with mustard seeds and coconut.", image: "images/khandvi.jpg" }
        ]
      },
      {
        id: "haryana",
        name: "Haryana",
        tagline: "The Vedic Land",
        intro: "The historical epicenter of the Mahabharata, home to ancient stepwells and spiritual sarovars.",
        image: "images/haryana.jpg", 
        locations: [
          { 
            name: "Brahma Sarovar Kurukshetra", 
            description: "An ancient water tank dedicated to Lord Brahma, the creator of the universe, deeply tied to the Mahabharata.", 
            image: "images/brahma sarovar .jpg", 
            food: "Bajra Roti, Singri ki Sabzi", 
            hotel: "Divine Clarks Inn Suites", 
            restaurant: "Haveli Restaurant" 
          },
          { 
            name: "Sultanpur Bird Sanctuary", 
            description: "A popular national park serving as a temporary home for several species of migratory birds.", 
            image: "images/sultanpur bird sanctuary.jpg", 
            food: "Haryanvi Kadhi", 
            hotel: "Heritage Village Resort", 
            restaurant: "Naivedyam" 
          }
        ],
        items: [
          { name: "Bajra Roti & Saag", description: "Pearl millet flatbread served with fresh mustard greens and homemade butter.", image: "images/bajra roti & saag.jpg" },
          { name: "Haryanvi Kadhi", description: "A sour and spicy yogurt-based curry with fried gram flour pakoras.", image: "images/haryanvi kadhi.jpg" }
        ]
      },
      {
        id: "himachal-pradesh",
        name: "Himachal Pradesh",
        tagline: "Valley of the Gods",
        intro: "Nestled in the Himalayas, this state is known for ancient wooden temples and snowy peaks.",
        image: "images/himachal pradesh.jpg", 
        locations: [
          { 
            name: "Hidimba Devi Temple Manali", 
            description: "A beautifully carved ancient wooden temple located in the middle of a cedar forest.", 
            image: "images/himdimba devi temple.jpg", 
            food: "Siddu, Madra", 
            hotel: "The Himalayan Resort", 
            restaurant: "Johnson's Cafe" 
          },
          { 
            name: "Shimla Mall Road", 
            description: "Colonial-era promenade with scenic mountain views, historic churches, and lively shops.", 
            image: "images/shimla mall road.jpg", 
            food: "Himachali Dham, Chana Madra", 
            hotel: "Oberoi Cecil Shimla", 
            restaurant: "Cafe Sol" 
          }
        ],
        items: [
          { name: "Siddu", description: "A local steamed bread stuffed with walnut and poppy seed paste.", image: "images/siddu.jpg" },
          { name: "Himachali Dham", description: "A festive vegetarian feast cooked mostly in copper vessels by traditional chefs.", image: "images/himachali dham.jpg" }
        ]
      },
      {
        id: "jharkhand",
        name: "Jharkhand",
        tagline: "The Sacred Groves",
        intro: "A state rich in minerals, natural beauty, and highly revered pilgrimage sites.",
        image: "images/jharkhand.jpg", 
        locations: [
          { 
            name: "Baidyanath Jyotirlinga Temple Deoghar", 
            description: "One of the 12 Jyotirlingas, this sacred temple complex is the spiritual heart of the state.", 
            image: "images/baidyanath jyotirlinga.jpg", 
            food: "Litti, Handia", 
            hotel: "Hotel Imperial", 
            restaurant: "Mint Leaf Restaurant" 
          },
          { 
            name: "Hundru Falls", 
            description: "A spectacular, powerful 98-meter waterfall descending over rocky cliffs near Ranchi.", 
            image: "images/hundru falls.jpg", 
            food: "Dhuska, Rugra Curry", 
            hotel: "Radisson Blu Hotel Ranchi", 
            restaurant: "Kaveri Restaurant" 
          }
        ],
        items: [
          { name: "Dhuska", description: "A popular deep-fried snack made from rice and lentil batter.", image: "images/dhuska.jpg" },
          { name: "Rugra Curry", description: "A wild mushroom curry prepared with native spices, highly popular in tribal cuisine.", image: "images/rugra curry.jpg" }
        ]
      },
      {
        id: "karnataka",
        name: "Karnataka",
        tagline: "Architecture of Empires",
        intro: "Famous for its intricately carved stone temples from the Vijayanagara and Hoysala empires.",
        image: "images/karnataka.jpg", 
        locations: [
          { 
            name: "Virupaksha Temple Hampi", 
            description: "A stunning UNESCO World Heritage stone temple dedicated to Lord Shiva, located in the ruins of Hampi.", 
            image: "images/virupaksha temple.jpg", 
            food: "Bisi Bele Bath, Neer Dosa", 
            hotel: "Evolve Back Hampi", 
            restaurant: "Mango Tree Restaurant" 
          },
          { 
            name: "Mysore Palace", 
            description: "An incredibly opulent and massive royal palace illuminated at night by thousands of bulbs.", 
            image: "images/mysore palace.jpg", 
            food: "Mysore Pak, Masala Dosa", 
            hotel: "Radisson Blu Plaza Mysore", 
            restaurant: "Mylari Cafe" 
          }
        ],
        items: [
          { name: "Masala Dosa", description: "Crispy rice crepe stuffed with a mildly spiced potato filling.", image: "images/masala dosa.jpg" },
          { name: "Mysore Pak", description: "A rich, melt-in-the-mouth sweet prepared from gram flour, ghee, and sugar.", image: "images/mysore pak.jpg" }
        ]
      },
      {
        id: "kerala",
        name: "Kerala",
        tagline: "God's Own Country",
        intro: "Along with its backwaters, Kerala boasts grand temples adorned with gold and intricate murals.",
        image: "images/kerela.jpg", 
        locations: [
          { 
            name: "Sree Padmanabhaswamy Temple Thiruvananthapuram", 
            description: "An incredibly wealthy and historic Hindu temple built in an intricate fusion of Chera and Dravidian style.", 
            image: "images/Sree Padmanabhaswamy Temple Thiruvananthapuram.jpg", 
            food: "Sadhya, Karimeen Pollichathu", 
            hotel: "Taj Green Cove Resort", 
            restaurant: "Villa Maya" 
          },
          { 
            name: "Alleppey Backwaters", 
            description: "Famous for tranquil, emerald-green backwater canals navigated by majestic houseboats.", 
            image: "images/Alleppey Backwaters.jpg", 
            food: "Appam with Stew", 
            hotel: "Kumarakom Lake Resort", 
            restaurant: "Kuttanad Restaurant" 
          }
        ],
        items: [
          { name: "Kerala Sadhya", description: "A grand vegetarian feast featuring up to 26 dishes served on a banana leaf.", image: "images/kerela sadhya.jpg" },
          { name: "Appam with Stew", description: "Fluffy, lace-edged rice pancakes served alongside a creamy coconut milk stew.", image: "images/appam with stew.jpg" }
        ]
      },
      {
        id: "madhya-pradesh",
        name: "Madhya Pradesh",
        tagline: "The Heart of India",
        intro: "A treasure trove of ancient temples, magnificent forts, and some of the world's finest temple carvings.",
        image: "images/madhya pradesh.jpg", 
        locations: [
          { 
            name: "Khajuraho Group of Monuments", 
            description: "UNESCO world heritage site temples renowned globally for their nagara-style architectural symbolism and intricate sculptures.", 
            image: "images/khajurao.jpg", 
            food: "Poha Jalebi, Dal Bafla", 
            hotel: "The Lalit Temple View Khajuraho", 
            restaurant: "Raja Cafe" 
          },
          { 
            name: "Gwalior Fort", 
            description: "A towering 8th-century hill fort palace featuring ornate blue-tiled walls.", 
            image: "images/gwalior fort.jpg", 
            food: "Bhutte Ka Kees", 
            hotel: "Taj Usha Kiran Palace", 
            restaurant: "Silver Saloon" 
          }
        ],
        items: [
          { name: "Poha Jalebi", description: "A sweet and savory breakfast combination of flattened rice and syrup-soaked spirals.", image: "images/poha jalebi.jpg" },
          { name: "Dal Bafla", description: "Wheat dough balls boiled and baked, then drenched in ghee and served with spicy dal.", image: "images/dal bafla.webp" }
        ]
      },
      {
        id: "maharashtra",
        name: "Maharashtra",
        tagline: "Land of Devotion & Forts",
        intro: "Maharashtra features incredible rock-cut temple caves and powerful shrines dedicated to Lord Ganesha.",
        image: "images/maharashtra.jpg", 
        locations: [
          { 
            name: "Siddhivinayak Temple Mumbai", 
            description: "One of the most prominent and deeply revered Hindu temples in India dedicated to Lord Ganesha.", 
            image: "images/siddhivinayak temple.jpg", 
            food: "Vada Pav, Puran Poli", 
            hotel: "Taj Lands End", 
            restaurant: "Aaswad" 
          },
          { 
            name: "Ajanta & Ellora Caves", 
            description: "Astonishing ancient rock-cut caves showcasing profound Buddhist, Hindu, and Jain artwork.", 
            image: "images/ajanta and ellora caves.jpg", 
            food: "Misal Pav", 
            hotel: "Vivanta Aurangabad", 
            restaurant: "Kailash Restaurant" 
          }
        ],
        items: [
          { name: "Vada Pav", description: "Mumbai's iconic street food: a spicy potato fritter placed inside a soft bread bun.", image: "images/vada pav.jpg" },
          { name: "Misal Pav", description: "A highly spicy curry made of sprouted lentils, topped with crispy farsan, and served with bread.", image: "images/misal pav.jpg" }
        ]
      },
      {
        id: "manipur",
        name: "Manipur",
        tagline: "The Jeweled Land",
        intro: "A serene northeastern state with pristine landscapes, classical dance, and beautiful Vaishnavite temples.",
        image: "images/manipur.jpg", 
        locations: [
          { 
            name: "Shri Shri Govindaji Temple Imphal", 
            description: "A historic Vaishnavite temple featuring twin gold domes, serving as the cultural heart of Manipur.", 
            image: "images/Shri Shri Govindaji Temple Imphal.webp", 
            food: "Eromba, Chak-hao Kheer", 
            hotel: "Classic Grande Imphal", 
            restaurant: "Luxmi Kitchen" 
          },
          { 
            name: "Loktak Lake", 
            description: "A beautiful, massive freshwater lake famous for its unique circular floating islands (phumdis).", 
            image: "images/loktak lake.jpg", 
            food: "Singju, Kangshoi", 
            hotel: "Sendra Park & Resort", 
            restaurant: "Phumdi Cafe" 
          }
        ],
        items: [
          { name: "Eromba", description: "A traditional dish made of boiled vegetables mashed with fermented fish and chilies.", image: "images/eromba.jpg" },
          { name: "Singju", description: "A fresh and spicy traditional Manipuri salad prepared with finely shredded seasonal vegetables.", image: "images/singju.jpg" }
        ]
      },
      {
        id: "meghalaya",
        name: "Meghalaya",
        tagline: "Abode of Clouds",
        intro: "Known for living root bridges, waterfalls, and ancient monoliths tied to indigenous spirituality.",
        image: "images/meghalaya.jpg", 
        locations: [
          { 
            name: "Nartiang Durga Temple", 
            description: "A 500-year-old Shakti Peetha located in the Jaintia Hills district, rich in tribal-Hindu fusion history.", 
            image: "images/nartiang durga temple.jpg", 
            food: "Jadoh, Tungrymbai", 
            hotel: "Polo Orchid Resort Cherrapunji", 
            restaurant: "Jiva Grill Shillong" 
          },
          { 
            name: "Living Root Bridges", 
            description: "Magnificent bridges biologically engineered over centuries by training the roots of massive rubber trees.", 
            image: "images/living root bridge.jpg", 
            food: "Dohneiiong, Pumaloi", 
            hotel: "Cherrapunjee Holiday Resort", 
            restaurant: "Orange Roots" 
          }
        ],
        items: [
          { name: "Jadoh", description: "A savory and aromatic dish made of red hill rice and slow-cooked pork.", image: "images/jadoh.jpg" },
          { name: "Dohneiiong", description: "Rich pork curry slow-cooked with roasted black sesame paste.", image: "images/Dohneiiong.jpg" }
        ]
      },
      {
        id: "mizoram",
        name: "Mizoram",
        tagline: "Land of the Hill People",
        intro: "A peaceful state with rolling hills and modern architectural marvels representing local faith.",
        image: "images/mizoram.jpg", 
        locations: [
          { 
            name: "Solomon's Temple Aizawl", 
            description: "A breathtakingly beautiful massive white marble church/temple that serves as a major spiritual center.", 
            image: "images/solomon's temple.jpg", 
            food: "Bai, Koat Pitha", 
            hotel: "Hotel Regency Aizawl", 
            restaurant: "David's Kitchen" 
          },
          { 
            name: "Phawngpui Blue Mountain", 
            description: "The highest mountain peak in Mizoram, offering panoramic views of lush green valleys.", 
            image: "images/Phawngpui Blue Mountain.png", 
            food: "Vawksa Rep", 
            hotel: "Tourist Lodge Lawngtlai", 
            restaurant: "Blue Mountain Cafe" 
          }
        ],
        items: [
          { name: "Bai", description: "A healthy, popular Mizo stew made with boiled mixed vegetables and bamboo shoots.", image: "images/bai.jpg" },
          { name: "Vawksa Rep", description: "A savory Mizo delicacy of smoked pork prepared with fresh native herbs.", image: "images/vawksa rep.webp" }
        ]
      },
      {
        id: "nagaland",
        name: "Nagaland",
        tagline: "Land of Festivals",
        intro: "Famous for its vibrant tribal culture, historical ruins, and majestic hilly terrain.",
        image: "images/nagaland.webp", 
        locations: [
          { 
            name: "Dimapur Jain Temple & Kachari Ruins", 
            description: "Ancient monoliths and a renowned Jain temple that highlight the historical depth of Dimapur.", 
            image: "images/dimapur jain temple.png", 
            food: "Smoked Pork with Bamboo Shoot", 
            hotel: "Hotel Japfu Kohima", 
            restaurant: "Naga Kitchen" 
          },
          { 
            name: "Kisama Heritage Village", 
            description: "The sprawling, scenic village complex that hosts the internationally renowned Hornbill Festival.", 
            image: "images/kisama village.webp", 
            food: "Axone, Zutho", 
            hotel: "De Oriental Grand", 
            restaurant: "Oking Diner" 
          }
        ],
        items: [
          { name: "Smoked Pork", description: "Pork slow-cooked over a fire, commonly prepared with fermented bamboo shoots.", image: "images/smoked pork.jpg" },
          { name: "Axone", description: "Fermented soybean paste used heavily as a primary flavor base in Naga curries.", image: "images/axone.jpg" }
        ]
      },
      {
        id: "odisha",
        name: "Odisha",
        tagline: "The Soul of Incredible India",
        intro: "A coastal state globally famous for its monumental stone temples and the ancient Rath Yatra.",
        image: "images/odisha.jpg", 
        locations: [
          { 
            name: "Jagannath Temple Puri", 
            description: "A monumental, deeply sacred Hindu temple dedicated to Lord Jagannath, featuring towering architecture.", 
            image: "images/jagannath temple.jpg", 
            food: "Dalma, Pakhala Bhata", 
            hotel: "Mayfair Waves Puri", 
            restaurant: "Dalma Restaurant" 
          },
          { 
            name: "Konark Sun Temple", 
            description: "An architectural marvel and UNESCO World Heritage site built in the form of a gigantic chariot.", 
            image: "images/konark sun temple.jpg", 
            food: "Chhena Poda", 
            hotel: "Lotus Resort Konark", 
            restaurant: "Sun Temple Eatery" 
          }
        ],
        items: [
          { name: "Chhena Poda", description: "A traditional Odia dessert made of baked, caramelized cottage cheese.", image: "images/chhena poda.jpg" },
          { name: "Dalma", description: "A highly nutritious lentil dish cooked slowly with native vegetables and raw papaya.", image: "images/dalma.jpg" }
        ]
      },
      {
        id: "punjab",
        name: "Punjab",
        tagline: "The Heart of Sikhism",
        intro: "Famous for its hearty cuisine, vast agricultural fields, and profoundly peaceful gurdwaras.",
        image: "images/punjab.jpg", 
        locations: [
          { 
            name: "Golden Temple Amritsar (Harmandir Sahib)", 
            description: "The holiest Gurdwara of Sikhism, stunningly coated in gold and surrounded by a sacred pool.", 
            image: "images/golden temple.jpg", 
            food: "Makki di Roti & Sarson da Saag, Lassi", 
            hotel: "Taj Swarna Amritsar", 
            restaurant: "Kesar Da Dhaba" 
          },
          { 
            name: "Jallianwala Bagh", 
            description: "A historically significant garden and memorial of national importance close to the Golden Temple.", 
            image: "images/jalian wala bagh.jpg", 
            food: "Butter Chicken", 
            hotel: "Hyatt Regency Amritsar", 
            restaurant: "Brother's Dhaba" 
          }
        ],
        items: [
          { name: "Butter Chicken", description: "Tender chicken cooked in a rich, creamy, and buttery tomato-based gravy.", image: "images/butter chicken.jpg" },
          { name: "Makki di Roti and Sarson da Saag", description: "Traditional corn flatbread served alongside spiced mustard greens curry.", image: "images/makki di roti sarson da saag.jpg" }
        ]
      },
      {
        id: "rajasthan",
        name: "Rajasthan",
        tagline: "The Land of Kings",
        intro: "A majestic desert state famous for palaces, forts, and beautifully carved marble temples.",
        image: "images/rajasthan.jpg", 
        locations: [
          { 
            name: "Brahma Temple Pushkar", 
            description: "One of the very few existing temples in the world dedicated to the Hindu creator-god Brahma.", 
            image: "images/brahma temple pushkar.jpg", 
            food: "Dal Baati Churma, Ghewar", 
            hotel: "Taj Lake Palace Udaipur", 
            restaurant: "Chokhi Dhani" 
          },
          { 
            name: "Amber Fort Jaipur", 
            description: "An immense, breathtaking hilltop fort featuring elaborate mirror-work and vast courtyards.", 
            image: "images/amber fort.jpg", 
            food: "Laal Maas", 
            hotel: "Rambagh Palace", 
            restaurant: "1135 AD" 
          }
        ],
        items: [
          { name: "Dal Baati Churma", description: "Hard wheat balls baked over fire, served with spiced lentils and sweet crumble.", image: "images/daal bhati churma.jpg" },
          { name: "Laal Maas", description: "A fiery red meat curry prepared intensely with hot Mathania chilies.", image: "images/laal maas.jpg" }
        ]
      },
      {
        id: "sikkim",
        name: "Sikkim",
        tagline: "The Himalayan Paradise",
        intro: "Snow-capped peaks, serene organic farms, and ancient Tibetan Buddhist monasteries.",
        image: "images/sikkim.jpg", 
        locations: [
          { 
            name: "Rumtek Monastery", 
            description: "A gorgeous, vibrantly colored Buddhist monastery and the seat of the Karmapa in exile.", 
            image: "images/rumtek monastry.jpg", 
            food: "Momos, Gundruk", 
            hotel: "Mayfair Spa Resort & Casino Gangtok", 
            restaurant: "Taste of Tibet" 
          },
          { 
            name: "Tsomgo Lake", 
            description: "A highly venerated glacial lake that dramatically changes colors with the shifting seasons.", 
            image: "images/tsomgo lake.jpg", 
            food: "Thukpa, Phagshapa", 
            hotel: "The Elgin Nor-Khill Gangtok", 
            restaurant: "The Square" 
          }
        ],
        items: [
          { name: "Thukpa", description: "A hot and comforting noodle soup filled with fresh vegetables and meat.", image: "images/thukpa.jpg" },
          { name: "Momos", description: "Tibetan-style steamed dumplings deeply integrated into Sikkimese food culture.", image: "images/momo.jpg" }
        ]
      },
      {
        id: "tamil-nadu",
        name: "Tamil Nadu",
        tagline: "The Land of Temples",
        intro: "The pinnacle of Dravidian architecture, boasting incredibly massive and colorful temple gopurams.",
        image: "images/tamil nadu.jpg", 
        locations: [
          { 
            name: "Meenakshi Amman Temple Madurai", 
            description: "A historic Hindu temple covered with thousands of brightly painted figures of gods and demons.", 
            image: "images/meenakshi amman temple.jpg", 
            food: "Chettinad Chicken, Pongal", 
            hotel: "Heritage Madurai", 
            restaurant: "Murugan Idli Shop" 
          },
          { 
            name: "Brihadeeswara Temple Thanjavur", 
            description: "A massive, awe-inspiring Chola dynasty temple that stands as a true marvel of ancient engineering.", 
            image: "images/brihadeeswarar temple.jpg", 
            food: "Masala Dosa & Filter Coffee", 
            hotel: "Svatma Thanjavur", 
            restaurant: "Sri Sangeethas" 
          }
        ],
        items: [
          { name: "Masala Dosa & Filter Coffee", description: "Crispy rice crepe served with strong, frothy South Indian filter coffee.", image: "images/masala dosa.jpg" },
          { name: "Pongal", description: "A peppery and buttery rice and lentil porridge popular for breakfast.", image: "images/pongal.jpg" }
        ]
      },
      {
        id: "telangana",
        name: "Telangana",
        tagline: "Heritage & Modernity",
        intro: "A state blending ancient Kakatiya temple architecture with the royal history of Hyderabad.",
        image: "images/telangana.jpg", 
        locations: [
          { 
            name: "Ramappa Temple Warangal", 
            description: "A UNESCO World Heritage site known for its intricate carvings and 'floating bricks' architecture.", 
            image: "images/ramappa temple.jpg", 
            food: "Haleem, Mirchi Ka Salan", 
            hotel: "Haritha Kakatiya", 
            restaurant: "Kakatiya Dhaba" 
          },
          { 
            name: "Charminar Hyderabad", 
            description: "An iconic 16th-century mosque and monument surrounded by bustling pearl markets.", 
            image: "images/charminar.jpg", 
            food: "Hyderabadi Biryani", 
            hotel: "Taj Falaknuma Palace", 
            restaurant: "Paradise Biryani" 
          }
        ],
        items: [
          { name: "Hyderabadi Biryani", description: "A legendary layered dish of basmati rice, marinated meat, and saffron.", image: "images/hyderabadi biryani.jpg" },
          { name: "Haleem", description: "A rich, slow-cooked meat and lentil stew, very popular during festive seasons.", image: "images/haleem.jpg" }
        ]
      },
      {
        id: "tripura",
        name: "Tripura",
        tagline: "The Hill Kingdom",
        intro: "A state characterized by grand royal palaces and ancient, deeply revered Hindu temples.",
        image: "images/tripura.jpg", 
        locations: [
          { 
            name: "Tripura Sundari Temple", 
            description: "One of the 51 ancient Shakti Peethas, this is a highly sacred temple located in Udaipur.", 
            image: "images/tripura sundari temple.jpg", 
            food: "Mui Borok, Mosdeng Serma", 
            hotel: "Polo Towers Agartala", 
            restaurant: "Abhiruchi Restaurant" 
          },
          { 
            name: "Neermahal Water Palace", 
            description: "A stunning and vast royal palace constructed directly in the middle of Rudrasagar Lake.", 
            image: "images/neermahal water palace.jpg", 
            food: "Chakhwi", 
            hotel: "Hotel Sonar Tori", 
            restaurant: "Neermahal Tourist Lodge" 
          }
        ],
        items: [
          { name: "Mui Borok", description: "A traditional Tripuri delicacy combining rice, meat, and fermented bamboo shoot.", image: "images/mui borok.jpg" },
          { name: "Chakhwi", description: "Chakhwi is a healthy recipe that is a tasty mix of bamboo shoots, jack fruit and pork.", image: "images/chakhwi.jpg" }
        ]
      },
      {
        id: "uttar-pradesh",
        name: "Uttar Pradesh",
        tagline: "The Spiritual Heartland",
        intro: "Home to the sacred Ganges, the Taj Mahal, and the deeply spiritual temples of Varanasi and Ayodhya.",
        image: "images/uttar pradesh.jpg", 
        locations: [
          { 
            name: "Kashi Vishwanath Temple Varanasi", 
            description: "A famous and highly revered Hindu temple dedicated to Lord Shiva, located on the banks of the Ganges.", 
            image: "images/vishwanath temple.jpg", 
            food: "Banarasi Paan, Malaiyyo", 
            hotel: "BrijRama Palace Varanasi", 
            restaurant: "Kashi Chat Bhandar" 
          },
          { 
            name: "Taj Mahal Agra", 
            description: "An incredibly beautiful white marble mausoleum and an iconic Wonder of the World.", 
            image: "images/taj mahal.jpg", 
            food: "Tunday Kababi, Petha", 
            hotel: "The Oberoi Amarvilas", 
            restaurant: "Pinch of Spice" 
          }
        ],
        items: [
          { name: "Tunday Kababi", description: "Exquisitely soft, melt-in-the-mouth minced meat kebabs famous in Lucknow.", image: "images/tunday kababi.webp" },
          { name: "Petha", description: "A translucent, sweet candy made directly from ash gourd, strongly associated with Agra.", image: "images/petha.jpg" }
        ]
      },
      {
        id: "uttarakhand",
        name: "Uttarakhand",
        tagline: "Devbhoomi (Land of the Gods)",
        intro: "A majestic Himalayan state, hosting some of the most sacred and high-altitude pilgrimage sites in Hinduism.",
        image: "images/uttrakhand.jpg", 
        locations: [
          { 
            name: "Kedarnath Temple", 
            description: "An ancient, breathtaking Shiva temple situated at a high altitude amid the snow-clad Himalayas.", 
            image: "images/kedarnath.jpg", 
            food: "Aloo Ke Gutke, Bal Mithai", 
            hotel: "Sarovar Portico Badrinath", 
            restaurant: "Chotiwala Restaurant" 
          },
          { 
            name: "Nanda Devi National Park", 
            description: "A spectacular UNESCO World Heritage Site surrounding the towering Nanda Devi peak.", 
            image: "images/nanda devi.jpg", 
            food: "Kafuli, Phaanu", 
            hotel: "The Nanda Devi Estate", 
            restaurant: "Joshimath Diner" 
          }
        ],
        items: [
          { name: "Aloo Ke Gutke", description: "A simple but deeply flavorful preparation of roasted mountain potatoes and local spices.", image: "images/aloo ke gutke.png" },
          { name: "Kafuli", description: "A thick, nutritious green curry prepared mostly from spinach and fenugreek leaves.", image: "images/kafuli.jpg" }
        ]
      },
      {
        id: "west-bengal",
        name: "West Bengal",
        tagline: "The Cultural Capital",
        intro: "Famous for its grand colonial architecture, literary heritage, and grand terracotta temples.",
        image: "images/west bengal.jpg", 
        locations: [
          { 
            name: "Dakshineswar Kali Temple Kolkata", 
            description: "A gorgeous Navaratna-style Hindu temple situated on the eastern bank of the Hooghly River.", 
            image: "images/dakshineshwar kali temple.jpg", 
            food: "Rosogolla, Mishti Doi", 
            hotel: "The Oberoi Grand Kolkata", 
            restaurant: "Oh! Calcutta" 
          },
          { 
            name: "Victoria Memorial", 
            description: "A massive, elegant white marble monument dedicated entirely to Queen Victoria's memory.", 
            image: "images/victoria memorial.jpg", 
            food: "Kosha Mangsho, Kathi Rolls", 
            hotel: "Taj Bengal", 
            restaurant: "Peter Cat" 
          }
        ],
        items: [
          { name: "Rosogolla", description: "Iconic spongy cottage cheese balls soaked in a light, sweet sugar syrup.", image: "images/rosogolla.jpg" },
          { name: "Kosha Mangsho", description: "Kosha Mangsho is also called Bengali mutton curry and it is one of the most popular Bengali cuisines.", image: "images/kosha mangosha.jpg" }
        ]
      },
      // --- UNION TERRITORIES OF INDIA ---
      {
        id: "andaman-and-nicobar",
        name: "Andaman and Nicobar Islands",
        tagline: "Emerald Isles of the Bay",
        intro: "An archipelago of picturesque tropical islands known for scuba diving, beaches, and vibrant local shrines.",
        image: "images/andaman and nicobar island.jpg", 
        locations: [
          { 
            name: "Sri Vetrimalai Murugan Temple Port Blair", 
            description: "A prominent, vibrantly colored Dravidian-style temple serving as a spiritual center in the islands.", 
            image: "images/Sri Vetrimalai Murugan Temple Port Blair.jpg", 
            food: "Fish Curry", 
            hotel: "Sea Shell Port Blair", 
            restaurant: "Annapurna Cafeteria" 
          },
          { 
            name: "Radhanagar Beach Havelock", 
            description: "Ranked among Asia's best beaches, offering powdery white sands and clear blue waters.", 
            image: "images/radhanagar beach.jpg", 
            food: "Andaman Seafood Platter", 
            hotel: "Taj Exotica Resort & Spa Andaman", 
            restaurant: "Full Moon Cafe" 
          }
        ],
        items: [
          { name: "Andaman Seafood Platter", description: "Freshly caught prawns, crabs, and fish prepared in local spices.", image: "images/andaman seafood platter.jpg" },
          { name: "Fish Curry", description: "A simple, yet deeply flavorful island-style fish curry cooked with coconut.", image: "images/fish curry.jpg" }
        ]
      },
      {
        id: "chandigarh",
        name: "Chandigarh",
        tagline: "The City Beautiful",
        intro: "India's first planned city, featuring modern architecture, serene gardens, and modern spiritual centers.",
        image: "images/chandigarh UT.jpg", 
        locations: [
          { 
            name: "ISKCON Temple Chandigarh", 
            description: "A beautiful, deeply peaceful spiritual complex dedicated to Lord Krishna.", 
            image: "images/iskon temple.jpg", 
            food: "Amritsari Kulcha, Rajma Chawal", 
            hotel: "JW Marriott Hotel Chandigarh", 
            restaurant: "Ghazal Restaurant" 
          },
          { 
            name: "Rock Garden", 
            description: "A colossal and creative outdoor sculpture garden crafted entirely from industrial waste.", 
            image: "images/rock garden.jpg", 
            food: "Chole Bhature", 
            hotel: "Taj Chandigarh", 
            restaurant: "Pal Dhaba" 
          }
        ],
        items: [
          { name: "Amritsari Kulcha", description: "Stuffed, crisply baked flatbread served with spicy chole and butter.", image: "images/amritsari kulcha.jpg" },
          { name: "Chole Bhature", description: "A staple North Indian dish of spicy chickpeas and puffy fried bread.", image: "images/chhole bhature.jpg" }
        ]
      },
      {
        id: "dadra-and-nagar-haveli-and-daman-and-diu",
        name: "Dadra and Nagar Haveli and Daman and Diu",
        tagline: "Coastal Tranquility & Heritage",
        intro: "A coastal union territory featuring Portuguese colonial forts, serene beaches, and historic waterfront temples.",
        image: "images/Dadra and Nagar Haveli and Daman and Diu.jpg", 
        locations: [
          { 
            name: "Somnath Mahadev Temple Daman", 
            description: "A highly revered ancient Shiva temple renowned for its detailed glasswork and peaceful ambiance.", 
            image: "images/somnath mahadev temple.jpg", 
            food: "Prawns Rice", 
            hotel: "The Deltin Hotel Daman", 
            restaurant: "Mirasol Restaurant" 
          },
          { 
            name: "Diu Fort", 
            description: "An incredibly resilient 16th-century Portuguese fort guarding the Arabian Sea coast.", 
            image: "images/diu fort.jpg", 
            food: "Chicken Bullet, Seafood Guacamole", 
            hotel: "Kostamar Beach Resort", 
            restaurant: "O'Coqueiro Restaurant" 
          }
        ],
        items: [
          { name: "Chicken Bullet", description: "Spiced and deep-fried coastal chicken specialty.", image: "https://images.unsplash.com/photo-1571115764595-6440cb9f8c72?w=400&q=80" },
          { name: "Prawns Rice", description: "A comforting blend of local rice and fresh, spiced coastal prawns.", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80" }
        ]
      },
      {
        id: "delhi",
        name: "Delhi",
        tagline: "The Heart of a Nation",
        intro: "The capital territory blending ancient monuments, bustling bazaars, and world-renowned monumental temples.",
        image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=800&q=80", 
        locations: [
          { 
            name: "Akshardham Temple Delhi", 
            description: "A monumental and breathtakingly intricate spiritual and cultural campus celebrating millennia of Hindu traditions.", 
            image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=400&q=80", 
            food: "Chole Bhature", 
            hotel: "The Imperial New Delhi", 
            restaurant: "Karim's Jama Masjid" 
          },
          { 
            name: "Red Fort", 
            description: "An immense, historic 17th-century Mughal fortress constructed completely out of red sandstone.", 
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80", 
            food: "Delhi Butter Chicken", 
            hotel: "Maidens Hotel", 
            restaurant: "Bukhara ITC Maurya" 
          }
        ],
        items: [
          { name: "Delhi Butter Chicken", description: "Rich, creamy, buttery tomato-based chicken curry.", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80" },
          { name: "Chole Bhature", description: "Delhi's most beloved street food featuring spicy chickpeas and fluffy bread.", image: "https://images.unsplash.com/photo-1556089780-5e3e4b6f9e9a?w=400&q=80" }
        ]
      },
      {
        id: "jammu-and-kashmir",
        name: "Jammu and Kashmir",
        tagline: "Paradise on Earth",
        intro: "Snow-capped mountain ranges, pristine lakes, and some of the most dramatic and historic shrines in the world.",
        image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=800&q=80", 
        locations: [
          { 
            name: "Shankaracharya Temple Srinagar", 
            description: "An ancient Shiva temple majestically situated on the crest of a high hill overlooking Dal Lake.", 
            image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=400&q=80", 
            food: "Rogan Josh, Kahwa Tea", 
            hotel: "Lalit Grand Palace Srinagar", 
            restaurant: "Ahdoos Restaurant" 
          },
          { 
            name: "Dal Lake Srinagar", 
            description: "Dal Lake takes center stage, famous for its houseboats and Shikara rides.", 
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80", 
            food: "Wazwan, Nadru Yakhni", 
            hotel: "Vivanta Dal View", 
            restaurant: "Mughal Darbar" 
          }
        ],
        items: [
          { name: "Rogan Josh", description: "Aromatic, tender lamb curry cooked slowly with traditional Kashmiri spices.", image: "https://images.unsplash.com/photo-1571115764595-6440cb9f8c72?w=400&q=80" },
          { name: "Wazwan", description: "A multi-course elaborate meal central to Kashmiri culture and hospitality.", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80" }
        ]
      },
      {
        id: "ladakh",
        name: "Ladakh",
        tagline: "The Land of High Passes",
        intro: "High-altitude desert landscape, dramatic mountains, and ancient, cliff-side Tibetan Buddhist monasteries.",
        image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=800&q=80", 
        locations: [
          { 
            name: "Thiksey Monastery", 
            description: "A spectacular, multi-tiered Tibetan Buddhist monastery known for its striking resemblance to the Potala Palace.", 
            image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=400&q=80", 
            food: "Skyu, Butter Tea", 
            hotel: "The Grand Dragon Ladakh", 
            restaurant: "Gesmo Restaurant" 
          },
          { 
            name: "Pangong Tso Lake", 
            description: "A breathtaking high-altitude endorheic lake that dramatically shifts its shades of blue.", 
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80", 
            food: "Thukpa & Momos", 
            hotel: "Pangong Hermitage", 
            restaurant: "Himalayan Cafe" 
          }
        ],
        items: [
          { name: "Thukpa & Momos", description: "Traditional hearty noodle broth and steamed dumplings.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80" },
          { name: "Skyu", description: "A traditional daily soup dish made of wheat dough kneaded into thumb-sized shapes.", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80" }
        ]
      },
      {
        id: "lakshadweep",
        name: "Lakshadweep",
        tagline: "A Coral Paradise",
        intro: "India's smallest union territory, an archipelago of breathtaking coral reefs and ancient, beautiful island mosques.",
        image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=800&q=80", 
        locations: [
          { 
            name: "Mohiyudeen Mosque (Agatti)", 
            description: "One of the oldest and most beautiful religious shrines in the islands, showcasing unique wooden architecture.", 
            image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=400&q=80", 
            food: "Tuna Fry", 
            hotel: "Agatti Island Beach Resort", 
            restaurant: "Agatti Cafe" 
          },
          { 
            name: "Bangaram Atoll", 
            description: "An incredibly tranquil and picturesque coral atoll surrounded by vivid turquoise waters.", 
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80", 
            food: "Mus Katta, Coconut Rice", 
            hotel: "Bangaram Island Resort", 
            restaurant: "Atoll Beach Dinning" 
          }
        ],
        items: [
          { name: "Mus Katta", description: "Traditional spicy tuna delicacy cooked with coconut and local spices.", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80" },
          { name: "Tuna Fry", description: "Locally caught fresh tuna, marinated and fried to perfection.", image: "https://images.unsplash.com/photo-1571115764595-6440cb9f8c72?w=400&q=80" }
        ]
      },
      {
        id: "puducherry",
        name: "Puducherry",
        tagline: "The French Riviera of the East",
        intro: "Charming coastal territory known for its French colonial vibes and iconic, colorful Hindu temples.",
        image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=800&q=80", 
        locations: [
          { 
            name: "Manakula Vinayagar Temple", 
            description: "A highly celebrated and historic Ganesha temple, famous for its golden chariot and intricate murals.", 
            image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=400&q=80", 
            food: "Sambar, Seafood Curry", 
            hotel: "Palais de Mahe", 
            restaurant: "Surguru" 
          },
          { 
            name: "Promenade Beach", 
            description: "A widely loved and lively beachfront boulevard stretching alongside the Bay of Bengal.", 
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80", 
            food: "Pondicherry Croissant, French Baguettes", 
            hotel: "The Promenade", 
            restaurant: "Café des Arts" 
          }
        ],
        items: [
          { name: "Pondicherry Croissant", description: "French pastries blended seamlessly with South Indian coffee traditions.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80" },
          { name: "French Baguettes", description: "Crusty artisan bread reflecting the city's rich French colonial heritage.", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&q=80" }
        ]
      }
    ]
  },
  {
    id: "france",
    name: "France",
    tagline: "Art, Romance & Gastronomy",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80", // Eiffel Tower
    intro: "France is celebrated worldwide for its medieval cities, romantic boulevards, and exquisite culinary arts.",
    states: [
      {
        id: "paris-region",
        name: "Île-de-France (Paris)",
        tagline: "The City of Light",
        intro: "The cultural hub featuring iconic world landmarks, fashion, and historic architecture.",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80",
        locations: [
          { 
            name: "Eiffel Tower", 
            description: "Wrought-iron lattice tower on the Champ de Mars, a global icon of France.", 
            image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&q=80", 
            food: "Croissants, Boeuf Bourguignon", 
            hotel: "Pullman Paris Tour Eiffel", 
            restaurant: "Le Jules Verne" 
          },
          { 
            name: "Louvre Museum", 
            description: "The world's most famous and largest art museum, home to the Mona Lisa.", 
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80", 
            food: "Macarons, French Onion Soup", 
            hotel: "Hotel Brighton", 
            restaurant: "Café Marly" 
          }
        ],
        items: [
          { name: "Croissant", description: "Buttery, flaky viennoiserie pastry essential to French breakfast.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80" },
          { name: "Macarons", description: "A sweet, colorful meringue-based confection filled with buttercream.", image: "https://images.unsplash.com/photo-1556089780-5e3e4b6f9e9a?w=400&q=80" }
        ]
      }
    ]
  },
  {
    id: "japan",
    name: "Japan",
    tagline: "Where Tradition Meets Tomorrow",
    image: "https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=800&q=80", // Senso-ji Temple
    intro: "A dazzling metropolis of neon skylines, ancient shrines, and unmatched culinary excellence.",
    states: [
      {
        id: "tokyo-region",
        name: "Tokyo Metropolis",
        tagline: "Electric City",
        intro: "The ultra-modern capital filled with bustling crossings, temples, and pop culture.",
        image: "https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=800&q=80", 
        locations: [
          { 
            name: "Senso-ji Temple", 
            description: "Tokyo's oldest and most famous ancient Buddhist temple in Asakusa.", 
            image: "https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=400&q=80", 
            food: "Sushi, Tempura", 
            hotel: "Asakusa View Hotel", 
            restaurant: "Daikokuya Tempura" 
          },
          { 
            name: "Shibuya Crossing", 
            description: "The world's busiest pedestrian scramble intersection.", 
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80", 
            food: "Ramen, Takoyaki", 
            hotel: "Cerulean Tower Tokyu Hotel", 
            restaurant: "Ichiran Ramen" 
          }
        ],
        items: [
          { name: "Sushi", description: "Fresh expertly crafted raw fish over seasoned rice.", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80" },
          { name: "Ramen", description: "Rich, deeply flavored noodle soup originating from Japanese culinary tradition.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80" }
        ]
      }
    ]
  },
  {
    id: "usa",
    name: "United States",
    tagline: "Land of Opportunity & Diverse Landscapes",
    image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=800&q=80", // Statue of Liberty
    intro: "Famous for dynamic cities, stunning national parks, and cultural melting pots.",
    states: [
      {
        id: "new-york-state",
        name: "New York City",
        tagline: "The City That Never Sleeps",
        intro: "Pulses with energy, Broadway lights, skyscrapers, and iconic parks.",
        image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=800&q=80",
        locations: [
          { 
            name: "Statue of Liberty", 
            description: "A colossal neoclassical copper sculpture gifted by France, standing on Liberty Island.", 
            image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=400&q=80", 
            food: "NY-Style Pizza, Cheesecake", 
            hotel: "The Plaza Hotel", 
            restaurant: "Lombardi's Pizza" 
          },
          { 
            name: "Central Park", 
            description: "An immense, iconic 843-acre urban oasis right in the center of Manhattan.", 
            image: "https://images.unsplash.com/photo-1599661044067-8f5e8e5f1c7a?w=400&q=80", 
            food: "Bagels, Hot Dogs", 
            hotel: "The Ritz-Carlton", 
            restaurant: "Tavern on the Green" 
          }
        ],
        items: [
          { name: "New York Pizza", description: "Large foldable thin-crust pizza slices famous worldwide.", image: "https://images.unsplash.com/photo-1556089780-5e3e4b6f9e9a?w=400&q=80" },
          { name: "Cheeseburger", description: "An iconic American classic sandwich consisting of a beef patty topped with cheese.", image: "https://images.unsplash.com/photo-1571115764595-6440cb9f8c72?w=400&q=80" }
        ]
      }
    ]
  },
  {
    id: "italy",
    name: "Italy",
    tagline: "La Dolce Vita",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80", // Colosseum
    intro: "An open-air museum where ancient ruins, Baroque fountains, and world-class cuisine thrive.",
    states: [
      {
        id: "rome-region",
        name: "Rome & Lazio",
        tagline: "The Eternal City",
        intro: "Millennia of global history, architecture, and romantic piazzas.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
        locations: [
          { 
            name: "Colosseum", 
            description: "The largest and most famous ancient imperial gladiator amphitheater ever built.", 
            image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80", 
            food: "Carbonara, Supplì", 
            hotel: "Hotel Artemide", 
            restaurant: "Trattoria Vecchia Roma" 
          },
          { 
            name: "Trevi Fountain", 
            description: "The largest Baroque fountain in the city and one of the most famous fountains in the world.", 
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80", 
            food: "Gelato, Neapolitan Pizza", 
            hotel: "Palazzo Manfredi", 
            restaurant: "Piccolo Buco" 
          }
        ],
        items: [
          { name: "Gelato", description: "Rich, dense, artisan Italian ice cream beloved around the world.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80" },
          { name: "Neapolitan Pizza", description: "A simple, highly authentic Italian pizza made with fresh tomatoes and mozzarella.", image: "https://images.unsplash.com/photo-1556089780-5e3e4b6f9e9a?w=400&q=80" }
        ]
      }
    ]
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    tagline: "Luxury in the Desert",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", // Burj Khalifa
    intro: "Futuristic skyscrapers meeting traditional Arabian desert hospitality.",
    states: [
      {
        id: "dubai-emirate",
        name: "Dubai",
        tagline: "City of Gold & Future",
        intro: "Home to the world's tallest buildings, luxury shopping, and golden beaches.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
        locations: [
          { 
            name: "Burj Khalifa", 
            description: "The world's tallest building standing at 828 meters, offering incredible views.", 
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80", 
            food: "Shawarma, Arabic Dates", 
            hotel: "Armani Hotel Dubai", 
            restaurant: "At.mosphere" 
          },
          { 
            name: "Palm Jumeirah", 
            description: "An extraordinary man-made archipelago extending into the Persian Gulf.", 
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80", 
            food: "Al Harees, Machboos", 
            hotel: "Atlantis The Palm", 
            restaurant: "Nobu Dubai" 
          }
        ],
        items: [
          { name: "Shawarma", description: "Marinated meat wrapped in flatbread with garlic sauce.", image: "https://images.unsplash.com/photo-1556089780-5e3e4b6f9e9a?w=400&q=80" },
          { name: "Al Harees", description: "A highly traditional Arabic dish of meat and wheat slowly cooked together.", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80" }
        ]
      }
    ]
  },
  {
    id: "uk",
    name: "United Kingdom",
    tagline: "History on Every Corner",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80", // Big Ben
    intro: "Royal tradition, iconic landmarks, and world-class museums.",
    states: [
      {
        id: "london-region",
        name: "London",
        tagline: "The Capital on the Thames",
        intro: "A vibrant global metropolis blending rich history with modern culture.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
        locations: [
          { 
            name: "Big Ben & Houses of Parliament", 
            description: "The iconic Gothic clock tower and government buildings situated beside the River Thames.", 
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80", 
            food: "Fish & Chips, Sunday Roast", 
            hotel: "The Savoy London", 
            restaurant: "The Red Lion" 
          },
          { 
            name: "Stonehenge", 
            description: "A deeply fascinating and prehistoric stone circle monument in Wiltshire.", 
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80", 
            food: "Beef Wellington, Yorkshire Pudding", 
            hotel: "The Bath Arms", 
            restaurant: "Stonehenge Inn" 
          }
        ],
        items: [
          { name: "Fish & Chips", description: "Crispy, beer-battered cod served with freshly cut hot chips.", image: "https://images.unsplash.com/photo-1556089780-5e3e4b6f9e9a?w=400&q=80" },
          { name: "Sunday Roast", description: "A hearty British meal featuring roasted meat, potatoes, and Yorkshire pudding.", image: "https://images.unsplash.com/photo-1571115764595-6440cb9f8c72?w=400&q=80" }
        ]
      }
    ]
  },
  {
    id: "indonesia",
    name: "Indonesia",
    tagline: "Island of the Gods",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Monas_at_night_from_Merdeka_Square.jpg", // Monas
    intro: "Tropical paradise featuring terraced rice paddies, volcanoes, and rich spirituality.",
    states: [
      {
        id: "jakarta-region",
        name: "Jakarta",
        tagline: "The Big Durian",
        intro: "A massive, bustling metropolis and the historic cultural heart of Indonesia.",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Monas_at_night_from_Merdeka_Square.jpg", 
        locations: [
          { 
            name: "National Monument (Monas)", 
            description: "An iconic 132m tower in the center of Merdeka Square symbolizing Indonesian independence.", 
            image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Monas_at_night_from_Merdeka_Square.jpg", 
            food: "Nasi Goreng, Gado-Gado", 
            hotel: "Hotel Indonesia Kempinski", 
            restaurant: "Bandar Djakarta" 
          },
          { 
            name: "Borobudur Temple", 
            description: "The world's largest Buddhist temple, an incredibly majestic 9th-century marvel.", 
            image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=400&q=80", 
            food: "Satay, Beef Rendang", 
            hotel: "Amanjiwo Resort", 
            restaurant: "Stupa Restaurant" 
          }
        ],
        items: [
          { name: "Nasi Goreng", description: "Indonesian signature fried rice topped heavily with egg and prawn crackers.", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80" },
          { name: "Satay", description: "Expertly grilled meat skewers served with an addictive peanut sauce.", image: "https://images.unsplash.com/photo-1571115764595-6440cb9f8c72?w=400&q=80" }
        ]
      }
    ]
  },
  {
    id: "australia",
    name: "Australia",
    tagline: "Harbour City & Outback Wonders",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80", // Sydney Opera House
    intro: "Stunning coastal cities, unique wildlife, and an outdoor lifestyle.",
    states: [
      {
        id: "new-south-wales",
        name: "Sydney",
        tagline: "Harbour Brilliance",
        intro: "Famous for its sail-shaped Opera House and beautiful surf beaches.",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
        locations: [
          { 
            name: "Sydney Opera House", 
            description: "A UNESCO-listed performing arts center famous for its iconic sail-like roof.", 
            image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=80", 
            food: "Aussie Meat Pie, Lamingtons", 
            hotel: "Park Hyatt Sydney", 
            restaurant: "Quay Restaurant" 
          },
          { 
            name: "Great Barrier Reef", 
            description: "The world's largest and most magnificent coral reef system located off the coast.", 
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80", 
            food: "Barramundi Fish, Vegemite Toast", 
            hotel: "Qualia Resort", 
            restaurant: "Ochre Restaurant" 
          }
        ],
        items: [
          { name: "Aussie Meat Pie", description: "Flaky, savory pastry pie filled completely with hot minced meat and thick gravy.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80" },
          { name: "Vegemite on Toast", description: "A profoundly popular Australian savory yeast spread enjoyed primarily on toast.", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&q=80" }
        ]
      }
    ]
  },
  {
    id: "brazil",
    name: "Brazil",
    tagline: "Vibrant Culture & Natural Wonders",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80", 
    intro: "A vast South American country known for its vibrant festivals, lush rainforests, and stunning beaches.",
    states: [
      {
        id: "rio-de-janeiro",
        name: "Rio de Janeiro",
        tagline: "The Marvelous City",
        intro: "Famous for its breathtaking landscapes, laid-back beach culture, and annual Carnival festival.",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80", 
        locations: [
          { name: "Christ the Redeemer", description: "Colossal Art Deco statue of Jesus Christ situated at the peak of Corcovado mountain.", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80", food: "Feijoada", hotel: "Belmond Copacabana Palace", restaurant: "Confeitaria Colombo" },
          { name: "Copacabana Beach", description: "One of the most famous and vibrant beaches in the world, featuring a bustling promenade.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80", food: "Caipirinha, Coxinha", hotel: "Fairmont Rio de Janeiro", restaurant: "Garota de Ipanema" }
        ],
        items: [
          { name: "Feijoada", description: "A hearty, slow-cooked stew of black beans with various cuts of pork and beef.", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80" },
          { name: "Pão de Queijo", description: "Delicious, chewy, and naturally gluten-free Brazilian cheese bread rolls.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80" }
        ]
      }
    ]
  },
  {
    id: "egypt",
    name: "Egypt",
    tagline: "The Cradle of Civilization",
    image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=800&q=80", 
    intro: "A country linking northeast Africa with the Middle East, dating to the time of the pharaohs.",
    states: [
      {
        id: "cairo-governorate",
        name: "Cairo",
        tagline: "The City of a Thousand Minarets",
        intro: "Egypt's sprawling capital, set on the Nile River, blending historic marvels with modern energy.",
        image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=800&q=80",
        locations: [
          { name: "Giza Necropolis", description: "The iconic ancient pyramids of Giza and the Great Sphinx.", image: "https://images.unsplash.com/photo-1623937084677-92d1e4fa8c1f?w=400&q=80", food: "Koshari", hotel: "Marriott Mena House", restaurant: "139 Pavilion" },
          { name: "Egyptian Museum", description: "Home to an extensive collection of ancient Egyptian antiquities, including King Tut's treasures.", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80", food: "Ful Medames", hotel: "The Ritz-Carlton Cairo", restaurant: "Abou El Sid" }
        ],
        items: [
          { name: "Koshari", description: "Egypt's national dish mixing lentils, macaroni, rice, and chickpeas topped with a spicy tomato sauce.", image: "https://images.unsplash.com/photo-1556089780-5e3e4b6f9e9a?w=400&q=80" },
          { name: "Ful Medames", description: "A savory stew of fava beans cooked slowly with olive oil, cumin, and lemon juice.", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80" }
        ]
      }
    ]
  },
  {
    id: "china",
    name: "China",
    tagline: "Ancient History & Modern Marvels",
    image: "https://images.unsplash.com/photo-1599661044067-8f5e8e5f1c7a?w=800&q=80", 
    intro: "A vast nation with a deeply rich history, incredibly diverse landscapes, and one of the world's oldest cultures.",
    states: [
      {
        id: "beijing-municipality",
        name: "Beijing",
        tagline: "The Northern Capital",
        intro: "The historical and cultural heart of China, featuring grand palaces, temples, and immense stone walls.",
        image: "https://images.unsplash.com/photo-1599661044067-8f5e8e5f1c7a?w=800&q=80",
        locations: [
          { name: "Great Wall of China (Mutianyu)", description: "A remarkably preserved section of the historic and colossal ancient fortification.", image: "https://images.unsplash.com/photo-1599661044067-8f5e8e5f1c7a?w=400&q=80", food: "Peking Duck", hotel: "The Peninsula Beijing", restaurant: "Quanjude" },
          { name: "Forbidden City", description: "A massive palace complex that served as the home of emperors for nearly 500 years.", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80", food: "Jiaozi (Dumplings)", hotel: "Waldorf Astoria Beijing", restaurant: "TRB Hutong" }
        ],
        items: [
          { name: "Peking Duck", description: "A famous duck dish prized for its thin, crisp skin and tender meat.", image: "https://images.unsplash.com/photo-1571115764595-6440cb9f8c72?w=400&q=80" },
          { name: "Dim Sum (Jiaozi)", description: "Bite-sized portions of food served in small steamer baskets or on small plates.", image: "https://images.unsplash.com/photo-1556089780-5e3e4b6f9e9a?w=400&q=80" }
        ]
      }
    ]
  },
  {
    id: "south-africa",
    name: "South Africa",
    tagline: "The Rainbow Nation",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", 
    intro: "A beautiful nation known for its incredibly diverse ecosystems, wildlife safaris, and vibrant cultural history.",
    states: [
      {
        id: "western-cape",
        name: "Western Cape",
        tagline: "Where Oceans Meet",
        intro: "A spectacularly scenic province featuring dramatic coastlines, towering mountains, and lush vineyards.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        locations: [
          { name: "Table Mountain", description: "A prominent flat-topped mountain forming a prominent landmark overlooking the city of Cape Town.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80", food: "Bobotie", hotel: "Belmond Mount Nelson", restaurant: "The Test Kitchen" },
          { name: "Cape of Good Hope", description: "A rocky headland on the Atlantic coast offering dramatic scenery and rich biodiversity.", image: "https://images.unsplash.com/photo-1599661044067-8f5e8e5f1c7a?w=400&q=80", food: "Biltong", hotel: "The Silo Hotel", restaurant: "Two Oceans Restaurant" }
        ],
        items: [
          { name: "Bobotie", description: "A classic South African dish consisting of spiced minced meat baked with an egg-based topping.", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80" },
          { name: "Biltong", description: "A widely popular form of dried, cured meat originating in Southern African countries.", image: "https://images.unsplash.com/photo-1571115764595-6440cb9f8c72?w=400&q=80" }
        ]
      }
    ]
  }
];