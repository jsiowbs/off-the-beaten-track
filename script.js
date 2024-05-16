// manually inserting recommendation (connect to database?)
var recommendations = [
  {title: "Amsterdam", region: "Europe", travelType: "Culture, Nightlife", pricePoint: "Mid-range to Luxury"},
  {title: "Auckland", region: "Oceania", travelType: "Nature, Adventure", pricePoint: "Mid-range to Luxury"},
  {title: "Bali", region: "Asia", travelType: "Beach, Nature, Culture, Nightlife, Adventure", pricePoint: "Budget to Mid-Range"}
];
  
// function to display recommendations
function displayRecommendations(recommendations) {
  var travelDestinations = document.getElementById("recommendations"); // #recommendations (html)
  // travelDestinations.innerHTML = "";
  recommendations.forEach(recommendation => { //creates loop for each recommendation
    var locations = document.createElement("div");
    locations.classList.add("recommendation");
    locations.innerHTML = `
      <h2>${recommendation.title}</h2>
      <p>Region: ${recommendation.region}</p>
      <p>Travel Type: ${recommendation.travelType}</p>
      <p>Price Point: ${recommendation.pricePoint}</p>
      `;
      travelDestinations.appendChild(locations);
  });
}

displayRecommendations(recommendations);