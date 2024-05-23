const recommendations = [
    {
        "title": "Amsterdam, The Netherlands",
        "region": "Europe",
        "description": "A picturesque city known for its iconic canals, historic architecture, and vibrant cultural scene. Amsterdam offers a wealth of museums, including the Van Gogh Museum and the Rijksmuseum, showcasing Dutch masterpieces. The city is renowned for its cycling culture, making it easy to explore its charming streets and neighborhoods. Visitors can also enjoy a lively bars, cafes, and nightclubs.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$",
        "imageUrl": "https://cdn.britannica.com/30/180130-138-4FC01CDD/Overview-Amsterdam.jpg?w=800&h=450&c=crop"
    },
    {
        "title": "Auckland, New Zealand",
        "region": "Oceania",
        "description": "Known as the \"City of Sails,\" Auckland is surrounded by stunning natural beauty, including harbors, islands, and volcanic landscapes. The city offers a mix of outdoor adventures, from hiking and sailing to exploring nearby beaches and parks. Auckland is also a cultural hub, with a rich Maori heritage and a diverse arts scene, featuring galleries, museums, and theaters.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$$",
        "imageUrl": "https://afar.brightspotcdn.com/dims4/default/5a37c04/2147483647/strip/true/crop/3000x1592+0+342/resize/1440x764!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F07%2F6a%2F49c8995449aab970530b5dc69fb4%2Ftravelguides-auckland-miloszmaslanka-shutterstock.jpg"
    },
    {
        "title": "Bali, Indonesia",
        "region": "Asia",
        "description": "A tropical paradise that attracts visitors with its serene beaches, lush rice terraces, and vibrant cultural experiences. Bali is famous for its temples, traditional dance performances, and wellness retreats. The island offers a range of activities, from surfing and diving to exploring local markets and savoring Balinese cuisine.",
        "travelType": ["Beach, Nature, Culture, Nightlife, Adventure"],
        "pricePoint": "$",
        "imageUrl": "https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg&width=960"
    },
    {
        "title": "Bangkok, Thailand",
        "region": "Asia",
        "description": "The bustling capital of Thailand, Bangkok is a city of contrasts, where modern skyscrapers stand alongside ornate temples. Visitors can explore vibrant markets, such as Chatuchak Weekend Market, and enjoy delicious street food. Bangkok's cultural landmarks include the Grand Palace, Wat Arun, and Wat Pho, home to the reclining Buddha statue.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$",
        "imageUrl": "https://www.travelseewrite.com/wp-content/uploads/2022/09/Rattanakosin-is-the-royal-area-of-Bangkok.jpeg"
    },
    {
        "title": "Barcelona, Spain",
        "region": "Europe",
        "description": "A cosmopolitan city known for its stunning architecture, including the works of Antoni Gaudí, such as the Sagrada Família and Park Güell. Barcelona boasts a lively street scene, with bustling markets like La Boqueria and vibrant neighborhoods like the Gothic Quarter. The city's rich cultural heritage is complemented by its beautiful beaches and dynamic nightlife.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$",
        "imageUrl": "https://images.ctfassets.net/zmjc9gr9hbbf/wyeZtor2wM0xw9xT6l7Jv/b6b757fd621182ac74324efd99d98d51/CAT35510_Colourful_walls_and_buildings_in_park_Guell__Barcelona._Shutterstock.jpg?w=1980"
    },
    {
        "title": "Batam, Indonesia",
        "region": "Asia",
        "description": "An Indonesian island close to Singapore, Batam is known for its resorts, golf courses, and duty-free shopping. Visitors can relax on its beaches, indulge in spa treatments, or enjoy water sports. Batam also offers a glimpse into local culture with its seafood restaurants, affordable spas and massages, and traditional markets.",
        "travelType": ["Beach, Nature, Shopping"],
        "pricePoint": "$",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vue_de_batam2.jpg/1200px-Vue_de_batam2.jpg"
    },
    {
        "title": "Beijing, China",
        "region": "Asia",
        "description": "The ancient capital of China, Beijing is home to iconic landmarks such as the Great Wall, the Forbidden City, and the Temple of Heaven. The city offers a blend of historical and modern attractions, including bustling markets, traditional hutongs, and contemporary shopping districts. Beijing's culinary scene is renowned, with Peking duck being a must-try dish.",
        "travelType": ["Culture, Adventure"],
        "pricePoint": "$$",
        "imageUrl": "https://i.natgeofe.com/n/2024d353-131c-4c29-a04f-5589c541e980/beijing_travel.jpg"
    },
    {
        "title": "Bintan, Indonesia",
        "region": "Asia",
        "description": "A relaxing getaway known for its beautiful beaches, luxury resorts, and golf courses. Bintan offers a peaceful retreat with opportunities for water sports (e.g. Treasure Bay), spa treatments, and exploring nature reserves. The island is also home to cultural sites such as Penyengat Island and local markets.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$",
        "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/516644183.jpg?k=5d7fe2ab85628c6fc6a1f692d42d08346d096ea4348c29cd910789146453284e&o=&hp=1"
    },
    {
        "title": "Busan, Korea",
        "region": "Asia",
        "description": "A coastal city famous for its beaches, seafood, and vibrant cultural scene. Busan's attractions include Haeundae Beach, Jagalchi Fish Market, and the colorful Gamcheon Culture Village. The city hosts several festivals throughout the year, such as the Busan International Film Festival and Jinhae Cherry Blossom Festival.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$$",
        "imageUrl": "https://www.tripsavvy.com/thmb/ZXU7C0Mjya5smqb4D3qFAyNSX5o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gamcheon-culture-village--busan--south-korea-1149825040-2bc1e16a08c14ee9add5aae5f0e8e9b9.jpg"
    },
    {
        "title": "Cebu, Philippines",
        "region": "Asia",
        "description": "Known as the \"Queen City of the South,\" Cebu offers a mix of historic landmarks, beautiful beaches, and a vibrant nightlife. Visitors can explore the Magellan's Cross, Basilica del Santo Niño, and dive into the crystal-clear waters of Moalboal. Cebu's lively festivals, such as Sinulog, showcase the city's rich cultural heritage.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$",
        "imageUrl": "https://mediaim.expedia.com/destination/1/9c7cca303cc0a57dd5f86dfeebb973f9.jpg"
    },
    {
        "title": "Edinburgh, Scotland",
        "region": "Europe",
        "description": "A historic city with medieval architecture, Edinburgh is surrounded by hills and coastline, offering a blend of cultural experiences and outdoor adventures. The city's attractions include the Edinburgh Castle, the Royal Mile, and Arthur's Seat. Edinburgh is also known for its festivals, including the Edinburgh International Festival and the Fringe.",
        "travelType": ["Culture, Nature"],
        "pricePoint": "$$",
        "imageUrl": "https://a.cdn-hotels.com/gdcs/production73/d1723/35b8f7e3-14c4-4d53-ae2f-5f7f6adb6aac.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    },
    {
        "title": "Hanoi, Vietnam",
        "region": "Asia",
        "description": "The capital of Vietnam, Hanoi is known for its centuries-old architecture, vibrant street life, and delicious cuisine. The city's historic Old Quarter offers bustling markets, ancient temples, and French colonial buildings. Hanoi's culinary scene includes must-try dishes like pho, ban minh and bun cha.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$",
        "imageUrl": "https://content.r9cdn.net/rimg/dimg/9f/f9/b80f2b97-city-34211-1648f9bdee7.jpg?width=1366&height=768&xhint=1744&yhint=910&crop=true"
    },
    {
        "title": "Hawaii, USA",
        "region": "America",
        "description": "A tropical paradise offering stunning beaches, lush landscapes, and opportunities for outdoor adventures. Hawaii's islands are known for their unique attractions, such as the volcanic landscapes of the Big Island, the surf culture of Oahu, and the scenic beauty of Maui. Visitors can enjoy activities like hiking, snorkeling, and exploring local culture.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$$",
        "imageUrl": "https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2021/12/1140-oahu-hero.jpg"
    },
    {
        "title": "Ho Chi Minh City, Vietnam",
        "region": "Asia",
        "description": "Formerly known as Saigon, this bustling metropolis offers a mix of historic landmarks, vibrant markets, and delicious street food. Key attractions include the War Remnants Museum, Notre-Dame Cathedral Basilica, and Ben Thanh Market. The city's dynamic street life and culinary delights make it a vibrant destination.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$",
        "imageUrl": "https://ychef.files.bbci.co.uk/1280x720/p04x5hlq.jpg"
    },
    {
        "title": "Hoi An, Vietnam",
        "region": "Asia",
        "description": "A historic town known for its well-preserved architecture, vibrant markets, and nearby beaches. Hoi An's charming streets are lined with lanterns, and its Old Town is a UNESCO World Heritage Site. Visitors can enjoy cooking classes, tailor-made clothing, and relaxing at nearby beaches like Da Nang and An Bang.",
        "travelType": ["Culture, Adventure"],
        "pricePoint": "$",
        "imageUrl": "https://vietnam.travel/sites/default/files/inline-images/292-Qu%E1%BA%A3ng%20Nam-tmluong50%40gmail.com-thuyen%20hoa.jpg"
    },
    {
        "title": "Hong Kong, China",
        "region": "Asia",
        "description": "A dynamic city where East meets West, renowned for its skyline, shopping, and culinary scene. Hong Kong offers a mix of modern attractions, such as Victoria Peak and Disneyland, alongside traditional markets and temples. The city's diverse cuisine ranges from dim sum to international gourmet dishes.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$",
        "imageUrl": "https://www.discoverhongkong.com/ca/explore/attractions/hong-kong-night-view.thumb.800.480.png?ck=1702972619"
    },
    {
        "title": "Ipoh, Malaysia",
        "region": "Asia",
        "description": "A charming city surrounded by limestone hills, known for its street food and colonial architecture. Ipoh's attractions include the Kek Lok Tong Cave Temple, the Ipoh Railway Station, and its vibrant food scene, with famous dishes like Ipoh white coffee and chicken rice.",
        "travelType": ["Nature, Culture, Adventure"],
        "pricePoint": "$",
        "imageUrl": "https://www.pelago.co/img/destinations/ipoh/1103-0722_ipoh.jpg"
    },
    {
        "title": "Istanbul, Turkey",
        "region": "Europe",
        "description": "A city where East meets West, offering a rich blend of historic sites, bustling markets, and delicious cuisine. Istanbul's landmarks include the Hagia Sophia, Blue Mosque, and Grand Bazaar. The city's culinary delights range from traditional Turkish kebabs to sweet baklava.",
        "travelType": ["Culture, Adventure"],
        "pricePoint": "$$",
        "imageUrl": "https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg"
    },
    {
        "title": "Johor Bahru, Malaysia",
        "region": "Asia",
        "description": "A gateway to Malaysia, known for its theme parks, shopping malls, and cultural attractions. Johor Bahru offers family-friendly destinations like Legoland Malaysia and Hello Kitty Town, as well as vibrant local markets and seafood restaurants.",
        "travelType": ["Shopping"],
        "pricePoint": "$",
        "imageUrl": "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2023/06/johor-bahru-guide-aerial-view-night-sky-900x643.jpg"
    },
    {
        "title": "Krabi, Thailand",
        "region": "Asia",
        "description": "A paradise for nature lovers, with towering limestone cliffs, turquoise waters, and pristine beaches. Krabi's attractions include the Phi Phi Islands, Railay Beach, and the Emerald Pool. Visitors can enjoy activities like rock climbing, snorkeling, and exploring caves.",
        "travelType": ["Beach, Nature, Nightlife, Adventure"],
        "pricePoint": "$",
        "imageUrl": "https://a.cdn-hotels.com/gdcs/production67/d105/7bfa90e5-e5a8-4311-b3a9-b6517fbe2230.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    },
    {
        "title": "Kuala Lumpar, Malaysia",
        "region": "Asia",
        "description": "The capital of Malaysia, Kuala Lumpur offers a mix of modern skyscrapers, historic landmarks, and diverse cuisine. Key attractions include the Petronas Twin Towers, Batu Caves, and the bustling markets of Chinatown. The city's culinary scene features a blend of Malay, Chinese, and Indian flavors.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$",
        "imageUrl": "https://media.timeout.com/images/105866262/750/422/image.jpg"
    },
    {
        "title": "Kuching, Sarawak",
        "region": "Asia",
        "description": "A charming city on the island of Borneo, known for its cultural diversity, nature reserves, and indigenous heritage. Kuching's attractions include the Sarawak Cultural Village, Bako National Park, and the waterfront esplanade. The city is also famous for its unique dishes like Sarawak laksa, kolo mee and sayur midin belacan.",
        "travelType": ["Nature, Culture, Adventure"],
        "pricePoint": "$",
        "imageUrl": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/532000/532917-kuching.jpg"
    },
    {
        "title": "Kyoto, Japan",
        "region": "Asia",
        "description": "A historic city with traditional temples, gardens, and tea houses, preserving Japan's cultural heritage. Kyoto's attractions include the Fushimi Inari Shrine, Kinkaku-ji (Golden Pavilion), and the Arashiyama Bamboo Grove. The city's rich cultural experiences include tea ceremonies and geisha performances.",
        "travelType": ["Culture, Adventure"],
        "pricePoint": "$$",
        "imageUrl": "https://boutiquejapan.com/wp-content/uploads/2019/07/yasaka-pagoda-higashiyama-kyoto-japan.jpg"
    },
    {
        "title": "London, United Kingdom",
        "region": "Europe",
        "description": "The iconic capital of England, known for its historic landmarks, world-class museums, and diverse culture. London's attractions include the Tower of London, Buckingham Palace, and the British Museum. The city's vibrant cultural scene includes theater productions in the West End and diverse culinary experiences.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$",
        "imageUrl": "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt55aa6fe881d45976/6091355f1671db1046c1a59c/UK_CityofLondon_UK_Header.jpg"
    },
    {
        "title": "Los Angeles, USA",
        "region": "America",
        "description": "Known as the \"City of Dreams,\" Los Angeles offers beaches, Hollywood glamour, and diverse cultural experiences. Key attractions include the Hollywood Walk of Fame, Venice Beach, and Griffith Observatory. The city's entertainment industry and vibrant neighborhoods make it a dynamic destination.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$$",
        "imageUrl": "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-01/Getty_515070156_EDITORIALONLY_LosAngeles_HollywoodBlvd_Web72DPI_0.jpg?h=0a8b6f8b&itok=lst_2_5d"
    },
    {
        "title": "Madrid, Spain",
        "region": "Europe",
        "description": "The vibrant capital of Spain, known for its art, culture, and lively street life. Madrid's attractions include the Prado Museum, Royal Palace, and Retiro Park. The city's lively nightlife, tapas bars, and flamenco shows add to its charm.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$",
        "imageUrl": "https://content.r9cdn.net/rimg/dimg/5f/38/353ec907-ap-MAD-551b0685.jpg?width=1366&height=768&xhint=826&yhint=409&crop=true"
    },
    {
        "title": "Malacca, Malaysia",
        "region": "Asia",
        "description": "A historic city with Dutch, Portuguese, and British influences, known for its colorful buildings and cuisine. Malacca's attractions include the A Famosa fortress, Christ Church, and Jonker Street. The city's culinary scene features unique dishes like chicken rice balls, nyanya/peranakan delicacies and cendol.",
        "travelType": ["Shopping, Culture"],
        "pricePoint": "$",
        "imageUrl": "https://www.agoda.com/wp-content/uploads/2024/02/Malacca-1244x700.jpg"
    },
    {
        "title": "Male, Maldives",
        "region": "Asia",
        "description": "The capital of the Maldives, offering luxury resorts, crystal-clear waters, and world-class diving. Male's attractions include the Islamic Centre, Sultan Park, and local markets. The Maldives is renowned for its overwater bungalows and stunning marine life.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$$$",
        "imageUrl": "https://afar.brightspotcdn.com/dims4/default/5af1313/2147483647/strip/true/crop/3000x1592+0+323/resize/1440x764!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg"
    },
    {
        "title": "Melbourne, Australia",
        "region": "Oceania",
        "description": "A cultural hub known for its arts scene, laneway cafes, and eclectic neighborhoods. Melbourne's attractions include the National Gallery of Victoria, Federation Square, and the Royal Botanic Gardens. The city's vibrant food and coffee culture, along with its street art, make it a unique destination.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$",
        "imageUrl": "https://www.jacobs.com/sites/default/files/styles/media_component/public/2022-04/Melbourne_HERO.jpg?itok=uLdk-pS_"
    },
    {
        "title": "Miami, USA",
        "region": "America",
        "description": "A vibrant city known for its beautiful beaches, lively nightlife, and diverse cultural experiences. Miami's attractions include South Beach, the Art Deco Historic District, and Little Havana. The city's multicultural influences are reflected in its cuisine, art, and festivals.",
        "travelType": ["Beach, Shopping, Culture, Nightlife"],
        "pricePoint": "$$",
        "imageUrl": "https://content.r9cdn.net/rimg/dimg/17/74/0ca6e469-city-30651-1632b88f203.jpg?width=1366&height=768&xhint=2635&yhint=1507&crop=true"
    },
    {
        "title": "Munich, Germany",
        "region": "Europe",
        "description": "A cosmopolitan city with a rich cultural heritage, surrounded by scenic Bavarian landscapes. Munich's attractions include Marienplatz, the Neuschwanstein Castle, and the Oktoberfest festival. The city's blend of traditional and modern culture is reflected in its museums, beer halls, and culinary scene.",
        "travelType": ["Nature, Culture"],
        "pricePoint": "$$",
        "imageUrl": "https://statemag.state.gov/wp-content/uploads/2020/10/1120POM-1.jpg"
    },
    {
        "title": "New York, USA",
        "region": "America",
        "description": "Known as the \"City That Never Sleeps,\" New York offers iconic landmarks, Broadway shows, and diverse culinary experiences. Key attractions include Times Square, Central Park, and the Statue of Liberty. The city's vibrant neighborhoods, such as Soho and Brooklyn, add to its dynamic and vibrant atmosphere.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$$",
        "imageUrl": "https://media.cntraveler.com/photos/63483e15ef943eff59de603a/3:2/w_3000,h_2000,c_limit/New%20York%20City_GettyImages-1347979016.jpg"
    },
    {
        "title": "Osaka, Japan",
        "region": "Asia",
        "description": "The culinary capital of Japan, known for its street food, historic landmarks, and vibrant nightlife. Osaka's attractions include Osaka Castle, Dotonbori, and Universal Studios Japan. The city's food scene is famous for dishes like takoyaki and okonomiyaki.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$",
        "imageUrl": "https://content.r9cdn.net/rimg/dimg/45/5f/5788029f-city-25901-16737226b47.jpg?width=1366&height=768&xhint=1747&yhint=789&crop=true"
    },
    {
        "title": "Oslo, Norway",
        "region": "Europe",
        "description": "The capital city nestled between fjords and forests, offering outdoor adventures and cultural attractions. Oslo's attractions include the Viking Ship Museum, Oslo Opera House, and the Vigeland Sculpture Park. The city's proximity to nature makes it ideal for snow-related activities like hiking and skiing.",
        "travelType": ["Nature, Culture, Adventure"],
        "pricePoint": "$$$",
        "imageUrl": "https://res.cloudinary.com/simpleview/image/upload/v1656066610/clients/norway/Bispevika_neighbourhoos_in_Oslo_web_Foto_Christine_Baglo_Visitnorway_com_d1c2350a-161c-4cc8-9ca0-b43197ce4433.jpg"
    },
    {
        "title": "Paris, France",
        "region": "Europe",
        "description": "The romantic capital of France, famous for its art, architecture, and haute cuisine. Paris's attractions include the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. The city's charming cafes, fashion boutiques, and historic neighborhoods add to its allure.",
        "travelType": ["Shopping, Culture"],
        "pricePoint": "$$",
        "imageUrl": "https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg"
    },
    {
        "title": "Penang, Malaysia",
        "region": "Asia",
        "description": "A foodie's paradise with diverse cuisine, historic architecture, and beautiful beaches. Penang's attractions include George Town, a UNESCO World Heritage Site, and Batu Ferringhi Beach. The city's culinary delights include street food like char kway teow and Penang laksa.",
        "travelType": ["Beach, Culture, Adventure"],
        "pricePoint": "$",
        "imageUrl": "https://res.klook.com/image/upload/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/9f8f6c45-Explore-Georgetown.jpg"
    },
    {
        "title": "Perth, Australia",
        "region": "Oceania",
        "description": "A gateway to Western Australia's natural wonders, offering beautiful beaches and outdoor adventures. Perth's attractions include Kings Park, Fremantle, and Rottnest Island. The city's sunny climate and relaxed atmosphere make it perfect for activities like surfing and hiking.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$$",
        "imageUrl": "https://content.r9cdn.net/rimg/dimg/ba/de/deacb4c5-city-11563-17a3ef27550.jpg?width=1366&height=768&xhint=4145&yhint=2485&crop=true"
    },
    {
        "title": "Phnom Phen, Cambodia",
        "region": "Asia",
        "description": "The capital city of Cambodia, rich in history, with bustling markets and ancient temples. Phnom Penh's attractions include the Royal Palace, Silver Pagoda, and the Killing Fields. The city's vibrant street life and riverside promenade add to its charm.",
        "travelType": ["Culture, Adventure"],
        "pricePoint": "$",
        "imageUrl": "https://a.cdn-hotels.com/gdcs/production44/d1864/11b4988c-106d-4717-86b2-4ed6c1e85363.jpg"
    },
    {
        "title": "Phuket, Thailand",
        "region": "Asia",
        "description": "Thailand's largest island, famous for its stunning beaches, water sports, and lively nightlife. Phuket's attractions include Patong Beach, Phi Phi Islands, and Big Buddha. The island offers a range of activities, from snorkeling and diving to exploring local markets and temples.",
        "travelType": ["Beach, Nature, Nightlife, Adventure"],
        "pricePoint": "$",
        "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/4b/5d/c8/caption.jpg"
    },
    {
        "title": "Rome, Italy",
        "region": "Europe",
        "description": "Known as the \"Eternal City,\" Rome is filled with ancient ruins, Renaissance art, and vibrant street life. Key attractions include the Colosseum, Vatican City, and the Trevi Fountain. Rome's rich history, culinary delights, and lively piazzas make it a must-visit destination.",
        "travelType": ["Culture, Nature"],
        "pricePoint": "$$",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0ZFIdLHCm2GEBnUe0vWxaHK8Ny8CzwKSAPYU3dShlg&s"
    },
    {
        "title": "San Francisco, USA",
        "region": "America",
        "description": "Known as the \"City by the Bay,\" San Francisco is famous for its iconic Golden Gate Bridge, diverse neighborhoods, and tech scene. Key attractions include Alcatraz Island, Fisherman's Wharf, and Chinatown. The city's scenic beauty and cultural diversity make it a unique destination and perfect for all types of travellers.",
        "travelType": ["Beach, Nature, Shopping, Culture, Nightlife"],
        "pricePoint": "$$$",
        "imageUrl": "https://imageio.forbes.com/specials-images/imageserve/644f1cdd6650e9e5650d1575/San-Francisco-Cable-Cars-on-California-Street-at-sunrise--California--USA/960x0.jpg?format=jpg&width=960"
    },
    {
        "title": "Santorini, Greece",
        "region": "Europe",
        "description": "A stunning Greek island known for its iconic white-washed buildings, blue-domed churches, and breathtaking sunsets. Santorini's attractions include the town of Oia, the ancient ruins of Akrotiri, and its volcanic beaches. The island's charm is enhanced by its local cuisine and wine. It's the perfect spot for a romantic getaway!",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$$",
        "imageUrl": "https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg"
    },
    {
        "title": "Seoul, Korea",
        "region": "Asia",
        "description": "A modern metropolis with ancient palaces, bustling markets, and a vibrant K-pop culture. Seoul's attractions include Gyeongbokgung Palace, Myeongdong shopping district, and N Seoul Tower. The city's dynamic street life, technology, and traditional culture create a unique blend for all tourists.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$",
        "imageUrl": "https://static.independent.co.uk/2022/12/29/14/iStock-464629385.jpg"
    },
    {
        "title": "Shanghai, China",
        "region": "Asia",
        "description": "China's gateway city blends traditional Chinese culture with futuristic skyscrapers and vibrant nightlife. Shanghai's attractions include the Bund, Yu Garden, and the Shanghai Tower. The city's shopping, dining, and cultural experiences make it a dynamic destination.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$",
        "imageUrl": "https://www.outlooktravelmag.com/media/shanghai-1-1582544504.profileImage.2x-scaled.webp"
    },
    {
        "title": "Sydney, Australia",
        "region": "Oceania",
        "description": "A vibrant city with iconic landmarks, stunning beaches, and a lively atmosphere. Sydney's attractions include the Sydney Opera House, Harbour Bridge, and Bondi Beach. The city's outdoor lifestyle, diverse neighborhoods, and cultural events make it a popular destination.",
        "travelType": ["Beach, Nature, Shopping, Culture, Nightlife, Adventure"],
        "pricePoint": "$$",
        "imageUrl": "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg"
    },
    {
        "title": "Tokyo, Japan",
        "region": "Asia",
        "description": "The dynamic capital of Japan, blending traditional culture with cutting-edge technology and vibrant street life. Tokyo's attractions include the Meiji Shrine, Shibuya Crossing, and Akihabara. The city's culinary scene, fashion, and entertainment options are unparalleled.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1-_dlTlmtaL0yJfqleFoJyM_92u5pDYW7H5YY7O1-Q&s"
    },
    {
        "title": "Toronto, Canada",
        "region": "America",
        "description": "With its diverse neighborhoods, cultural attractions, and a vibrant culinary scene, Toronto's attractions include the CN Tower, Royal Ontario Museum, and St. Lawrence Market. The city's multicultural population and events like the Toronto International Film Festival and Toronto Jazz Festival add to its vibrancy.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$",
        "imageUrl": "https://media.gq-magazine.co.uk/photos/5d5d44674d3a1d0008837858/16:9/w_2560%2Cc_limit/20190709-Toronto-06.jpg"
    },
    {
        "title": "Vancouver, Canada",
        "region": "America",
        "description": "A scenic city surrounded by mountains and ocean, offering outdoor activities and cultural attractions. Vancouver's attractions include Stanley Park, Granville Island, and the Capilano Suspension Bridge. The city's natural beauty, vibrant neighborhoods, and culinary scene make it a standout destination.",
        "travelType": ["Culture, Nature, Adventure"],
        "pricePoint": "$$",
        "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/14/dc/46/caption.jpg?w=1200&h=-1&s=1"
    },
    {
        "title": "Venice, Italy",
        "region": "Europe",
        "description": "Built around its canals,  Venice is renowned for its art, architecture, and gondola rides. Venice's attractions include St. Mark's Basilica, the Grand Canal, and the Rialto Bridge. The city's unique charm is enhanced by its historic squares, narrow streets, and local cuisine.",
        "travelType": ["Culture, Adventure"],
        "pricePoint": "$$$",
        "imageUrl": "https://lp-cms-production.imgix.net/2021-06/GettyRF_543346423.jpg?w=600&h=400"
    },
    {
        "title": "Zurich, Switzerland",
        "region": "Europe",
        "description": "One of the global financial hub - Zurich offers a picturesque old town, situated on the shores of Lake Zurich and surrounded by the Swiss Alps. Zurich's attractions include the Bahnhofstrasse shopping street, Zurich Opera House, and the Swiss National Museum. The city's blend of modern amenities and historic charm make it a delightful destination.",
        "travelType": ["Nature, Shopping, Culture, Adventure"],
        "pricePoint": "$$$",
        "imageUrl": "https://lp-cms-production.imgix.net/2021-08/shutterstockRF_314150237.jpg"
    }
]

// 1. displays recommendations via loop
function displayRecommendations(results) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; 
    results.forEach(rec => {
        const locationDiv = document.createElement("div");
        locationDiv.classList.add("result");
        locationDiv.innerHTML = `
            <h3>${rec.title}</h3>
            <img src="${rec.imageUrl}" alt="${rec.title}">
            <p><strong>Description: </strong>${rec.description}</p>
            <p><strong>Travel Type: </strong>${rec.travelType.join(', ')}</p>
            <p><strong>Price Point: </strong>${rec.pricePoint}</p>
            <hr> `;
        resultsContainer.appendChild(locationDiv);
    });
}

// 2. displays all recommendations by default
displayRecommendations(recommendations);

// 3. search by keywords
function searchInputs() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const keywords = search.split(' ');
    const searchRecommendations = recommendations.filter(rec =>
        keywords.every(keyword =>
            rec.title.toLowerCase().includes(keyword) ||
            rec.region.toLowerCase().includes(keyword) ||
            rec.description.toLowerCase().includes(keyword) ||
            rec.travelType.some(type => type.toLowerCase().includes(keyword)) ||
            rec.pricePoint.toLowerCase() === keyword)
        );
    
displayRecommendations(searchRecommendations);
    }

