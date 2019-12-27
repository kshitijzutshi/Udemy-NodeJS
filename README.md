# Repo for building Node Applications!
[![node](https://img.shields.io/badge/version-12.13.1-green)](https://nodejs.org/en/) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/c299f9a420584eb8baa8a78e162c0480)](https://www.codacy.com/manual/kshitijzutshi/Udemy-NodeJS?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kshitijzutshi/Udemy-NodeJS&amp;utm_campaign=Badge_Grade)

![node image](https://camo.githubusercontent.com/936a08778c7e4885053d148c07bbd2339dfbdd80/68747470733a2f2f6665726f73732e6e65742f782f6e6f6465322e676966)

This repository is for all the modules I work with and practice in **The Complete Node.js Developer Course (3rd Edition)**.

## Notes App

* Implemented Add, Remove , List and Read commands using Yargs.

### Screenshots

**1. Adding a note**

![alt text](https://github.com/kshitijzutshi/Udemy-NodeJS/blob/master/addnote.PNG)

**2. Deleting a note**

![alt text](https://github.com/kshitijzutshi/Udemy-NodeJS/blob/master/removenote.PNG)

**3. List all notes**

![alt text](https://github.com/kshitijzutshi/Udemy-NodeJS/blob/master/listnotes.PNG)

**4. Read a note**

![alt text](https://github.com/kshitijzutshi/Udemy-NodeJS/blob/master/readnotes.PNG)

## Weather App

Do you ever wonder what the weather is, but you don't feel like looking it up on the news and you lost your phone somewhere in the couch cushions? I completely understand, and I'd by lying if I didn't say that is, indeed, the story of my life. There's no need to worry, this little weather app has you covered.

Dress appropriately and be prepared. You'll know what the temperature feels like outside at your location, the current weather conditions, and a short and sweet summary to...sum things up for the day!

I created this weather app using Dark Sky's API. Mad shoutouts to APIs that allow you to make 1,000 requests per day for free. When developing, it makes the building process much more enjoyable to be able to refresh multiple times for testing. I like to see what an error message looks like as well as the data output on the page, for example. The ability to only make a couple requests per few minutes, just isn't going to cut it.

In addition to giving credit where it is due, I also used Adam Whitcroft's Climacons for my weather icons! Hooray for clouds!

**The Goal**

My goal is to grab a user's coordinates and display their location, their current temperature (toggle between Celsius/Fahrenheit), weather description, and display a weather icon that relates to their current conditions.

**The Process**

To be able to get a user's location, I decided to go with geolocation that is built right in the browser. I added in a conditional statement to check if the user's geolocation object is supported by their browser. From there, I run the getCurrentPosition() method with a success and error callback. In my success function, I get the coordinates so that I may pass them into the urls for Dark Sky and Google Maps Geocoding API.

Since Dark Sky does not provide geolocation based on coordinates, I use Google's geocode API to convert the coordinates to the user's city and state location to display. I use the coordinates for Dark Sky to retrieve the weather information-- the current temperature, icon information, and summary of the current weather conditions. I then pass on the data received from the Dark Sky API into separate functions to manipulate the data, and so they are their own component!

**Obstacles**

Dark Sky does not allow for CORS. This led me to a problem because even though GitHub enables it, Dark Sky has disabled cross-origin requests and requires you to pop up a proxy server. After digging around, I used jsonp data type to get around this. Yes, it is VERY hacky, but I did learn that it works because jsonp takes the data and converts it into scripts to bypass the CORS issue.

I also had to make one of my variables in my code global in the context of my object! Why? Due to how I was calling my functions and using the object literal method, I had to have a way to pass in my fTemp not only to a function to display the temp, but to also use the data in an event when the button is clicked to convert the temperature from Fahrenheit to Celsius. I am interested in finding a better way to achieve this!
