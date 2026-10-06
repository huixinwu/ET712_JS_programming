console.log("----- Example 1: object ")
// create an object 'car'
const car = {
    // properties
    type: "Fiat",
    model: "500",
    color: "white",

    // methods
    carname: function(){
        return this.type + " " + this.model
    }
}

// call the property of object car
console.log(car.color)
console.log(car["type"])
console.log(car.carname())

console.log("----- Example 2: object constructor ")
function Course(title, instructor, code, session, students){
    this.t = title
    this.i = instructor
    this.c = code
    this.s = session
    this.number_students = students
}
// create an object of the constructor Course
let course1 = new Course("Computer Application", "Prof. Wu", "TECH100", "M1", 20)
let course2 = new Course("JS programming", "Prof. Novak", "ET712", "C3", 18)

// access to the Course value
console.log(course1.i)
console.log(course2.number_students)

console.log("----- Example 3: methods of an object ")
const Square = {
    // methods
    area(side){ return side*side }, 
    perimeter(side){return 4*side},
}

// access to the method of an object
let s = 9
let area1 = Square.area(s)
let perimeter1 = Square.perimeter(s)
console.log(`The square with side ${s} has an area of ${area1} and a perimeter of ${perimeter1}`)

console.log("----- Example 4: methods of an object using 'this' statement")
const hen = {
    // properties
    name: "Helen",
    eggcount : 0,

    // method
    lay_an_egg(){
        this.eggcount ++
        return 'EGG' }
}

console.log("----- LAB EXERCISE 1")
const mycalculator = {
    // properties
    message : "Square calculator",

}
console.log("\n------ Lab Exercise 2: Exception Handling -----");

function readProperty(obj, prop) {
    try {
        return obj[prop];
    } catch (error) {
        return "Error accessing property";
    }
}

// Example 1
const student = {
    name: "John",
    age: 20
};

console.log(readProperty(student, "name"));

// Example 2
console.log(readProperty(null, "name"));

// AI Assistance:
// Ask AI to help debugging the try-catch
// statement and explain runtime errors.


/* Reflection:
1)	AI helped me understand object methods 
2)	exception handling, and debugging errors.
*/
