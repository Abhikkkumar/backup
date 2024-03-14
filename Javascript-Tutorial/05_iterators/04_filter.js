
//filter is used to return elements from an array according to some condition.
// Array is provided as an output
const myNums = [11,12,13,14,15,16,17,18,19,20]
/*
// const out = myNums.filter((eachItem)=> eachItem > 14 );//IMPLICIT RETURN
const out = myNums.filter((eachItem)=>{
    return eachItem > 14
} ); //RETURN is explicitly mentioned because {} is used i.e. a 'scope' has been opened

*/

const out = myNums.filter((eachItem)=>{
    return (eachItem > 14 && eachItem <19);
} ); //RETURN is explicitly mentioned because {} is used
// console.log(out);

/********* Filter use case */

const books =[
    {title:"book 1", genre:"fiction", publish:1998},
    {title:"book 2", genrer:"Science", publish:1981},
    {title:"book 3", genre:"History", publish: 2004},
    {title:"book 4", genre:"fiction", publish: 2022},
    {title:"book 5", genre:"History", publish:1992},
    {title:"book 6", genre:"Science", publish:2008}
]

// const ans = books.filter((eachBook)=> eachBook.genre === 'History'); // returns book having its genre as 'History'
const ans = books.filter((eachBook)=> eachBook.publish >= 2000);
console.log(ans);
