// singleton - only one instance is created (using constructor)
// Object.create



// object literal

const mySym = Symbol("key1");
const JsUser = {
    name:"abhi",
    "full name":"abhishek kumar",
    [mySym]:"mykey1", //using  symbol
    age:18,
    location:"bihar",
    email: "abhi@gmail.com",
    isLoggedIn:false,
    lastLogin:["Monday","Saturday"]
}
//ways to acces an object
// console.log(JsUser.email); 
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); //accessing symbol in JsUser
// console.log(typeof JsUser[mySym]); //string

// JsUser.email = "papita@google.com";//changing value of any key

// Object.freeze(JsUser);//avoid any change in JsUser object
// JsUser.email = "papita@yahoo.com"; //no change took place in JsUser

// a greeting function is added in 'JsUser'
// JsUser.greeting = function(){
//     console.log("Hello JS User");
// }        
// JsUser.greeting(); // calling the function
// console.log(JsUser);

// adds "anotherGreet" funt in JsUser
JsUser.anotherGreet = function(){
    //'this' keyword is used to refer to current object
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser);
JsUser.anotherGreet(); // calling the function anotherGreet; it returns 'undefined'

