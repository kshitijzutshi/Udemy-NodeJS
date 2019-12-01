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

// console.log(process.argv)

yargs.version('1.1.0')


// Creating add, remove, read, and list using commands in yargs

// Create add command

yargs.command({
    command : 'add',
    describe : 'Add a new note.',
    builder : {
        title : {
            describe : 'Title of note',
            demandOption : true, // by default the required option for title is false, if its true, title is mangadory
            type : 'string' // If type not given then if title is given blank it will take it as boolean true.
        },
        describe : {
            describe : 'description of note',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        // console.log('Adding a new note!',argv)  // dosent get us the note title
        console.log('Title : '+ argv.title)  // gets us the title of the note
        console.log('Description : '+ argv.describe) // gets us the description of the note
    }
})

//Create remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    handler : function(){
        console.log('Removed the note!')
    }
})

// Create read command
yargs.command({
    command : 'read',
    describe : 'Read a note',
    
    handler : function(){
        console.log('Reading a Note!', )
    }
})

// Create list command

yargs.command({
    command : 'list',
    describe : 'list all the notes',
    handler : function(){
        console.log('All Notes listed.')
    }
})

console.log(yargs.argv)  // prints twice

//yargs.parse() // prints the yargs values only once