const fs = require('fs')

const getNotes = function(){
    return 'Your Notes...'
}
// Here we declare Add note functionality
const addNote = function(title, body){
    const notes = loadNotes()

    // Use array filter to prevent duplicate notes, filter has a function that iterates over singular note to check.
    const duplicateNotes = notes.filter(function(note){
        return note.title === title //see if title is same
    })
    if(duplicateNotes.length === 0){
        notes.push({
            title : title,
            body : body
        })
        // console.log(notes)
    saveNotes(notes)
    }
    else{
        console.log('Note Taken!')
    }
    
    
}

const saveNotes = function(notes){
    // save the note from 
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

// Reusable code to load and parse file data
const loadNotes = function(){

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
    getNotes : getNotes, // property : value
    addNote : addNote
}