 const heros = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
const dcHeros = ['Batman', 'Superman', 'Flash', 'Aquaman'];
heros.push(dcHeros) // adds the entire dcHeros array as a single element
console.log(heros[4][0]);

const allHeros = heros.concat(dcHeros); // merges both arrays and returns a new array
console.log(allHeros);

const moreHeros = [...heros, ...dcHeros]; // merges both arrays using spread operator
console.log(moreHeros);
//diff between concat and spread operator is that concat adds the entire array as a single element
//while spread operator adds each element of the array individually.

arrayInsideArray = [1,2,3,[4,5,6],[7,8,9,[10,11]]];
flat_array1= arrayInsideArray.flat(1); // flattens the array up to 1 levels deep 
flat_array2= arrayInsideArray.flat(2); // flattens the array up to 2 levels deep 
console.log(flat_array1);
console.log(flat_array2);

console.log(Array.isArray("Aditya")); // checks if the variable is an array or not
console.log(Array.from("Aditya")); // converts a string into an array of characters
console.log(Array.from({name: "Aditya"})); //*converts an object into an array of its values 
 
let s1 =10
let s2 =20
let s3 =30
console.log(Array.of(s1,s2,s3)); // creates an array from the given arguments
