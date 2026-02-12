const user = {
    username : "Aditya",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "xyz"
// user.welcomeMessage()

console.log(this); // here the current object(in node environment) is empty obj - {}
// In browser this refers to window(global obj in browser) 


// function demo(){
//     let username = "Aditya"
//     console.log(this.username);
//     console.log(this);
// }
// demo()


// const demo = () => {
//     let username = "Aditya"
//     console.log(this.username);
//     console.log(this);
// }
// demo()

// const add = (num1,num2) => { // curly braces - return keyword needed
//     return num1 + num2
// }
const add = (num1,num2) => (num1 + num2) // no curly braces no return keyword needed
// console.log(add(3,4))

const getObj = () => ({username : "Aditya"})
console.log(getObj());
