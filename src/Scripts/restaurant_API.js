let searchButton = document.getElementById("restaurant-search");
searchButton.addEventListener("click", function() {
    let searchTerm = document.getElementById("cuisine-input").value
    zomatoFetch(searchTerm)
    // console.log('searchButton', searchButton)
})

let searchResults = []

let saveButton = document.getElementById("search-results");
saveButton.addEventListener("click", function(){
    // console.log(event.target)
   
    if (event.target.classList.contains("saveButton")) {
    // console.log(event.target.id.slice(-1))
    let saveItem = searchResults[+event.target.id.slice(-1)].restaurant.name
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
    searchResults = results.restaurants
    let foodResults = document.querySelector("#search-results")
        foodResults.innerHTML = ""
    for (let i = 0; i < 5; i++) {
        // console.log(results)
        foodResults.innerHTML += 
        `<div id=results${i}>
        <p>${results.restaurants[i].restaurant.name}</p>
        <button class = "saveButton" id="save_parts-${i}">Save</button>
        </div> `
        }
    })
}