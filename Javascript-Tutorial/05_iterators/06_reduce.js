// reduce function - it is used to add each elements of an array

const nums = [1, 2, 3];

// const ans = nums.reduce(
//     function(accumulator,currentValue){
//         console.log(`accumulator: ${accumulator} currentValue:${currentValue}`);
//         return accumulator+currentValue;
//     },0); // here '0' is initial value of accumulator

const ans = nums.reduce((acc, curr) => acc + curr, 0);

// console.log(ans);

const cart = [
  { itemName: "js course", price: 2999 },
  { itemName: "python course", price: 999 },
  { itemName: "ML course", price: 11999 },
  { itemName: "Mobile Development course", price: 13999 },
];

const priceToPay = cart.reduce((acc, curr) => acc + curr.price, 0); //using REDUCE function, we are calculating price of items in shopping cart.
console.log(priceToPay);
