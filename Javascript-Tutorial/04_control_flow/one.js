// if

// if(condition){
//     code;
// }else{
//     alternate code;
// }

// && = AND operator
// || = OR operator

// Switch Condition

let month = 3;

// switch(month){
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("january");
//         break;
//     default:
//         console.log("default");

// }

//***********  Nullish Coalescing Operator (??): null undefined   *************
/*
    The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
*/
let val1;
// val1 = null ?? 10; 
// console.log(val1); // o/p: 10

// val1 = 4 ?? 10; 
// console.log(val1); // o/p: 4

val1 = null ?? undefined ?? 40; 
console.log(val1); // o/p: 40

