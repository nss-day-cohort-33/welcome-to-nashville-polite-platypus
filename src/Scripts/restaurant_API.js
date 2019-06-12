let searchButton = document.getElementById("restaurant-search");
searchButton.addEventListener("click", function() {
    let searchTerm = document.getElementById("cuisine-input").value
    zomatoFetch(searchTerm)
    console.log('searchButton', searchButton)
})

function zomatoFetch (userInput) { 
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&&entity_type=city&q=${userInput}&sort=rating&start=0&count=20&apikey=${api_keys.zomato_keys}`)
    .then( foodFromAPI => foodFromAPI.json())
    .then ( results => {
    console.log(results)
    let foodResults = document.querySelector("#search-results")
        foodResults.innerHTML = ""
    for (let i = 0; i < 5; i++) {
        console.log(results)
        foodResults.innerHTML += 
        `<p>${results.restaurants[i].restaurant.name}><button id="save_parts">Save</button> </p>`
        }
    })
}


// const restaurant=[]
// const restaurantSearch = restaurants.filter (function ()) {
    
// }



  
// restaurantSearch.restaurants.filter( (food) => {
//     let obj = food.restaurant;
//     if (obj.name.includes(searchText.value) || obj.cuisines.includes(searchText.value)) {
//         let newObj = obj;
//         createRestaurantOption(newObj)
//     }

