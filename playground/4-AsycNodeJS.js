// In sync the order would be - Starting,2 seco timer,stopping
// In Async the order is - Starting,stopping,2 second timer
// If I add a new set timer of 0 seconds we expect - starting 0 second timer,stopping, 2 second timer
// But we get this - 

// Starting      
// Stopping      
// 0 second timer
// 2 second timer

console.log("Starting")

//Inbuilt async function that allows us to run some code after a specific
// time has passed
setTimeout( () => {
console.log('2 second timer')

},  2000)


console.log("Stopping")