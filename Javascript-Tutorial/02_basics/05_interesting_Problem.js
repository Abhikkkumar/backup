const input = { a: 1, b: 2, c: 3 };
console.log("input",input);
let output = [];
function converter(arr){
  const [key,value] = arr;
  const temp = {[key]:value};
  output.push(temp);
}
 Object.entries(input).map((arr)=>{
  converter(arr);
});
console.log("output",output);