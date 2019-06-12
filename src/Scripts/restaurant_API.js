
// function zomatoFetch () {
//     return fetch(`https://developers.zomato.com/api/v2.1/location_details?entity_id=1138&entity_type=city&apikey=${zomato_keys}`)
//     .then( foodFromAPI => foodFromAPI.json())
// }
function zomatoFetch (userInput) { 
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&&entity_type=city&q=${userInput}&sort=rating&apikey=${api_keys.zomato_keys}`)
    .then( foodFromAPI => foodFromAPI.json())
    .then ( restaurants => {
    console.log(restaurants)
    let results = document.querySelector("#search-results")
  })
  }
  zomatoFetch("burger")
  
