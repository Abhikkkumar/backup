const lang = ["js", "ruby", "cpp", "java"];

// lang.forEach( function (item){
//     console.log(item);
// });
//NOTE: callback function will be anonymus if we are writing it in 'forEach'.
//      If we have declared the function somewhere else, then we can use the named function by giving it as callback

// function printMe(elem){
//     console.log(elem);
// }

// lang.forEach(printMe);

/*
// Other parameters in forEach
// 1st parameter is "item" present in arr, 2nd is "index", 3rd is complete arr
lang.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

*/

const myCode = [
  {
    lang: "JavaScript",
    extension: "js",
  },
  {
    lang: "C Plus Plus",
    extension: "cpp",
  },
  {
    lang: "C",
    extension: "c",
  },
];

// myCode.forEach((item) => {
//   console.log(item);
// });

//  NOTE: forEach doesn't return anything by default.
const ans = myCode.forEach((item) => {
  return item;
})
console.log(ans); // o/p:undefined
