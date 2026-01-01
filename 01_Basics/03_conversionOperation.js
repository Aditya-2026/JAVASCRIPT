let score = "33h"
let a =null

console.log(typeof score) //string
let valueInNumber = Number(score)
console.log(typeof valueInNumber) //number
console.log(valueInNumber) //NaN
console.log(typeof Number(a)) //object
console.log(Number(a)) //0

// true => 1
// false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //true

// 1 => true
// 0 => false
// "" => false
// "Aditya" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber) //string
console.log(stringNumber) // "33"
