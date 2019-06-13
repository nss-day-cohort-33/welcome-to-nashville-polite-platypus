//function to fetch API, covert to JS, and then do stuff to the data--print search results
function eventFind (eventSearch) {
  fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventSearch}&location.address=nashville&location.within=10mi&start_date.keyword=this_month&token=${api_keys.eventbrite_token}`)
  .then ( eventsData => eventsData.json())
  .then ( events => {
    meetupSearchResults = events.events
    let results = document.querySelector("#search-results")
    results.innerHTML = ""
    
    for (let i = 0; i < 5; i++) {
      console.log(events)
      results.innerHTML += 
      `
      <div id=results${i}>
      <p><a target="_blank" href=${events.events[i].url}>${events.events[i].name.html}</a></p>
      <button class="meetupSaveButton" id="save_meetup-${i}">Save</button>
      </div>
      `
    }    
  })
}



let meetupSearch = document.querySelector("#meetups-search-btn")
let meetupSearchInput = document.querySelector("#meetup-topic")


//event listener for meetups search bar value
meetupSearchInput.addEventListener("keyup", function () {
  // console.log(meetupSearchInput.value)
})

//event listener for meetup "search" to fetch query'd API
meetupSearch.addEventListener("click", function () {
//  console.log("meetupSearch clicked")
  eventFind(meetupSearchInput.value)
})


//event listener for save button that will add search result to itinerary
let meetupSearchResults = []

let meetupSaveButton = document.getElementById("search-results");
meetupSaveButton.addEventListener("click", function(){
  //  console.log(event.target)

   if (event.target.classList.contains("meetupSaveButton")) {
    //  console.log("works")
   console.log(event.target.id.slice(-1))
  //  console.log(event)
   let saveItem = `<a target="_blank" href=${meetupSearchResults[+event.target.id.slice(-1)].url}>${meetupSearchResults[+event.target.id.slice(-1)].name.html}</a>`
  //  console.log(searchResults)
  //  console.log(saveItem)
   let meetupItineraryDOM = document.getElementById("meetup-itinerary")
   meetupItineraryDOM.innerHTML = ""
   meetupItineraryDOM.innerHTML += "Meetup:" + " " + saveItem
  //  console.log(saveItem)
}
})
