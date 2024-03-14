// let score = "33ab";
// let convertedData = Number(score)
// console.log(convertedData); // o/p: NaN
// console.log(typeof convertedData)   // o/p: number

// let score = false;
// let convertedData = Number(score)
// console.log(convertedData);     //o/p: 0
// console.log(typeof convertedData)   // o/p: number

//----Conversion to number type---------

/*
        score       Number(score)
        "22"        22
        "22sd"      NaN
        null        0
        undefined   NaN
        true        1
        false       0

*/


//----Conversion to boolean type--------
// let score = undefined;
// let convertedData = Boolean(score)
// console.log(convertedData);
// console.log(typeof convertedData)

/*
    score       Boolean(score)
    1           true
    0           false
    ""          false
    "app"       true
    null        false
    undefined   false


*/

//----Conversion to string type--------
// let score = undefined ;
// let convertedData = String(score)
// console.log(convertedData); // o/p: undefined
// console.log(typeof convertedData)   // o/p: string

//***********Operations***************/
/*
console.log(2+3);   //5
console.log(2-3);   //-1
console.log(2*3);   //6
console.log(2**3);  //2^3 =8
console.log(20/3);   // 6.66666
console.log(2%3);   //2

console.log(2+"3");         //23
console.log("2"+3+4);       //234
console.log(2+3+"4");       //VVI.. 54

*/

// console.log(+true);     // o/p:1, type conversion into "number" takes place
// console.log(+"");       // o/p:0, type conversion into "number" takes place



