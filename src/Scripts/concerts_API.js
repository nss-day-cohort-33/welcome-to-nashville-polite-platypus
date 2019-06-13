function getMyConcert(concertGenres){
    fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${api_keys.ticket_master_key}&locale=*&city=Nashville&classificationName=Music&genreId=${concertGenres}`)
    .then ( eventsData => eventsData.json())
    .then ( events => {
        let concertArray = events._embedded.events
        console.log(concertArray)
        for (let i = 0; i < 5; i++) {
            let concertName = concertArray[i].name
            let concertUrl = concertArray[i].url
            console.log("name", concertName)
            console.log("url", concertUrl)
            for (let j = 0; j < 6; j++) {
                putInDOM = `<p${i}-content> ${concertName}</p>
                <p>Click <a target="_blank" href=${concertUrl}>here</a> for concert details.</p>
                <button id="save_meetup-${i}">Save</button>`
            }
            document.querySelector("#search-results").innerHTML += putInDOM
    }
    })
}

// getMyConcert()

document.querySelector("#concerts-search").addEventListener("click", function(){
    let concertSearchValues = document.querySelector("#concertSearch").value
    // console.log(concertSearchValues)
    getMyConcert(concertSearchValues)
})

let concertResults = document.querySelector("#concerts-search")