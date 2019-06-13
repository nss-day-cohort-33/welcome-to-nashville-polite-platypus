// if you are working with the Parks API and are having a hard time accessing the address for the park, try changing `74d7-b74t.json` to `.json` in your fetch request


function parkfind(parksearch) {
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parksearch}=Yes&$$app_token=${api_keys.park_APP_TOKEN}`)
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
    










