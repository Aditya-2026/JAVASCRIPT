const accountId = 12345
let accountEmail = "aditya123@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState; // undefined value

// accountId = 2 // not allowed

accountEmail = "aditya@gmail.com"
accountPassword = "54321"
accountCity = "Mumbai"

/*
Prefer not to use var bcoz of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountEmail, accountPassword, accountCity, accountState]);
