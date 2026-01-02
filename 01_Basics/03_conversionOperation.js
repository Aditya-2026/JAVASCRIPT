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


// ** Operation ** 
let value = 3
let negvalue = -value
console.log(negValue) // -3

console.log( 3+5 ) //8
console.log( "3" + 5 ) // "35"
console.log( "3" - 5 ) // -2
console.log( "3" * "5" ) // 15
console.log( "10" / "2" ) // 5
console.log( "3" * "Hello" ) // NaN
console.log( "Hello" / "2" ) // NaN
console.log( "Hello" + "World" ) // HelloWorld
console.log("1"+2+2) //122
console.log(1+2+"2") //32
console.log( 5 + 3 * 2 / 4 ) //6.5

let firstName = "Aditya"
let lastName = "D"

console.log( firstName + " " + lastName ) // Aditya D
console.log(+true) //1
console.log(+"") //0

//difference between increment operators

