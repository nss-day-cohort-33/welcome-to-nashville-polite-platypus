
let meetupSearch = document.querySelector("#meetups-search-btn")
let meetupSearchInput = document.querySelector("#meetup-topic")

//event listener for meetups search bar value
meetupSearchInput.addEventListener("keyup", function () {
  console.log(meetupSearchInput.value)
})

//event listener for meetup "search" to fetch query'd API
meetupSearch.addEventListener("click", function () {
 console.log("meetupSearch clicked")
  eventFind(meetupSearchInput.value)
})

//event listener to move search result to meetup itinerary  
// let meetupResult = document.querySelectorAll("#save_meetup")
// meetupResult.addEventListener("click", function() {

// console.log("meetupResult button clicked")  

// })


function eventFind (eventSearch) {
  fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventSearch}&location.address=nashville&location.within=10mi&start_date.keyword=this_week&token=${api_keys.eventbrite_token}`)
  .then ( eventsData => eventsData.json())
  .then ( events => {
    let results = document.querySelector("#search-results")
    results.innerHTML = ""
    
    for (let i = 0; i < 5; i++) {
      console.log(events)
    results.innerHTML += 
    `
    <div id=results${i}>
    <p><a target="_blank" href=${events.events[i].url}>${events.events[i].name.text}</a> </p>
    <button id="save_meetup-${i}">Save</button>
    </div>
    `
    }
   
  
})
}



