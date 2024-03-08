// Destructuring

// Old Version
const colors = ["red", "green", "blue"]
let red = colors[0]
let green = colors[1]
let blue = colors[2]

// New Version
const [newRed,,newBlue] = colors

// Maybe usefull in object.
const user = {
    name: "Wissarut",
    age: 19
}

const {name:name, age:age} = user

console.log(name)