// For each
let data = [1,2,3,4]

// Traditional for loop
for (let i=0; i<data.length; i++) {
    console.log(data[i])
}

// Use forEach
data.forEach(element => {
    console.log(element);
})

// Use forOf
for (let element of data) {
    console.log(element)
}
