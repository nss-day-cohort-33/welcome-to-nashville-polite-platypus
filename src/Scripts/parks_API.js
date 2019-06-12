


function parkfind(parksearch) {
    fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${parksearch}=Yes&$$app_token=${park_app_keys.APP_TOKEN}`)
    .then(parkData => parkData.json())
    .then( parks => {
        console.table(parks)
    })
}

parkfind("nature_center")


