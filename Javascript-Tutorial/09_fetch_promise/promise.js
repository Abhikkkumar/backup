// const promiseOne = new Promise(function(resolve,reject){
//     // Do an async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     },1000);
// });

// promiseOne.then(function(){
//     console.log("Promise Consumed.");
// })

//---------- Promise can also be written as below

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2 completed");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Promise 2 consumed!");
// })

//--------- we can pass data receiced from async task using 'resolve()' method

// const promise3 = new Promise(function(resolve,reject){
//     //async task
//     setTimeout(()=>{
//         console.log("Async task 3 completed.");
//         resolve({name:"Abhi",role:"developer"});
//     },1000);
// })
// promise3.then(function(data){
//     console.log(data);
// })

// -------------- chaining

// const promise4 =new Promise(function(resolve,reject){
//     setTimeout(function(){
//         const err = false;
//         console.log("async task 4 completed");
//         if(!err)
//             resolve({name:"Papita",role:"developer"});
//         else
//             reject({error:"Something went wrong!"});
//     },1000)
// })

// promise4.then((data)=>{
//     console.log("inside first then");
//     return data.role; // returned data will go to the next then

// }).then((role)=>{
//     console.log("Role is ",role);
// }).catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Promise 4 is completed")
// })

// ------ async/await

// const promise5 =new Promise(function(resolve,reject){
//     setTimeout(function(){
//         const err = true;
//         console.log("async task 4 completed");
//         if(!err)
//             resolve({name:"Papita",role:"developer"});
//         else
//             reject({error:"Something went wrong!"});
//     },1000)
// })

// async function consumePromise5(){
//     try{
//         const result = await promise5;
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }
// consumePromise5();

//-------> example if ASYNC / AWAIT 
// async function getUser(){
//     try{
//         const users = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await users.json(); // convert received data in JSON format
//         console.log(data);
//     }catch(err){
//         console.log("Error: ",err);
//     }
// }
// getUser();

// ---------> doing above API call using .then() method
 fetch("https://api.github.com/users/Abhikkkumar")
 .then((response)=>{
     return response.json();
 }).then((data)=>{
     console.log(data);
 }).catch((error)=>{
     console.log(error);
 })
