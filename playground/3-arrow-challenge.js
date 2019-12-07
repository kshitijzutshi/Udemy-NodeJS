// links.mead.io/arrow-challenge
// https://gist.github.com/andrewjmead/ad7a587411aa8e3fb3ea643c37c45818

//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
        this.tasks.forEach((tsk) => {
            if(tsk.completed === false)
                console.log(tsk)
        })
        // or store them in a new array and print them
        // const tasksToDo =this.tasks.filter((tsk1) => {
        //     return tsk.completed === false
        // })
        // return tasksToDo

        // or directly return the values
        //return const tasksToDo =this.tasks.filter((tsk1) => tsk.completed === false)
    }

    
}
    

console.log(tasks.getTasksToDo())