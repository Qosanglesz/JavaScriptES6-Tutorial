// Old version object definition.
const user = {
    name: "Wissarut",
    age: 19,
    adress: "Bankok",
}

// ES6 version object definitions.
const name = "Peach"
const age = "19"
const adress = "Trat"

const customer = {
    name,
    age,
    adress,
}

console.log(user) // Print User.
console.log(customer) // Print Customer.

console.log(user.name) // Print user attribute(name).