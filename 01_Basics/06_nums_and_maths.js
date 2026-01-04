const score =400
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(typeof balance);

console.log(balance.toFixed(2));
// output 100.00
console.log(typeof balance.toFixed(2));
// output string

console.log(balance.toPrecision(2));
// output 1.0e+2

 
const hundreds = 1000000000;
console.log(hundreds.toLocaleString('en-US'));
// output 1,000,000,000
console.log(hundreds.toLocaleString('en-IN'));
// output 1,00,00,00,000

// Math
console.log(Math);
// output Math object with all its properties and methods

console.log(Math.PI);
// output 3.141592653589793

console.log(Math.abs(-4)); //round,ceil,floor,sqrt,pow
// output 4

console.log(Math.min(3,5,1,9,6));
// output 1

console.log(Math.max(3,5,1,9,6));
// output 9

console.log(Math.random());
// output random number between 0 and 1

console.log(Math.floor(Math.random()*10)+1);
// output random number between 1 and 10

const min =10;
const max =20;
console.log(Math.floor(Math.random()*(max - min +1)) + min);
// output random number between 10 and 20
 

