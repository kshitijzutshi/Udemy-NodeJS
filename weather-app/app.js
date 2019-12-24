const request = require('request')

// For the URL, if we can a customized forcast like diff. units or lang changes, just add query at end of the url. LIKE
// 'https:// ....?units=si&xyz=abc....' here after ? there is key=value pair

const url = 'https://api.darksky.net/forecast/c889472ce43e33aa808d84773a03bbbd/37.8267,-122.4233?units=si'

request({url : url, json : true}, (error,response) => {

// console.log(response)
// TO parse the body part of the response from http request, WHICH wont be needed if added json: true in request options
// const data = JSON.parse(response.body)
// console.log(data)
// To get a lot less info and get current weather info
// console.log(data.currently)
console.log('It is currently '+response.body.currently.temperature+' degrees out. There is a '+(response.body.currently.precipProbability)*100+ '% chance of '+response.body.currently.precipType+'.')
// console.log(process.argv)
})