myArr = [4,5,7,8,9]
console.log(myArr);
arr1 = new Array("Aditya","B","C")
console.log(arr1[0]);

// Array Methods
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length); // Length of the array

fruits.push("Pineapple"); // Add element at the end
fruits.pop(); // Remove last element
fruits.unshift("Strawberry"); // Add element at the beginning
fruits.shift(); // Remove first element
console.log(fruits.includes("Apple")); // Check if element exists
index = fruits.indexOf("Orange"); // Get index of element

const newArr = fruits.join(" - "); // Join elements into a string
console.log(newArr);

//slice and splice
let citrus = fruits.slice(1,3); // Extract a section of the array
console.log(citrus);

fruits.splice(1,3);// Remove elements from index 1 to 3 
// and modify original array i.e. remove 3 elements starting from index 1 from fruits array
console.log(fruits);