/*
const user = {
    username:"abhishek",
    loginCount : 10,
    getUsername:function(){
        console.log(this.username);
    },
    getCurrentContext:function(){
        console.log(this); // this will lead to printing of all data of current context
                            // o/p: {
                                    //     username: 'abhishek',
                                    //     loginCount: 10,
                                    //     getUsername: [Function: getUsername],
                                    //     getCurrentContext: [Function: getCurrentContext]
                                    // }
    }
}

user.getUsername(); // o/p: abhishek
// user.getCurrentContext();
console.log(this); // o/p: {} bcz current context is empty in node environment

*/

function createUser(userName, userId, userType) {
  this.userName = userName;
  this.userId = userId;
  this.userType = userType;

  return this;
}

// const user1 = createUser('abhay', 100,'M');
// const user2 = createUser('mamta',23,'F'); // here, user2 will replace values of user1

const user1 = new createUser("Abhay", 112, "M");
const user2 = new createUser("mamta", 300, "F"); // here, values of user1 will not be replaced because 'new' keyword has been used

// 'new' keyword gives a new instance of createUser function everytime
console.log(user1);
// console.log(user2);