// 4. enter button to search
const input = document.getElementById("searchInput");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("searchButton").click();
    }
});

// 5. resets earch input and results
function clearInputs() {
    document.getElementById("searchInput").value = "";
    document.getElementById("results").innerHTML = "";

displayRecommendations(recommendations);
    }

// 6. filters recommendations by travel type
function filterTravelType(category) {
    const buttons = document.querySelectorAll(".buttonValue");
    buttons.forEach(button => {
        if (button.innerText.toLowerCase() === category.toLowerCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    let filterRecommendations;
        if (category.toLowerCase() === 'all') {
            filterRecommendations = recommendations;
        } else if (category.toLowerCase() === 'beach') {
            filterRecommendations = recommendations.filter(rec =>
                rec.travelType.some(type => type.toLowerCase().includes('beach'))
            );
        } else if (category.toLowerCase() === 'nature') {
            filterRecommendations = recommendations.filter(rec =>
                rec.travelType.some(type => type.toLowerCase().includes('nature'))
            );
        } else if (category.toLowerCase() === 'shopping') {
            filterRecommendations = recommendations.filter(rec =>
                rec.travelType.some(type => type.toLowerCase().includes('shopping'))
            );
        } else if (category.toLowerCase() === 'culture') {
            filterRecommendations = recommendations.filter(rec =>
                rec.travelType.some(type => type.toLowerCase().includes('culture'))
            );
        } else if (category.toLowerCase() === 'nightlife') {
            filterRecommendations = recommendations.filter(rec =>
                rec.travelType.some(type => type.toLowerCase().includes('nightlife'))
            );
        } else if (category.toLowerCase() === 'adventure') {
            filterRecommendations = recommendations.filter(rec =>
                rec.travelType.some(type => type.toLowerCase().includes('adventure'))
            );
        }

displayRecommendations(filterRecommendations);
    }