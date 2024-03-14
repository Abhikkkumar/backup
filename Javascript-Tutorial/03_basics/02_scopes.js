//scope

let a = 10;
const b = 20;
// var c = 30; //global scope

{
    //within curly braces, let and const gives BLOCK scope
    let a= 20;
    console.log(a);//gives 20 not 10
}
// out of curly braces, there is global scope.

addone(3); // accessing function even before its decleration. NO Problem
function addone(num){
    return num+1;
}

// addfive(4); //accessing addfive() before its decleration gives ERROR!
const addfive = function(num){
    return num+5;
}