// for of 
const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(num);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"Frans")

// console.log(map);
map.set('F',"France")
map.set("India","IN")
map.set('Fr',"France")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ":- " , value);
}

//for in
const lang = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by app"
}

for (const key in lang) {
    // console.log(key + ": ",lang[key]);
}

for (const key in arr) {
    // console.log(`${key}, - ${arr[key]}`);
}

// cannot iterate map using for in loop


// for each

const coding = ["js","java" ,"py"]

coding.forEach( (val) => {
    // console.log(val);
})
//OR
coding.forEach( function (val){
    // console.log(val);
})
//OR

function print(val){
    // console.log(val);
}
coding.forEach(print)

coding.forEach( (val,index,arr) => {
    console.log(val,index,arr);
})

const myCoding = [
    {
        language : "Javascript",
        fileName : "js"
    },
    {
        language : "Java",
        fileName : "java"
    },
    {
        language : "Python",
        fileName : "py"
    },
    {
        language : "C++",
        fileName : "cpp"
    },
]

myCoding.forEach((obj) => {
    console.log(obj["language"], "->" ,obj["fileName"]);
})

// const values = myCoding.forEach((obj) => {
//     console.log(obj["language"], "->" ,obj["fileName"]);
// })
// console.log(values);


const nums = [1,2,3,4,5,6,7,8,9,10]

const newNums = nums.filter( (num) => num >= 4)
// const newNums = nums.filter( (num) => {
// return num >= 4}) // if we open the scope for function({}) then we have to write return keyword
console.log(newNums);

