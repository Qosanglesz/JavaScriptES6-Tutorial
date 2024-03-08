// Spread Operator
const newArr = [100, 200, 300]
let data = [10, 20]

// Print Length of data
console.log(data.length)

// Use Spread operator ...
data = [10, 20, ...newArr]

// Test Output.
console.log(`Size: ${data.length}\nData: ${data}`)

// Try to adding new number.
data.push(55)

// Test Output.
console.log(`Size: ${data.length}\nData: ${data}`)
