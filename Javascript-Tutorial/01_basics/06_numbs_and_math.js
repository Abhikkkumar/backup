// const score = 400;
// console.log(typeof score);  //number

// const balance = new Number(100);
// console.log(typeof balance); //object

// console.log(balance.toString()); //typeof: string
// console.log(balance.toString().length);// gives length

// console.log(balance.toFixed(2)); // gives value upto 2 decimal point

// const otherNum = 234.8455666;
// console.log(otherNum.toPrecision(4)); // gives total 4-digits string in the answer. Rounding of value takes place. 
//                                     // O/p: 234.8
// const hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-IN')); // O/p: 10,00,00,000 
//                                                 // changes representation


// ++++++++++++++++++++++ Maths +++++++++++++++++

// console.log(Math); // Object

// console.log(Math.abs(-4));  // gives absolute value
// console.log(Math.round(4.544)); //rounds a number; O/p:5
// console.log(Math.ceil(4.53)); // gives ceil  value; O/p:5
// console.log(Math.floor(4.5334)); // gives floor value; O/p:4
// console.log(Math.min(1,2,4,44)); // gives min value
// console.log(Math.max(1,2,4,44));    // gives max value

// console.log(Math.random()); // generates random value b/w 0 and 1
// console.log(Math.floor(Math.random()*10)+1); // to get value from 1 to 10;

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min)+1)+min); // gives value b/w 'min' and 'max'

