// How to iterate an object in JS ?

// using "for in" loop

const lang = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift for app"
};

for( const key in lang){
    //console.log(key);   // it gives us all the key
    //  console.log(key, ":-", lang[`${key}`]); // to print both key-value pair
    console.log(key, ":-", lang.key);   // we access "value" of 'lang' obj using 'lang.key'
}

// const team = ["Sachin", "Dhoni", "Kohli","Yuvraj","Zaheer"];
// for(const key in team){
//     console.log(key);   // it gives index of 'team' as key. o/p: 0 1 2 3 4
// }

//IMP NOTE :- 'map' are not iterable by 'for in' loop