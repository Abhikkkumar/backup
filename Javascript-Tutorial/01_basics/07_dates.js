// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate); // O/p: object
// console.log(myDate.toString()); // O/p: Mon Oct 02 2023 00:30:28 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // O/p: Mon Oct 02 2023
// console.log(myDate.toLocaleString()); // o/p: 2/10/2023, 12:35:19 am

let myCreatedDate = new Date(2023, 0, 23); // to create any date 
// console.log(myCreatedDate.toLocaleString()); o/p: 23/1/2023, 12:00:00 am

let timeStamp = Date.now();//gives date in milliseconds from EPOCH (January 1, 1970) till now
// console.log(timeStamp);
// console.log(myCreatedDate.getTime()); // gives milliseconds from epoch to given date
// console.log(Math.floor(Date.now()/1000)); //to get time in seconds

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()); // gives current month (0-11)
// console.log(newDate.getDay()); // gives current day (0-6)

// let customDate = newDate.toLocaleString('default',{
//     //in this object we give properties which we 
//     //want in our output
//     weekday:"long"
// });
// console.log(customDate);

// GO TO MDN DOCS AND READ ABOUT DATE