//Primitive Data types

/*

 1.String 2.Number 3.Boolean 4.Null (value is empty) 5.Undefined 6.Symbol (to make something unique)
 7. BigInt

 */
const integer = 10;
const another =10.3;

let strData = "1pple";
let boodata = true;

let data1 = null;   
let undNum; // datatype is 'undefined'

let symbolData = Symbol('123');
let anotherSymbol = Symbol('123');

// console.log(symbolData === anotherSymbol); // both symbols are not same

let bigintData = 12334757584844949n; // to store bigInt, simply put 'n' at the end



//Reference (Non-Primitive)
// 1. Objects 2. Array 3. Functions

const heroes = ["Shaktiman","nagraj","doga"];

let myObj = {
    name:"abhishek",
    age: 22
};

const myFunction = function(){
    console.log("Hello world");
}

//to know data type of any variable, use 'typeof'
console.log(typeof myFunction); // O/p: function
console.log(typeof heroes); // O/p: object
console.log(typeof myObj); // O/p: object
console.log(typeof null); // O/p: object



//*********************************** */
// Stack (Primitive), Heap(Non-Primitive)


/*
let name_1 = "abhishek";

let name_2 = name_1;    //name_2 won't get reference of original value
                        // but it will get copy of original value of 'name_1',
                        // bcz 'string' is stored in Stack
name_2 = "papita kumar";     

console.log(name_1);
console.log(name_2);

*/

/*

let obj_1 = {
    name:"abhishek",
    age:22
}

let obj_2 = obj_1; // obj_2 will get refernce of orginal value stored in 'heap' memory
//Both obj_1 and obj_2 point to same memory address
obj_2.name = 'Sumit Kumar'; // Original object will get changed

console.log(obj_1);
console.log(obj_2);

*/