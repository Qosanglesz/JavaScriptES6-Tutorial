// join, concat
const data = [10, 20, 30]

// data int -> string
let result = data.join()

console.log(data)
console.log(result)

result = data.join(" * ")
console.log(result)

const data1 = [1,2,3]
const data2 = [4,5,6]
const data3 = data1.concat(data2)
console.log(data3)