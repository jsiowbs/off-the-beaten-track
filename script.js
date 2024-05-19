const recommendations = [
  {
    "title": "Amsterdam, The Netherlands",
    "region": "Europe",
    "description": "Picturesque city of canals, known for its museums, cycling culture, and vibrant nightlife.",
    "travelType": "Culture, Nightlife",
    "pricePoint": "Mid-range, Luxury"
},
{
    "title": "Auckland, New Zealand",
    "region": "Oceania",
    "description": "City of sails, surrounded by natural beauty, offering outdoor adventures and cultural experiences.",
    "travelType": "Nature, Adventure",
    "pricePoint": "Mid-range, Luxury"
},
{
    "title": "Bali, Indonesia",
    "region": "Asia",
    "description": "Tropical paradise offering serene beaches, lush landscapes, and vibrant cultural experiences.",
    "travelType": "Beach, Nature, Culture, Nightlife, Adventure",
    "pricePoint": "Budget, Mid-range"
},
{
    "title": "Bangkok, Thailand",
    "region": "Asia",
    "description": "Bustling capital of Thailand, offering vibrant markets, ornate temples, and delicious street food.",
    "travelType": "Shopping, Culture, Nightlife",
    "pricePoint": "Budget, Mid-range"
},
{
    "title": "Barcelona, Spain",
    "region": "Europe",
    "description": "Cosmopolitan city with stunning architecture, vibrant street scenes, and a rich cultural heritage.",
    "travelType": "Shopping, Culture, Nightlife",
    "pricePoint": "Mid-range, Luxury"
},
{
    "title": "Batam, Indonesia",
    "region": "Asia",
    "description": "Indonesian island known for its resorts, golf courses, and duty-free shopping.",
    "travelType": "Beach, Nature, Shopping",
    "pricePoint": "Budget, Mid-range"
},
{
    "title": "Beijing, China",
    "region": "Asia",
    "description": "Ancient capital of China, home to iconic landmarks like the Great Wall and Forbidden City.",
    "travelType": "Culture, Adventure",
    "pricePoint": "Budget, Mid-range"
},
{
    "title": "Bintan, Indonesia",
    "region": "Asia",
    "description": "Relaxing getaway with beautiful beaches, golf courses, and Luxury resorts.",
    "travelType": "Beach, Nature, Adventure",
    "pricePoint": "Mid-range, Luxury"
},
{
    "title": "Busan, Korea",
    "region": "Asia",
    "description": "Coastal city known for its beaches, seafood, and vibrant cultural scene.",
    "travelType": "Beach, Nature, Adventure",
    "pricePoint": "Mid-range, Luxury"
},
{
    "title": "Cebu, Philippines",
    "region": "Asia",
    "description": "Philippines' Queen City of the South, known for its historic landmarks, beautiful beaches, and vibrant nightlife.",
    "travelType": "Beach, Nature, Adventure",
    "pricePoint": "Budget, Mid-range"
},
]

function displayRecommendations(results) {
  document.getElementById("results").innerHTML = ""; 
  results.forEach(rec => {
    const locations = document.createElement("div");
    locations.classList.add("result");
    locations.innerHTML = `
      <h4><em>${rec.title}</em></h4>
      <p><strong>Description: </strong> ${rec.description}</p>
      <p><strong>Travel Type: </strong> ${rec.travelType}</p>
      <p><strong>Price Point: </strong> ${rec.pricePoint}</p>
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
}
