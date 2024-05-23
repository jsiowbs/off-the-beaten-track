const recommendations = [
    {
        "title": "Amsterdam, The Netherlands",
        "region": "Europe",
        "description": "A picturesque city known for its iconic canals, historic architecture, and vibrant cultural scene. Amsterdam offers a wealth of museums showcasing Dutch masterpieces, including the Van Gogh Museum. The city is renowned for its cycling culture, making it easy to explore its charming streets and neighborhoods. Visitors can also enjoy a lively nightlife, with numerous bars, cafes, and nightclubs.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$"
    },
    {
        "title": "Auckland, New Zealand",
        "region": "Oceania",
        "description": "Known as the \"City of Sails,\" Auckland is surrounded by stunning natural beauty, including harbors, islands, and volcanic landscapes. The city offers a mix of outdoor adventures, from hiking and sailing to exploring nearby beaches and parks. Auckland is also a cultural hub, with a rich Maori heritage and a diverse arts scene, featuring galleries, museums, and theaters.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$$"
    },
    {
        "title": "Bali, Indonesia",
        "region": "Asia",
        "description": "A tropical paradise that attracts visitors with its serene beaches, lush rice terraces, and vibrant cultural experiences. Bali is famous for its temples, traditional dance performances, and wellness retreats. The island offers a range of activities, from surfing and diving to exploring local markets and savoring Balinese cuisine.",
        "travelType": ["Beach, Nature, Culture, Nightlife, Adventure"],
        "pricePoint": "$"
    },
    {
        "title": "Bangkok, Thailand",
        "region": "Asia",
        "description": "The bustling capital of Thailand, Bangkok is a city of contrasts, where modern skyscrapers stand alongside ornate temples. Visitors can explore vibrant markets, such as Chatuchak Weekend Market, and enjoy delicious street food. Bangkok's cultural landmarks include the Grand Palace, Wat Arun, and Wat Pho, home to the reclining Buddha statue.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$"
    },
    {
        "title": "Barcelona, Spain",
        "region": "Europe",
        "description": "A cosmopolitan city known for its stunning architecture, including the works of Antoni Gaudí, such as the Sagrada Família and Park Güell. Barcelona boasts a lively street scene, with bustling markets like La Boqueria and vibrant neighborhoods like the Gothic Quarter. The city's rich cultural heritage is complemented by its beautiful beaches and dynamic nightlife.",
        "travelType": ["Beach, Shopping, Culture, Nightlife"],
        "pricePoint": "$$"
    },
    {
        "title": "Batam, Indonesia",
        "region": "Asia",
        "description": "An Indonesian island close to Singapore, Batam is known for its resorts, golf courses, and duty-free shopping. Visitors can relax on its beaches, indulge in spa treatments, or enjoy water sports. Batam also offers a glimpse into local delights with its seafood restaurants and traditional markets.",
        "travelType": ["Beach, Nature, Shopping"],
        "pricePoint": "$"
    },
    {
        "title": "Beijing, China",
        "region": "Asia",
        "description": "The ancient capital of China, Beijing is home to iconic landmarks such as the Great Wall, the Forbidden City, and the Temple of Heaven. The city offers a blend of historical and modern attractions, including bustling markets, traditional hutongs, and contemporary shopping districts. Beijing's culinary scene is renowned, with Peking duck being a must-try dish.",
        "travelType": ["Shopping, Culture, Adventure"],
        "pricePoint": "$$"
    },
    {
        "title": "Bintan, Indonesia",
        "region": "Asia",
        "description": "A relaxing getaway known for its beautiful beaches, luxury resorts, and golf courses. Bintan offers a peaceful retreat with opportunities for water sports, spa treatments, and exploring nature reserves. The island is also home to cultural sites such as Penyengat Island and local markets.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$$"
    },
    {
        "title": "Busan, Korea",
        "region": "Asia",
        "description": "A coastal city famous for its beaches, seafood, and vibrant cultural scene. Busan's attractions include Haeundae Beach, Jagalchi Fish Market, and the colorful Gamcheon Village. The city hosts several festivals throughout the year, such as the Busan International Film Festival and Jinhae Cherry Blossom Festival.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$$"
    },
    {
        "title": "Cebu, Philippines",
        "region": "Asia",
        "description": "Known as the \"Queen City of the South,\" Cebu offers a mix of historic landmarks, beautiful beaches, and a vibrant nightlife. Visitors can explore the Magellan's Cross, Basilica del Santo Niño, and dive into the crystal-clear waters of Moalboal. Cebu's lively festivals, such as Sinulog, showcase the city's rich cultural heritage.",
        "travelType": ["Beach, Nature, Nightlife, Adventure"],
        "pricePoint": "$"
    },
    {
        "title": "Edinburgh, Scotland",
        "region": "Europe",
        "description": "A historic city with medieval architecture, Edinburgh is surrounded by hills and coastline, offering a blend of cultural experiences and outdoor adventures. The city's attractions include the Edinburgh Castle, the Royal Mile, and Arthur's Seat. Edinburgh is also known for its festivals, including the Edinburgh International Festival and the Fringe.",
        "travelType": ["Culture, Nature, Adventure"],
        "pricePoint": "$$"
    },
    {
        "title": "Hanoi, Vietnam",
        "region": "Asia",
        "description": "The capital of Vietnam, Hanoi is known for its centuries-old architecture, vibrant street life, and delicious cuisine. The city's historic Old Quarter offers bustling markets, ancient temples, and French colonial buildings. Hanoi's culinary scene includes must-try dishes like pho, ban minh and bun cha.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$"
    },
    {
        "title": "Hawaii, USA",
        "region": "America",
        "description": "A tropical paradise offering stunning beaches, lush landscapes, and opportunities for outdoor adventures. Hawaii's islands are known for their unique attractions, such as the volcanic landscapes of the Big Island, the surf paradise of Oahu, and the scenic beauty of Maui. Visitors can enjoy activities like hiking, snorkeling, and exploring local delights.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$$$"
    },
    {
        "title": "Ho Chi Minh City, Vietnam",
        "region": "Asia",
        "description": "Formerly known as Saigon, this bustling metropolis offers a mix of historic landmarks, vibrant markets, and delicious street food. Key attractions include the War Remnants Museum, Notre-Dame Cathedral Basilica, and Ben Thanh Market. The city's dynamic street life and culinary delights make it a vibrant destination.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$"
    },
    {
        "title": "Hoi An, Vietnam",
        "region": "Asia",
        "description": "A historic town known for its well-preserved architecture, vibrant markets, and nearby beaches. Hoi An's charming streets are lined with lanterns, and its Old Town is a UNESCO World Heritage Site. Visitors can enjoy cooking classes, tailor-made clothing, and relaxing at nearby beaches like An Bang.",
        "travelType": ["Beach, Culture, Nightlife, Adventure"],
        "pricePoint": "$"
    },
    {
        "title": "Hong Kong, China",
        "region": "Asia",
        "description": "A dynamic city where East meets West, renowned for its skyline, shopping, and culinary scene. Hong Kong offers a mix of modern attractions, such as Victoria Peak and Disneyland, alongside traditional markets and temples. The city's diverse cuisine ranges from dim sum to international gourmet dishes.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$"
    },
    {
        "title": "Ipoh, Malaysia",
        "region": "Asia",
        "description": "A charming city surrounded by limestone hills, known for its street food and colonial architecture. Ipoh's attractions include the Kek Lok Tong Cave Temple, the Ipoh Railway Station, and its vibrant food scene, with famous dishes like Ipoh white coffee and chicken rice.",
        "travelType": ["Nature, Culture, Adventure"],
        "pricePoint": "$"
    },
    {
        "title": "Istanbul, Turkey",
        "region": "Europe",
        "description": "A city where East meets West, offering a rich blend of historic sites, bustling markets, and delicious cuisine. Istanbul's landmarks include the Hagia Sophia, Blue Mosque, and Grand Bazaar. The city's culinary delights range from traditional Turkish kebabs to sweet baklava.",
        "travelType": ["Culture, Adventure"],
        "pricePoint": "$$"
    },
    {
        "title": "Johor Bahru, Malaysia",
        "region": "Asia",
        "description": "A gateway to Malaysia, known for its theme parks, shopping malls, and cultural attractions. Johor Bahru offers family-friendly destinations like Legoland Malaysia and Hello Kitty Town, as well as vibrant local markets and seafood restaurants.",
        "travelType": ["Shopping"],
        "pricePoint": "$"
    },
    {
        "title": "Krabi, Thailand",
        "region": "Asia",
        "description": "A paradise for nature lovers, with towering limestone cliffs, turquoise waters, and pristine beaches. Krabi's attractions include the Phi Phi Islands, Railay Beach, and the Emerald Pool. Visitors can enjoy activities like rock climbing, snorkeling, and exploring caves.",
        "travelType": ["Beach, Nature, Nightlife, Adventure"],
        "pricePoint": "$"
    },
    {
        "title": "Kuala Lumpar, Malaysia",
        "region": "Asia",
        "description": "The capital of Malaysia, Kuala Lumpur offers a mix of modern skyscrapers, historic landmarks, and diverse cuisine. Key attractions include the Petronas Twin Towers, Batu Caves, and the bustling markets of Chinatown. The city's culinary scene features a blend of Malay, Chinese, and Indian flavors.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$"
    },
    {
        "title": "Kuching, Sarawak",
        "region": "Asia",
        "description": "A charming city on the island of Borneo, known for its cultural diversity, nature reserves, and indigenous heritage. Kuching's attractions include the Sarawak Cultural Village, Bako National Park, and the waterfront esplanade. The city is also famous for its unique dishes like Sarawak laksa.",
        "travelType": ["Nature, Culture, Adventure"],
        "pricePoint": "$"
    },
    {
        "title": "Kyoto, Japan",
        "region": "Asia",
        "description": "A historic city with traditional temples, gardens, and tea houses, preserving Japan's cultural heritage. Kyoto's attractions include the Fushimi Inari Shrine, Kinkaku-ji (Golden Pavilion), and the Arashiyama Bamboo Grove. The city's rich cultural experiences include tea ceremonies and geisha performances.",
        "travelType": ["Culture, Adventure"],
        "pricePoint": "$$"
    },
    {
        "title": "London, United Kingdom",
        "region": "Europe",
        "description": "The iconic capital of England, known for its historic landmarks, world-class museums, and diverse culture. London's attractions include the Tower of London, Buckingham Palace, and the British Museum. The city's vibrant cultural scene includes theater productions in the West End and diverse culinary experiences.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$"
    },
    {
        "title": "Los Angeles, USA",
        "region": "America",
        "description": "Known as the \"City of Dreams,\" Los Angeles offers beaches, Hollywood glamour, and diverse cultural experiences. Key attractions include the Hollywood Walk of Fame, Venice Beach, and Griffith Observatory. The city's entertainment industry and vibrant neighborhoods make it a dynamic destination.",
        "travelType": ["Beach, Shopping, Culture, Nightlife"],
        "pricePoint": "$$$"
    },
    {
        "title": "Madrid, Spain",
        "region": "Europe",
        "description": "The vibrant capital of Spain, known for its art, culture, and lively street life. Madrid's attractions include the Prado Museum, Royal Palace, and Retiro Park. The city's lively nightlife, tapas bars, and flamenco shows add to its charm.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$"
    },
    {
        "title": "Malacca, Malaysia",
        "region": "Asia",
        "description": "A historic city with Dutch, Portuguese, and British influences, known for its colorful buildings and cuisine. Malacca's attractions include the A Famosa fortress, Christ Church, and Jonker Street. The city's culinary scene features unique dishes like chicken rice balls, pernakana cuisine and cendol.",
        "travelType": ["Shopping, Culture"],
        "pricePoint": "$"
    },
    {
        "title": "Male, Maldives",
        "region": "Asia",
        "description": "The capital of the Maldives, offering luxury resorts, crystal-clear waters, and world-class diving. Male's attractions include the Islamic Centre, Sultan Park, and local markets. The Maldives is renowned for its overwater bungalows and stunning marine life.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$$$"
    },
    {
        "title": "Melbourne, Australia",
        "region": "Oceania",
        "description": "A cultural hub known for its arts scene, laneway cafes, and eclectic neighborhoods. Melbourne's attractions include the National Gallery of Victoria, Federation Square, and the Royal Botanic Gardens. The city's vibrant food and coffee culture, along with its street art, make it a unique destination.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$"
    },
    {
        "title": "Miami, USA",
        "region": "America",
        "description": "A vibrant city known for its beautiful beaches, lively nightlife, and diverse cultural experiences. Miami's attractions include South Beach, the Art Deco Historic District, and Little Havana. The city's multicultural influences are reflected in its cuisine, art, and festivals.",
        "travelType": ["Beach, Shopping, Culture, Nightlife"],
        "pricePoint": "$$"
    },
    {
        "title": "Munich, Germany",
        "region": "Europe",
        "description": "A cosmopolitan city with a rich cultural heritage, surrounded by scenic Bavarian landscapes. Munich's attractions include Marienplatz, the Neuschwanstein Castle, and the Oktoberfest festival. The city's blend of traditional and modern culture is reflected in its museums, beer halls, and culinary scene.",
        "travelType": ["Nature, Culture"],
        "pricePoint": "$$"
    },
    {
        "title": "New York, USA",
        "region": "America",
        "description": "Known as the \"City That Never Sleeps,\" New York offers iconic landmarks, Broadway shows, and diverse culinary experiences. Key attractions include Times Square, Central Park, and the Statue of Liberty. The city's vibrant neighborhoods, such as Soho and Brooklyn, add to its dynamic atmosphere.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$$"
    },
    {
        "title": "Osaka, Japan",
        "region": "Asia",
        "description": "The culinary capital of Japan, known for its street food, historic landmarks, and vibrant nightlife. Osaka's attractions include Osaka Castle, Dotonbori, and Universal Studios Japan. The city's food scene is famous for dishes like takoyaki and okonomiyaki.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$"
    },
    {
        "title": "Oslo, Norway",
        "region": "Europe",
        "description": "The capital city nestled between fjords and forests, offering outdoor adventures and cultural attractions. Oslo's attractions include the Viking Ship Museum, Oslo Opera House, and the Vigeland Sculpture Park. The city's proximity to nature makes it ideal for activities like hiking and skiing.",
        "travelType": ["Nature, Culture, Adventure"],
        "pricePoint": "$$$"
    },
    {
        "title": "Paris, France",
        "region": "Europe",
        "description": "The romantic capital of France, famous for its art, architecture, and haute cuisine. Paris's attractions include the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. The city's charming cafes, fashion boutiques, and historic neighborhoods add to its allure.",
        "travelType": ["Shopping, Culture"],
        "pricePoint": "$$$"
    },
    {
        "title": "Penang, Malaysia",
        "region": "Asia",
        "description": "A foodie's paradise with diverse cuisine, historic architecture, and beautiful beaches. Penang's attractions include George Town, a UNESCO World Heritage Site, and Batu Ferringhi Beach. The city's culinary delights include street food like char kway teow and Penang laksa.",
        "travelType": ["Beach, Culture, Adventure"],
        "pricePoint": "$"
    },
    {
        "title": "Perth, Australia",
        "region": "Oceania",
        "description": "A gateway to Western Australia's natural wonders, offering beautiful beaches and outdoor adventures. Perth's attractions include Kings Park, Fremantle, and Rottnest Island. The city's sunny climate and relaxed atmosphere make it perfect for activities like surfing and hiking.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$$"
    },
    {
        "title": "Phnom Phen, Cambodia",
        "region": "Asia",
        "description": "The capital city of Cambodia, rich in history, with bustling markets and ancient temples. Phnom Penh's attractions include the Royal Palace, Silver Pagoda, and the Killing Fields. The city's vibrant street life and riverside promenade add to its charm.",
        "travelType": ["Culture, Adventure"],
        "pricePoint": "$"
    },
    {
        "title": "Phuket, Thailand",
        "region": "Asia",
        "description": "Thailand's largest island, famous for its stunning beaches, water sports, and lively nightlife. Phuket's attractions include Patong Beach, Phi Phi Islands, and Big Buddha. The island offers a range of activities, from snorkeling and diving to exploring local markets and temples.",
        "travelType": ["Beach, Nature, Nightlife, Adventure"],
        "pricePoint": "$"
    },
    {
        "title": "Rome, Italy",
        "region": "Europe",
        "description": "Known as the \"Eternal City,\" Rome is filled with ancient ruins, Renaissance art, and vibrant street life. Key attractions include the Colosseum, Vatican City, and the Trevi Fountain. Rome's rich history, culinary delights, and lively piazzas make it a must-visit destination.",
        "travelType": ["Culture, Nature"],
        "pricePoint": "$$"
    },
    {
        "title": "San Francisco, USA",
        "region": "America",
        "description": "Known as the \"City by the Bay,\" San Francisco is famous for its iconic Golden Gate Bridge, diverse neighborhoods, and tech scene. Key attractions include Alcatraz Island, Fisherman's Wharf, and Chinatown. The city's scenic beauty and cultural diversity make it a unique destination.",
        "travelType": ["Beach, Nature, Shopping, Culture, Nightlife"],
        "pricePoint": "$$$"
    },
    {
        "title": "Santorini, Greece",
        "region": "Europe",
        "description": "A stunning Greek island known for its white-washed buildings, blue-domed churches, and breathtaking sunsets. Santorini's attractions include the town of Oia, the ancient ruins of Akrotiri, and its volcanic beaches. The island's charm is enhanced by its local cuisine, wine and romantic hangouts.",
        "travelType": ["Beach, Nature, Adventure"],
        "pricePoint": "$$"
    },
    {
        "title": "Seoul, Korea",
        "region": "Asia",
        "description": "A modern metropolis with ancient palaces, bustling markets, and a vibrant K-pop culture. Seoul's attractions include Gyeongbokgung Palace, Myeongdong shopping district, and N Seoul Tower. The city's dynamic street life, technology, and traditional culture create a unique blend.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$"
    },
    {
        "title": "Shanghai, China",
        "region": "Asia",
        "description": "China's gateway city blends traditional Chinese culture with futuristic skyscrapers and vibrant nightlife. Shanghai's attractions include the Bund, Yu Garden, and the Shanghai Tower. The city's shopping, dining, and cultural experiences make it a dynamic destination.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$"
    },
    {
        "title": "Sydney, Australia",
        "region": "Oceania",
        "description": "A vibrant city with iconic landmarks, stunning beaches, and a lively atmosphere. Sydney's attractions include the Sydney Opera House, Harbour Bridge, and Bondi Beach. The city's outdoor lifestyle, diverse neighborhoods, and cultural events make it a popular destination.",
        "travelType": ["Beach, Nature, Shopping, Culture, Nightlife, Adventure"],
        "pricePoint": "$$"
    },
    {
        "title": "Tokyo, Japan",
        "region": "Asia",
        "description": "The dynamic capital of Japan, blending traditional culture with cutting-edge technology and vibrant street life. Tokyo's attractions include the Meiji Shrine, Shibuya Crossing, and Akihabara. The city's culinary scene, fashion, and entertainment options are unparalleled.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$"
    },
    {
        "title": "Toronto, Canada",
        "region": "America",
        "description": "With its diverse neighborhoods, cultural attractions, and a vibrant culinary scene, Toronto's attractions include the CN Tower, Royal Ontario Museum, and St. Lawrence Market. The city's multicultural population and events like the Toronto International Film Festival add to its vibrancy.",
        "travelType": ["Shopping, Culture, Nightlife"],
        "pricePoint": "$$"
    },
    {
        "title": "Vancouver, Canada",
        "region": "America",
        "description": "A scenic city surrounded by mountains and ocean, offering outdoor activities and cultural attractions. Vancouver's attractions include Stanley Park, Granville Island, and the Capilano Suspension Bridge. The city's natural beauty, vibrant neighborhoods, and culinary scene make it a standout destination.",
        "travelType": ["Culture, Nature, Adventure"],
        "pricePoint": "$$"
    },
    {
        "title": "Venice, Italy",
        "region": "Europe",
        "description": "Built around its canals,  Venice is renowned for its art, architecture, and gondola rides. Venice's attractions include St. Mark's Basilica, the Grand Canal, and the Rialto Bridge. The city's unique charm is enhanced by its historic squares, narrow streets, and local cuisine.",
        "travelType": ["Culture, Adventure"],
        "pricePoint": "$$$"
    },
    {
        "title": "Zurich, Switzerland",
        "region": "Europe",
        "description": "One of the global financial hub - Zurich offers a picturesque old town, situated on the shores of Lake Zurich and surrounded by the Swiss Alps. Zurich's attractions include the Bahnhofstrasse shopping street, Zurich Opera House, and the Swiss National Museum. The city's blend of modern amenities and historic charm make it a delightful destination.",
        "travelType": ["Nature, Shopping, Culture, Adventure"],
        "pricePoint": "$$$"
    }
  ]

// 1. displays recommendations via loop
function displayRecommendations(results) {
    document.getElementById("results").innerHTML = ""; 
    results.forEach(rec => {
        const locations = document.createElement("div");
        locations.classList.add("result");
        locations.innerHTML = `
            <h3>${rec.title}</h3>
            <p><strong>Description: </strong>${rec.description}</p>
            <p><strong>Travel Type: </strong>${rec.travelType.join(', ')}</p>
            <p><strong>Price Point: </strong>${rec.pricePoint}</p>
            <hr> `;
        document.getElementById("results").appendChild(locations);
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