console.log("Starting")

//Inbuilt async function that allows us to run some code after a specific
// time has passed
setTimeout( () => {
console.log('2 second timer')

},  2000)

setTimeout( () => {
    console.log('0 second timer')
    
    },  0)
    
console.log("Stopping")