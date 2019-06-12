

function zomatoFetch (userInput) { 
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&&entity_type=city&q=${userInput}&sort=rating&start=0&count=20&apikey=${api_keys.zomato_keys}`)
    .then( foodFromAPI => foodFromAPI.json())
    .then ( restaurants => {
    console.log(restaurants)
    let results = document.querySelector("#search-results")
  })
  }

let searchButton = document.getElementById("#search-results");
console.log('searchButton', searchButton)
  

