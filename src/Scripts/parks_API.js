// if you are working with the Parks API and are having a hard time accessing the address for the park, try changing `74d7-b74t.json` to `xbru-cfzi.json` in your fetch request


function parkfind(parksearch) {
    fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${parksearch}=Yes&$$app_token=${park_app_keys.APP_TOKEN}`)
    .then(parkData => parkData.json())
    .then( parks => {
        // console.log(parks)
    parks.forEach(park => {
        console.log(park)
        })
    })
}
    
document.querySelector("#place-search").addEventListener("click", function(){
    const parkSearchValues = document.querySelector("#parkSearch").value
    parkfind(parkSearchValues)  
})










