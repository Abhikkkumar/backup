// Immediately Invoked Function Expressions (IIFE)

// To protect a function from pollution due to global scope variable,
// we want to execute it immediately. Hence we use IIFE.

//named IIFE bcz it has a name 'chai'
(function chai(){
    console.log("DB Connected");
})();   // to write more than 1 IIFE in a file, always use semicolon at the end of each IIFE

// unnamed IIFE;
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('hitest');