const marvel_heros = ["thor", "Ironman","spiderman"];
const dc_heros = ['superman','flash','batman'];

// marvel_heros.push(dc_heros); //dc_heros will get pushed in marvel_heros

const allHeros = marvel_heros.concat(dc_heros); // add elems of dc_heros in marvel_heros
// console.log(allHeros);

//---------- Spread Operator -----------

// const all_superHeroes = [...marvel_heros,...dc_heros]; // spread the value of marvel_heros and then dc_heros
// console.log(all_superHeroes);

// const arr_1 = [1,2,3,[4,5,6],7,[8,9,[10,11]]];
// const arr_2 = arr_1.flat(Infinity); // concat elem of all subarrays into single array and returns the array
// console.log(arr_2);

const name = "abhishek";
// console.log(Array.isArray(name));   // checks if name is an array or not
// console.log(Array.from(name));  // creates an array from name;
// console.log(Array.from({fname:"papita"})); // JS can't decide what should it use to form an array, 'key' or 'value'.
//                                         // so, return empty array
let score1=100;
let score2=200
let score3= 300;

console.log(Array.of(score1,score2,score3)); //forms an array using given variables