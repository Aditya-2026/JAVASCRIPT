// primitive - call by value
// string, Number, Boolean, null, undefined, symbol ,BigInt

// Refernce (Non primitive)
// arrays, objects, functions

// js - dynamically typed language no need to mention datatype is determined at runtime

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2);
console.log(id == id2);
const bigNumber = 4444444234553366666666666n

//objects
{
    name : "Aditya"
    age : 22
}

const myfunction = function(){
    console.log("Hello World");
    
}
console.log(typeof bigNumber);

// ********************************************
// Stack(Primtive)- store var,method calls   
// heap(Non Primitive)- stores object ,give reference to obj  

let myYoutubename = "AD"
 