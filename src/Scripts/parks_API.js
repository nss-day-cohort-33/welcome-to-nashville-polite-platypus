
function parkfind(parksearch) {
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parksearch}=Yes&$$app_token=${api_keys.park_APP_TOKEN}`)
    .then(parkData => parkData.json())
    .then( parks => {
        searchResults = parks
        console.log(parks)
    parks.forEach(park => {
        console.log(park)
        })
        parkNames.innerHTML = ""
        for (let i = 0; i < 5; i++) {
        //   console.log(parks)
        parkNames.innerHTML += 
        `
        <div id=${i}>
        <p>${parks[i].park_name}: ${parks[i].mapped_location_address}, ${parks[i].mapped_location_city}, ${parks[i].mapped_location_state}</p>
        <button class="saveButton" id="save_park-${i}">Save</button>
        </div>
        `
        }
        
    })
}
    
document.querySelector("#place-search").addEventListener("click", function(){
    const parkSearchValues = document.querySelector("#parkSearch").value
    parkfind(parkSearchValues)  
})

const parkNames = document.querySelector("#search-results")

 

let searchResults = []
let saveButton = document.getElementById("search-results");
saveButton.addEventListener("click", function(){
   console.log(event.target)

   if (event.target.classList.contains("saveButton")) {
   console.log(event.target.id.slice(-1))
   let saveItem = searchResults[+event.target.id.slice(-1)].park_name
   let itineraryDOM = document.getElementById("park-itinerary")
   itineraryDOM.innerHTML = ""
   itineraryDOM.innerHTML += "Park:   " + saveItem
   console.log(saveItem)
}
})   
  
