const name = "abhishek";
const repoCount = 50;

// console.log(name+repoCount + " Value"); // concatenate. NOT RECOMMENDED

// console.log(`Hello! my name is ${name} and my repo count is ${repoCount}.`); //String Extrapolation

const gameName = new String("Abhishek kumar");
// console.log(gameName);
// console.log(typeof gameName); //object

// console.log(gameName[0]);   // o/p: A
// console.log(gameName.__proto__);

//  console.log(gameName.length);//gives length of 'gameName'
// console.log(gameName.toUpperCase()); // gives 'gameName' in UPPER CASE
// console.log(gameName.charAt(3)); // gives char at inded 3
// console.log(gameName.indexOf('k')); // gives index of char 'k'

/*
const slicedString = gameName.substring(0, 4);  // stores value from inded with start = 0 and end =4. End not included in O/p.
console.log(slicedString);  // O/p: Abhi

const slice_1 = gameName.slice(-4,-1);//if indexStart < 0,  indexStart = max(indexStart+str.length,0)
                                        //if indexEnd < 0, indexEnd = max(indexEnd + str.length,0)
console.log(slice_1);

*/

/*

const str_1 = "    abhishek   ";
console.log(str_1);
console.log(str_1.trim()); //removes white space and new line 

const url = "https://abhi.com/abhi%20kumar";
const replacedUrl = url.replace("%20","-"); // replace "%20" with "-"
console.log(replacedUrl);

console.log(url.includes("abhi")); //checks whether "abhi" is present in 'url' string

const t1 = "abhi-kumar-tutorial";
const split_t1 = t1.split("-"); // split the string on the basis of "-" and creates an array.
                                // O/p: [ 'abhi', 'kumar', 'tutorial' ]
console.log(split_t1);

*/