// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(i==5) console.log("5 is best number")
//     console.log(element);
// }

// break - used to break the control flow of loop
// continue - skips the current iteration

let arr = ['a','b','c','d']

let index = 0

while(index < arr.length){
    console.log(arr[index]);
    index++;
}

do {
    //expression
} while (condition);