let restaurantSearchButton = document.getElementById("restaurant-search");
    restaurantSearchButton.addEventListener("click", function() {
    let searchTerm = document.getElementById("cuisine-input").value
    zomatoFetch(searchTerm)
    // console.log('searchButton', searchButton)
})

let restaurantSearchResults = []

let restaurantSaveButton = document.getElementById("search-results");
restaurantSaveButton.addEventListener("click", function(){
    // console.log(event.target)
   
    if (event.target.classList.contains("restaurantSaveButton")) {
    // console.log(event.target.id.slice(-1))
    let saveItem = `<a target="_blank" href=${restaurantSearchResults[+event.target.id.slice(-1)].restaurant.url}>${restaurantSearchResults[+event.target.id.slice(-1)].restaurant.name}</a>`
    let itineraryDOM = document.getElementById("restaurant-itinerary")
    itineraryDOM.innerHTML = ""
    itineraryDOM.innerHTML += "Restaurant:   " + saveItem
    // console.log(saveItem) 
}   
})


function zomatoFetch (userInput) { 
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&&entity_type=city&q=${userInput}&sort=rating&start=0&count=20&apikey=${api_keys.zomato_keys}`)
    .then( foodFromAPI => foodFromAPI.json())
    .then ( results => {
    // console.log(results)
    restaurantSearchResults = results.restaurants
    let foodResults = document.querySelector("#search-results")
        foodResults.innerHTML = ""
    for (let i = 0; i < 5; i++) {
        // console.log(results)
        foodResults.innerHTML += 
        `<div id=results${i}>
        <p>${results.restaurants[i].restaurant.name}</p>
        <button class = "restaurantSaveButton" id="save_parts-${i}">Save</button>
        </div> `
        }
    })
}