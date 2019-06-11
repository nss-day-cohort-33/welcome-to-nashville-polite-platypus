
function dude() {
    return fetch(`https://developers.zomato.com/api/v2.1/location_details?entity_id=1138&entity_type=city&apikey=${zomato_keys}`)
    .then( foodFromAPI => foodFromAPI.json())
}