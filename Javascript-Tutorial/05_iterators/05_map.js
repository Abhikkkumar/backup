//map

const myNums = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const ans = myNums.map((eachItem) => eachItem + 10);
// console.log(ans);

// Chaining - we apply 2 or more functions on an array

const out = myNums
  .map((item) => item * 10)
  .map((item) => item + 1)
  .filter((item) => item > 150);
console.log(out);
