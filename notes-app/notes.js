const fs = require('fs')
const chalk =  require('chalk')


// Here we declare Add note functionality
const addNote = (title, body) => {
    const notes = loadNotes()

    // Use array filter to prevent duplicate notes, filter has a function that iterates over singular note to check.
    const duplicateNotes = notes.find((note) => note.title === title ) 
    // Without using shorthand arrow fns
    // const duplicateNotes = notes.filter( function(note)  { return note.title === title }) 
    //see if title is same

    

    if(!duplicateNotes){
        notes.push({
            title : title,
            body : body
        })
        // console.log(notes)
    saveNotes(notes)
    console.log(chalk.green.inverse('New Note added!'))
    }
    else{
        console.log(chalk.red.inverse('Note title Taken!'))
    }


// IN THIS CODE THE FILTER KEEPS SEARCHING DUPLICATES IN 1000s OF NOTES, HENCE TO MAKE IT EFFICIENT, USE FIND.
    // Use array filter to prevent duplicate notes, filter has a function that iterates over singular note to check.
    // const duplicateNotes = notes.filter((note) => note.title === title ) 
    // Without using shorthand arrow fns
    // const duplicateNotes = notes.filter( function(note)  { return note.title === title }) 
    //see if title is same

    // if(duplicateNotes.length === 0){
    //     notes.push({
    //         title : title,
    //         body : body
    //     })
    //     // console.log(notes)
    // saveNotes(notes)
    // console.log(chalk.green.inverse('New Note added!'))
    // }
    // else{
    //     console.log(chalk.red.inverse('Note title Taken!'))
    // }
    
    
}

const deleteNote = (title) => {
    
    // Use the array filter method to store the titles that DONT match the provided title, then save the new array
    const notes = loadNotes()
    const newnotes = notes.filter((note) =>  note.title !== title )
        // if((note.title !== title))
        //     console.log(chalk.red.inverse('No note found!'))
        // else 
        //     console.log(chalk.green.inverse('Note removed!'))
       
   

    // ALTERNATIVELY, If you want to print the No note found and note removed statements
    if(notes.length > newnotes.length){
        console.log(chalk.red.inverse('Note removed!'))
        saveNotes(newnotes)
    }else{
        console.log(chalk.green.inverse('No note found!'))
    } 
           
        // saveNotes(newnotes)
        
    // }
    // else{
    //     console.log('Note not present!')
    // }
    

}


// To list all notes

const listNotes = (title) => { 
    
    const notes = loadNotes()
    console.log(chalk.yellow.inverse(chalk.green('Your Notes')))

        // Now print the note using foreach
    notes.forEach((note) => { 
        console.log(note.title) 
    })

}

// To read a note based on given title

const readNotes = (title) => {

    const notes = loadNotes()

    const foundNote = notes.find((note) => note.title === title )
    // console.log(foundNote)
    if(foundNote){
        console.log(chalk.green.inverse('Note Title : ')+ chalk.green(foundNote.title))
        console.log(chalk.green.inverse('Note description : ')+chalk.green(foundNote.body))
    }
    else{
        console.log(chalk.red.inverse('No note found!'))
    }
     
}



const saveNotes = (notes) => {
    // save the note from 
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

// Reusable code to load and parse file data
const loadNotes = () => {

    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
       
        return JSON.parse(dataJSON)
        
    } catch (e) {
        return []
    }
    
}

// To export multiple functions -> now the module.exports will be an object
module.exports = {
     // property : value
    addNote : addNote,
    deleteNote : deleteNote,
    listNotes : listNotes,
    readNotes : readNotes
}