// comparison b/w same data type is Good.
// console.log(1>=2);
// console.log(2==2);

//comparison b/w string and number 
console.log(2=="2"); //"2" gets converted into 2, then comparison happens. O/p: true


//comparison b/w different data types must be avoided
console.log(null>=0);   //  O/p:true
console.log(null==0);   //  O/p:false, bcz 'comparison' operator and equality operator works differently


// triple equality operator
console.log("2"===2); //    O/p: false