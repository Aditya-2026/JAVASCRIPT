function myName(){
    console.log("Aditya");
}

// myName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
    let result = number1+number2;
    return result
}

const result = addTwoNumbers(3,null)
console.log(result);

function loginUserMessage(username = "Sam"){
    return `${username} just logged in`
}

function loginUserMessage2(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());
console.log(loginUserMessage("Aditya"));
console.log(loginUserMessage2());


function calculateCartPrice(val1 , ...num1){
    return num1
}

console.log(calculateCartPrice(200,400,600,800));

const user = {
    username : "Aditya",
    price : 500
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
