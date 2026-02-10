// singleton - Object.create

// object literals

const mySym = Symbol("key1")

const user = {
    name : "Aditya",
    "full name" : "Aditya Dahake",
    [mySym] : "mykey1",
    age  : 22,
    email : "aditya@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(user.email)
// console.log(user["email"])
// console.log(user["full name"]) //cannot access by user.full name
// console.log(user["mySym"])

user.email = "1234@gmail.com"
// Object.freeze(user)
user.email = "aditya@gmail.com"

// console.log(user)

user.greeting = function(){
    console.log("Hello user")
}

user.greeting2 = function(){
    console.log(`Hello user, ${this.name}`)
}
// console.log(user.greeting)
console.log(user.greeting())
console.log(user.greeting2())
