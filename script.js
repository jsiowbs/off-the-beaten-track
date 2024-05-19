const recommendations = [
  {"title":"Amsterdam, The Netherlands","region":"Europe","description":"Picturesque city of canals, known for its museums, cycling culture, and vibrant nightlife.","travelType":"Culture, Nightlife","pricePoint":"Mid-range, Luxury"},
  {"title":"Auckland, New Zealand","region":"Oceania","description":"City of sails, surrounded by natural beauty, offering outdoor adventures and cultural experiences.","travelType":"Nature, Adventure","pricePoint":"Mid-range, Luxury"},
  {"title":"Bali, Indonesia","region":"Asia","description":"Tropical paradise offering serene beaches, lush landscapes, and vibrant cultural experiences.","travelType":"Beach, Nature, Culture, Nightlife, Adventure","pricePoint":"Budget, Mid-range"},
  {"title":"Bangkok, Thailand","region":"Asia","description":"Bustling capital of Thailand, offering vibrant markets, ornate temples, and delicious street food.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Budget, Mid-range"},
  {"title":"Barcelona, Spain","region":"Europe","description":"Cosmopolitan city with stunning architecture, vibrant street scenes, and a rich cultural heritage.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Mid-range, Luxury"},
  {"title":"Batam, Indonesia","region":"Asia","description":"Indonesian island known for its resorts, golf courses, and duty-free shopping.","travelType":"Beach, Nature, Shopping","pricePoint":"Budget, Mid-range"},
  {"title":"Beijing, China","region":"Asia","description":"Ancient capital of China, home to iconic landmarks like the Great Wall and Forbidden City.","travelType":"Culture, Adventure","pricePoint":"Budget, Mid-range"},
  {"title":"Bintan, Indonesia","region":"Asia","description":"Relaxing getaway with beautiful beaches, golf courses, and luxury resorts.","travelType":"Beach, Nature, Adventure","pricePoint":"Mid-range, Luxury"},
  {"title":"Busan, Korea","region":"Asia","description":"Coastal city known for its beaches, seafood, and vibrant cultural scene.","travelType":"Beach, Nature, Adventure","pricePoint":"Mid-range, Luxury"},
  {"title":"Cebu, Philippines","region":"Asia","description":"Philippines' Queen City of the South, known for its historic landmarks, beautiful beaches, and vibrant nightlife.","travelType":"Beach, Nature, Adventure","pricePoint":"Budget, Mid-range"},
  {"title":"Edinburgh, Scotland","region":"Europe","description":"Historic city with medieval architecture, surrounded by hills and coastline, offering cultural experiences and outdoor adventures.","travelType":"Culture, Nature","pricePoint":"Mid-range, Luxury"},
  {"title":"Hanoi, Vietnam","region":"Asia","description":"Capital of Vietnam, known for its centuries-old architecture, vibrant street life, and delicious cuisine.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Budget, Mid-range"},
  {"title":"Hawaii, USA","region":"America","description":"Tropical paradise with stunning beaches, lush landscapes, and opportunities for outdoor adventures.","travelType":"Beach, Nature, Adventure","pricePoint":"Mid-range, Luxury"},
  {"title":"Ho Chi Minh City, Vietnam","region":"Asia","description":"Formerly Saigon, bustling metropolis with historic landmarks, vibrant markets, and delicious street food.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Budget, Mid-range"},
  {"title":"Hoi An, Vietnam","region":"Asia","description":"Historic town with well-preserved architecture, vibrant markets, and nearby beaches.","travelType":"Culture, Adventure","pricePoint":"Budget, Mid-range"},
  {"title":"Hong Kong, China","region":"Asia","description":"Dynamic city where East meets West, renowned for its skyline, shopping, and culinary scene.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Budget, Mid-range"},
  {"title":"Ipoh, Malaysia","region":"Asia","description":"Charming city surrounded by limestone hills, known for its street food and colonial architecture.","travelType":"Nature, Culture, Adventure","pricePoint":"Budget"},
  {"title":"Istanbul, Turkey","region":"Europe","description":"City where East meets West, offering historic sites, bustling markets, and delicious cuisine.","travelType":"Culture, Adventure","pricePoint":"Budget, Mid-range"},
  {"title":"Johor Bahru, Malaysia","region":"Asia","description":"Gateway to Malaysia, known for its theme parks, shopping malls, and cultural attractions.","travelType":"Shopping","pricePoint":"Budget"},
  {"title":"Krabi, Thailand","region":"Asia","description":"Paradise for nature lovers, with towering limestone cliffs, turquoise waters, and pristine beaches.","travelType":"Beach, Nature, Nightlife, Adventure","pricePoint":"Budget, Mid-range"},
  {"title":"Kuala Lumpar, Malaysia","region":"Asia","description":"Capital of Malaysia, offering a mix of modern skyscrapers, historic landmarks, and diverse cuisine.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Budget, Mid-range"},
  {"title":"Kuching, Sarawak","region":"Asia","description":"Charming city on the island of Borneo, known for its cultural diversity, nature reserves, and indigenous heritage.","travelType":"Nature, Culture, Adventure","pricePoint":"Budget, Mid-range"},
  {"title":"Kyoto, Japan","region":"Asia","description":"Historic city with traditional temples, gardens, and tea houses, preserving Japan's cultural heritage.","travelType":"Culture, Adventure","pricePoint":"Mid-range, Luxury"},
  {"title":"London, United Kingdom","region":"Europe","description":"Iconic capital of England, known for its historic landmarks, world-class museums, and diverse culture.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Mid-range, Luxury"},
  {"title":"Los Angeles, USA","region":"America","description":"City of dreams, offering beaches, Hollywood glamour, and diverse cultural experiences.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Mid-range, Luxury"},
  {"title":"Madrid, Spain","region":"Europe","description":"Vibrant capital of Spain, known for its art, culture, and lively street life.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Mid-range, Luxury"},
  {"title":"Malacca, Malaysia","region":"Asia","description":"Historic city with Dutch, Portuguese, and British influences, known for its colorful buildings and cuisine.","travelType":"Shopping, Culture","pricePoint":"Budget"},
  {"title":"Male, Maldives","region":"Asia","description":"Capital of the Maldives, offering Luxury resorts, crystal-clear waters, and world-class diving.","travelType":"Beach, Nature, Adventure","pricePoint":"Mid-range, Luxury"},
  {"title":"Melbourne, Australia","region":"Oceania","description":"Cultural hub known for its arts scene, laneway cafes, and eclectic neighborhoods.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Mid-range, Luxury"},
  {"title":"Miami, USA","region":"America","description":"Vibrant city with beautiful beaches, lively nightlife, and diverse cultural experiences.","travelType":"Beach, Shopping, Culture, Nightlife","pricePoint":"Mid-range, Luxury"},
  {"title":"Munich, Germany","region":"Europe","description":"Cosmopolitan city with a rich cultural heritage, surrounded by scenic Bavarian landscapes.","travelType":"Nature, Culture","pricePoint":"Mid-range, Luxury"},
  {"title":"New York, USA","region":"America","description":"City that never sleeps, offering iconic landmarks, Broadway shows, and diverse culinary experiences.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Mid-range, Luxury"},
  {"title":"Osaka, Japan","region":"Asia","description":"Culinary capital of Japan, known for its street food, historic landmarks, and vibrant nightlife.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Mid-range, Luxury"},
  {"title":"Oslo, Norway","region":"Europe","description":"Capital city nestled between fjords and forests, offering outdoor adventures and cultural attractions.","travelType":"Nature, Culture, Adventure","pricePoint":"Luxury"},
  {"title":"Paris, France","region":"Europe","description":"Romantic capital of France, famous for its art, architecture, and haute cuisine.","travelType":"Shopping, Culture","pricePoint":"Mid-range, Luxury"},
  {"title":"Penang, Malaysia","region":"Asia","description":"Foodie paradise with diverse cuisine, historic architecture, and beautiful beaches.","travelType":"Beach, Culture, Adventure","pricePoint":"Budget"},
  {"title":"Perth, Australia","region":"Oceania","description":"Gateway to Western Australia's natural wonders, offering beautiful beaches and outdoor adventures.","travelType":"Beach, Nature, Adventure","pricePoint":"Mid-range, Luxury"},
  {"title":"Phnom Phen, Cambodia","region":"Asia","description":"Capital city of Cambodia, rich in history, with bustling markets and ancient temples.","travelType":"Culture, Adventure","pricePoint":"Budget"},
  {"title":"Phuket, Thailand","region":"Asia","description":"Thailand's largest island, famous for its stunning beaches, water sports, and lively nightlife.","travelType":"Beach, Nature, Nightlife, Adventure","pricePoint":"Budget, Mid-range"},
  {"title":"Rome, Italy","region":"Europe","description":"Eternal city with ancient ruins, Renaissance art, and vibrant street life.","travelType":"Culture, Nature","pricePoint":"Mid-range, Luxury"},
  {"title":"San Francisco, USA","region":"America","description":"City by the bay, known for its iconic Golden Gate Bridge, diverse neighborhoods, and tech scene.","travelType":"Beach, Nature, Shopping, Culture, Nightlife","pricePoint":"Mid-range, Luxury"},
  {"title":"Santorini, Greece","region":"Europe","description":"Stunning Greek island known for its white-washed buildings, blue-domed churches, and breathtaking sunsets.","travelType":"Beach, Nature, Adventure","pricePoint":"Mid-range, Luxury"},
  {"title":"Seoul, Korea","region":"Asia","description":"Modern metropolis with ancient palaces, bustling markets, and a vibrant K-pop culture.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Mid-range, Luxury"},
  {"title":"Shanghai, China","region":"Asia","description":"Modern metropolis blending traditional Chinese culture with futuristic skyscrapers and vibrant nightlife.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Budget, Mid-range"},
  {"title":"Sydney, Australia","region":"Oceania","description":"Vibrant city with iconic landmarks, stunning beaches, and a lively atmosphere.","travelType":"Beach, Nature, Shopping, Culture, Nightlife, Adventure","pricePoint":"Mid-range, Luxury"},
  {"title":"Tokyo, Japan","region":"Asia","description":"Dynamic capital of Japan, blending traditional culture with cutting-edge technology and vibrant street life.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Mid-range, Luxury"},
  {"title":"Toronto, Canada","region":"America","description":"Dynamic city with diverse neighborhoods, cultural attractions, and vibrant culinary scene.","travelType":"Shopping, Culture, Nightlife","pricePoint":"Mid-range, Luxury"},
  {"title":"Vancouver, Canada","region":"America","description":"Scenic city surrounded by mountains and ocean, offering outdoor activities and cultural attractions.","travelType":"Culture, Nature, Adventure","pricePoint":"Mid-range, Luxury"},
  {"title":"Venice, Italy","region":"Europe","description":"Romantic city of canals, renowned for its art, architecture, and gondola rides.","travelType":"Culture, Adventure","pricePoint":"Mid-range, Luxury"},
  {"title":"Zurich, Switzerland","region":"Europe","description":"Financial hub with a picturesque old town, situated on the shores of Lake Zurich and surrounded by the Swiss Alps.","travelType":"Nature, Shopping, Culture, Adventure","pricePoint":"Luxury"},
]

function displayRecommendations(results) {
  document.getElementById("results").innerHTML = ""; 
  results.forEach(rec => {
    const locations = document.createElement("div");
    locations.classList.add("result");
    locations.innerHTML = `
      <h3><em>${rec.title}</em></h3>
      <p><strong>Description: </strong> ${rec.description}</p>
      <p><strong>Travel Type: </strong> ${rec.travelType}</p>
      <p><strong>Price Point: </strong> ${rec.pricePoint}</p>
      <hr>
      `;
      document.getElementById("results").appendChild(locations);
  });
}

displayRecommendations(recommendations);

function searchInputs() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const keywords = searchInput.split(' ').filter(keyword => keyword !== "");
  const filtered = recommendations.filter(rec =>
    keywords.every(keyword =>
      rec.title.toLowerCase().includes(keyword) ||
      rec.region.toLowerCase().includes(keyword) ||
      rec.description.toLowerCase().includes(keyword) ||
      rec.travelType.toLowerCase().includes(keyword)||
      rec.pricePoint.toLowerCase().includes(keyword)
    )
  );
  displayRecommendations(filtered);
}

function clearInputs() {
  document.getElementById("searchInput").value = "";
  document.getElementById("results").innerHTML = "";
  displayRecommendations(recommendations);
}


