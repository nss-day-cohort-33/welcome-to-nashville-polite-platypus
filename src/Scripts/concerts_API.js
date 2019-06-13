function getMyConcert(concertGenres){
    fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${api_keys.ticket_master_key}&locale=*&city=Nashville&classificationName=Music&genreId=${concertGenres}`)
    .then ( eventsData => eventsData.json())
    .then ( events => {
        let concertArray = events._embedded.events
        console.log(concertArray)
        document.querySelector("#search-results").innerHTML = ""
        for (let i = 0; i < 5; i++) {
            let concertName = concertArray[i].name
            let concertUrl = concertArray[i].url
            {
                putInDOM = `<p${i}-content> ${concertName}</p>
                <p>Click <a target="_blank" href=${concertUrl}>here</a> for concert details.</p>
                <button class="saveButton" id="save_meetup-${i}">Save</button>`
            }
            document.querySelector("#search-results").innerHTML += putInDOM
    }

    let saveButton = document.getElementById("search-results");
    saveButton.addEventListener("click", function(){
        // console.log("concert name", event.target)

    if (event.target.classList.contains("saveButton")) {
    console.log(event.target.id.slice(-1))
    let saveItem = concertArray[+event.target.id.slice(-1)].name
    let itineraryDOM = document.getElementById("concert-itinerary")
    itineraryDOM.innerHTML = ""
    itineraryDOM.innerHTML += "Concert:   " + saveItem
                console.log(saveItem)
            }
        })
    })
}

// getMyConcert()
 
document.querySelector("#concerts-search").addEventListener("click", function(){
    let concertSearchValues = document.querySelector("#concertSearch").value
    // console.log(concertSearchValues)
    getMyConcert(concertSearchValues)
})

let concertResults = document.querySelector("#concerts-search")

//save to itinerary
// let searchResults = []

// let saveButton = document.getElementById("search-results");
// saveButton.addEventListener("click", function(){
//    console.log(event.target)

//    if (event.target.classList.contains("saveButton")) {
//    console.log(event.target.id.slice(-1))
//    let saveItem = searchResults[+event.target.id.slice(-1)].name
//    let itineraryDOM = document.getElementById("concert-itinerary")
//    itineraryDOM.innerHTML = ""
//    itineraryDOM.innerHTML += "Concert:   " + saveItem
//    console.log(saveItem)
// }
// })

            // // console.log("name", concertName)
            // // console.log("url", concertUrl)
            // for (let j = 0; j < 6; j++)