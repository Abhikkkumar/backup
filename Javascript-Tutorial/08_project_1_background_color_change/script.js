//fucntion to generate random hexadecimal color code 
function generateColor(){
    const hexdigit = '0123456789ABCDEF';
    let colorCode='#';
    for(let i=0;i<6;i++){
        let a = Math.floor(Math.random()*16);
        colorCode += hexdigit.charAt(a);
        
    }
    return colorCode;
}
//function to add randomly generated hex color codes to background color of body
function changeColor(){
    document.body.style.backgroundColor=generateColor();
}
let btnIntervalReference = null; // varaible to store setInterval reference;

//when we click on 'start' button, then setInterval function get activated.
document.querySelector("#start").addEventListener("click",()=>{
    btnIntervalReference = setInterval(changeColor,1000);
});
//when se click on 'stop' button, then clearInterval function is activated.
document.querySelector("#stop").addEventListener("click",()=>{
    if(btnIntervalReference)
        clearInterval(btnIntervalReference);
})