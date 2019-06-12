// let searchButton = document.getElementById("#search-results");
// searchButton.addEventListener("click", function( typedSearch))
// console.log('searchButton', searchButton)

function zomatoFetch (userInput) { 
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&&entity_type=city&q=${userInput}&sort=rating&start=0&count=20&apikey=${api_keys.zomato_keys}`)
    .then( foodFromAPI => foodFromAPI.json())
    .then ( restaurants => {
    console.log(restaurants)
    let results = document.querySelector("#search-results")
})
}
zomatoFetch("burgers")

// const restaurant=[]
// const restaurantSearch = restaurants.filter (function ()) {
    
// }



  
// restaurantSearch.restaurants.filter( (food) => {
//     let obj = food.restaurant;
//     if (obj.name.includes(searchText.value) || obj.cuisines.includes(searchText.value)) {
//         let newObj = obj;
//         createRestaurantOption(newObj)
//     }
// for (let i = 0; i < 5; i++) {
//     console.log(restaurants)
//     results.innerHTML += 
//     `<p>${results.restaurants[0].restaurant.name}><button id="save_parts">Save</button> </p>`
    
//     });
