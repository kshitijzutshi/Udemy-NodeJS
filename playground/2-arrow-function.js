const square1 = function(x){
    return x * x
}

const square2 = (x) => {
    return x * x
}


const square3 = (x) => x * x

console.log('square1 => '+square1(3))
console.log('square2 => '+square2(4))
console.log('square3 => '+square3(5))

const event = {
    name : 'Birthday Party',
    guestList : ['Andrew', 'Mike', 'John'],
    printguestList(){ //ES6 definition syntax 
        console.log('Guest List for  '+this.name)

        // Now print the guests using foreach
        this.guestList.forEach((guest) => {
            console.log(guest+ ' is attending '+ this.name) //prints undefined as there is a this binding for parent function and it collides with which this to take
            // HENCE we use arrow functions
        })
    } 
}

event.printguestList()