// Rest Parameter (No limit Parameter)
summation = (...numberArray) => {
    let total = 0
    for (let eachNumber of numberArray) {
        total += eachNumber
    }
    return total
}

console.log(`summation(10,20,30) = ${summation(10,20,30)}`)
