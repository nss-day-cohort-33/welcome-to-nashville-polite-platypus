
function parkfind(parksearch) {
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parksearch}=Yes&$$app_token=${park_app_keys.APP_TOKEN}`)
    .then(parkData => parkData.json())
    .then( parks => {
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
        <button id="save_park-${i}">Save</button>
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
    










