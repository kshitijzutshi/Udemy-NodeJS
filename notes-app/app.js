//const add = require('./utils.js')
const validator = require('validator')
const chalk =  require('chalk')
const getNote = require('./notes.js')

const msg = getNote()

//const sum= add(4,-1)
//console.log(sum)
console.log(msg)
// Trying out various methods in validator module
console.log(validator.isEmail('johndoe@example.com'))
console.log(validator.isURL('https://mead.io'))
// Trying out the chalk package
console.log(chalk.green('Success! chalk is working!'))
console.log(chalk.green('I am a green line ' + chalk.blue.underline.bold('with a blue substring') + ' that becomes green again!'))

console.log('Testing Git!!!!')