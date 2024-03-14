// Array

const myArr = [0,1,3,"abhishek"];
// Arrays are RESIZABLE, can hold different datatype elements.
// console.log(myArr[0]);

// const myArr2 = new Array(2,3,4,66);
// console.log(myArr2);

// Array Methods

// myArr.push(6);  //adds a value at the end of 'myArr'
// myArr.pop();    // removes last value
// myArr.unshift(3); // adds a elemet at the start of myarr
// myArr.shift(); // removes added elem in unshift method

// console.log(myArr.includes(6)); // check if 6 exist in 'myArr' and return boolean ans. o/p: false

// console.log(myArr.indexOf(3)); // gives index of element 3
// const newArr = myArr.join();// converts array into string.
// console.log(newArr);    // o/p:0,1,3,abhishek

// console.log(myArr);

//------------- slice ,splice ----------

const slicedArr = myArr.slice(1,4);
//console.log(slicedArr); // cuts the array from start=1 to end =4. End not included.
                    //In slice,original array is not modified

const splicedArr = myArr.splice(1,2);   // end = 2 is included in splicing.
console.log(splicedArr);      
console.log(myArr);     // Original array is modified. After splicing, remaining array = [ 0, 'abhishek' ] 
