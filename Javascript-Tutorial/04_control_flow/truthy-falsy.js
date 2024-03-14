const userEmail = "abhishek@gmail.com";

if(userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

// falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN


// All other values are TRUTHY values
// '0', 'false', " ", [], {}, function(){}

// if(userArr.length===0{
//     console.log("array is empty");
// }

let emptyObj ={}; 
//how to detect empty object
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}