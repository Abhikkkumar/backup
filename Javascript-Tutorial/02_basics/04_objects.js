// const tinderUser = new Object() //sigleton object
const tinderUser = {} // non-singleton user

tinderUser.id = '123abc'
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;
 
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "abhishek",
            lastname: "kumar"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1={
    1:"a",2:"b"
}
const obj2 ={
    3:"a",4:"b"
}
// const obj3={obj1,obj2};


// const obj3 = Object.assign(obj1,obj2); // o/p: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }; INCORRECT WAY TO USE
//in above code, value of 'obj2' is added into 'obj1'
//So, it is bette to give a empty target object to avoid modification of 'obj1'
// const obj3 = Object.assign({},obj1,obj2); // CORRECT WAY TO USE
// console.log(obj3);

// const obj3 = {...obj1, ...obj2}; //using spread operator to combine 2 obj
// console.log(obj3);

// console.log(Object.keys(tinderUser)); // returns an array contining all keys of an object
// console.log(Object.values(tinderUser)); // returns an array contining all values of an object
// console.log(Object.entries(tinderUser)); // converts each key-value pair in array and store each of these in another array

console.log(tinderUser.hasOwnProperty("isLogged")); // checks if 'isLogged' key is present in 'tinderUser'


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// destructuring in Objects
const {courseInstructor : instructor, price} =course;
console.log(instructor, price);


