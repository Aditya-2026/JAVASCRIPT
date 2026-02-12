const a = 300
let b = 200
var c = 100

if(true){
    // a = 10
    let b = 20
    var c = 200
    console.log(a);
}
console.log(a);
console.log(b);
console.log(c);

function one(){
    const username = "Aditya"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    two()
}

console.log(addOne(5));
function addOne(num){ // function can be called before declaration
    return num+1
}

const addTwo = function(num){ // function can only be called after declaration
    return num+2
}

console.log(addTwo(5));