# Welcome to Nashville: Build an itinerary for a day trip to Music City

In this app users can search for four different things to do/visit in Nashville:
* parks -- using the Nashville [Metro Gov API](https://dev.socrata.com/foundry/data.nashville.gov/xbru-cfzi)
* restaurants -- using the [Zomato API](https://developers.zomato.com/api)
* meetups -- using the [Eventbrite API](https://www.eventbrite.com/developer/v3/)
* concerts -- using the [Ticketmaster API](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)



## App Notes

1. Only one itinerary category can exist at a time
1. When you save a new category search results, it will overwite the existing category on your itinerary with the new item.

## How to download and run Itinerary Builder
1. Clone this github repository into a new branch
1. Pull down master with 'git pull origin master'
1. Open code from terminal
1. Find and open keys_template.js file
1. create keys for all four APIs using the above API links
1. insert all API keys/tokens into designated object item in keys_template.js  
example: insert Zomato key into "Zomato_keys" key
1. Use http-server or launch Go Live in preferred editor and use itinteray builder!



## YAYYYYYYYYYYY, YOU DID IT!!








