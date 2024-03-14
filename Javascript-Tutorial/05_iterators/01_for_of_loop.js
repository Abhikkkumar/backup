// "for of" loop

// ["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// takes each element of "arr" in "num"
// for (const num of arr){
//     console.log(num);
// }

// const greet = "Hello world!";
// for(const letter of greet){
//     console.log(letter);
// }

// Maps
/* 1. Objects containing key-value pairs which are unique.
    2. It remembers the order.
*/

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of India");
map.set("Fr", "France");
map.set("IN", "India");
// console.log(typeof map); // o/p: object
// console.log(map);
// for(const elem of map){
//     console.log(elem);  // logs each key-value pair as an array
// }

for (const [key, value] of map) {
  // we hold key and value after destructuring for each key-value array given as output
  console.log(key, ":-", value);
}

// IMP NOTE : "Maps" are iterable but "normal objects" are not, using 'for of' loop
