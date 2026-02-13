
// Map

// const nums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = nums.map((num) => {
//     return num + 10
// })

// console.log(newNums);

// Chaining
// const newNums = nums.map((num) => num *10)
// .filter((num) => num > 40)
// .map((num) => num+1)
// console.log(newNums);

// Reduce

const nums = [1,2,3,4,5]

// const myTotal = nums.reduce(function (prev,curr) {
//     console.log(`prev = ${prev} and curr = ${curr}`);
//     return prev+curr
// })
// const myTotal = nums.reduce(function (prev,curr) {
//     console.log(`prev = ${prev} and curr = ${curr}`);
//     return prev+curr
// },0)

const myTotal = nums.reduce( (prev,curr) => prev + curr , 0)

console.log(myTotal);
    
