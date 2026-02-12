// Immediately Invoked Function Expression (IIFE)

(function start(){
    console.log(`DB connected`);
})();

((name) => {
    console.log(`DB Connected Two ${name}`);
})("Aditya")