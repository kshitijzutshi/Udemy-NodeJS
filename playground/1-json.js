const fs = require('fs')
const book = {
    title : 'Ego is the enemy',
    author : 'Ryan Holiday'
}

// fs module can only work with string and not object.
// So, we need to load the file with string from the book object
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON) // bookJSON is a string now not an object.

// To convert the string back to the object 
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// Now to use fs module to write data to disk
// fs.writeFileSync('1-json.json',bookJSON)

// Now to read the 1-json.json file and change the name and age attributes and overwrite them
const dataBuffer =  fs.readFileSync('1-json.json') // this stores data as binary so to print this we use toString method
const dataJSON = dataBuffer.toString()

const data = JSON.parse(dataJSON) // data is in object form
data.name = 'Kshitij'
data.age = '24'

const mydataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',mydataJSON)

