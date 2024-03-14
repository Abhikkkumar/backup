const user = {
    username: "abhishek",
    price: 999,
    welcomeMessage: function(){
        //'this' is used to denote current context.
        // Here, current context simply means current values of variables.
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }
}
/*
user.welcomeMessage();
user.username= 'sam';   //username changed
user.welcomeMessage();  // welcomeMessage() changes according to change in context.
                        // "this" keyword helps in it.

console.log(this); // it will return {} (empty object) because in 'node', current context is empty object.
                    // but in browser, current context gives window object. #IMPORTANT FOR INTERVIEW    
*/

// function chai(){
//     let username='abhishek'
//     console.log(this.username); // o/p: undefined, it means 'this' doesn't work in function.
// }
// chai()

//*********** Arrow Function ******* */

// let addtwo = ()=>{
//     let username = 'puneet';
//     console.log(this.username); // o/p: undefined

// }
// addtwo();

// let calSum = (n1, n2) =>{
//     return n1 + n2; // return is explicitly mentioned
// }

let calSum = (n1, n2) => n1 + n2; // Implicit return; must be only 1 line in function
console.log(calSum(12,34));
let oneObj = (n1, n2) => ({name:"papita"}); // also Implicit return
// let two = (n1, n2) => {name:"papita"}; // NOT Implicit return; gives error due to {} after arrow

