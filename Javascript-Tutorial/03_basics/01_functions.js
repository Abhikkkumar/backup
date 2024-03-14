//function

/*
//function definition
function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    
}

sayMyName();    //calling the function

*/

// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
// }
// addTwoNumber(2,"4"); 

/*
function loginMessage(username = 'sam'){
    //if parameter is not passed while calling the function,
    // then 'sam' will be taken as default value for username.
    return(`${username} just logged in`);
}

console.log(loginMessage("abhishek"));
console.log(loginMessage());

*/

// ******* How to handle unknown numbers of parameters ******************
 
//  1. REST (...) operator

function calculateSum(val_1,val_2, ...remainingValue){
    //In this function, first 2 values goes in val_1, val_2 and all
    // remaining parameters goes as elements of an array in 'remainingValue'.
    // REST (...) operator is used for this purpose before 'remainingValue'.
    console.log(remainingValue);
}

calculateSum(1,2,3,4,5,6);

