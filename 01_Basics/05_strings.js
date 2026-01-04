const name ="Aditya";
const repo = 50;
console.log("Hello, my name is " + name + " and I have " + repo + " repositories on GitHub.");
// Output: Hello, my name is Aditya and I have 50 repositories on GitHub.

console.log(`Hello, my name is ${name} and I have ${repo} repositories on GitHub.`);
// Output: Hello, my name is Aditya and I have 50 repositories on GitHub.

const s = new String("Hello World");
console.log(s.toUpperCase());

console.log(s.__proto__);


console.log(s.indexOf("World"));
// Output: 6

console.log(s[0]);
// Output: H

console.log(s.slice(-5))
// parameter negative index counts from end
// Output: World

console.log(s.split(" "));
// Output: [ 'Hello', 'World' ]

console.log(s.replace("World", "JavaScript"));
// Output: Hello JavaScript

console.log(s.includes("Hello"));
// Output: true

console.log(s.startsWith("Hello"));
// Output: true

console.log(s.endsWith("World"));
// Output: true

console.log(s.repeat(3));
// Output: Hello WorldHello WorldHello World

