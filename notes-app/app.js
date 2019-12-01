//const add = require('./utils.js')
const validator = require('validator')
const chalk =  require('chalk')
const getNote = require('./notes.js')
const yargs = require('yargs')

// const msg = getNote()

//const sum= add(4,-1)
//console.log(sum)
// console.log(msg)
// Trying out various methods in validator module
// console.log(validator.isEmail('johndoe@example.com'))
// console.log(validator.isURL('https://mead.io'))
// Trying out the chalk package
// console.log(chalk.green.inverse.bold('Success! chalk is working!'))
// console.log(chalk.green.inverse('I am a green line ' + chalk.blue.underline.inverse.bold('with a blue substring') + ' that becomes green again!'))

// console.log('Testing Git!!!!')

// Testing out getting input from user using process command
// const command = process.argv[2]

// if(command === 'add'){
// console.log('Note Added.')
// }
// else if(command === 'delete'){
//     console.log('Note deleted.')
// }
// console.log(process.argv[2])

// Comparison between Process and yargs

console.log(process.argsv)
console.log(yargs.argv)