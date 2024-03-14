const form = document.querySelector("form"); //selects form tag

//use submit event on form
form.addEventListener("submit",(event)=>{
    event.preventDefault(); //stop default action of submit event i.e. prevent 'post' or 'get' submit
    const height = parseInt(document.querySelector("#height").value); // get value from '#height' field and convert it into Integer
    const weight = parseInt(document.querySelector("#weight").value); // get value from '#weight' field and convert it into Integer
    
    const result = document.querySelector("#result"); // select 'result' id
    
    // isNaN() is used to check if parameter is NaN or not. o/p: true (if parameter is NaN)
    if(height==='' || height<=0 || isNaN(height))
        result.innerHTML= `Please enter correct height ${height}`; // displaying result in elem having id = "result"
    else if(weight==='' || weight<=0 || isNaN(weight))
        result.innerHTML = `Please enter correct weight ${weight}`;
    else{
        const bmi = (weight/((height*height)/10000)).toPrecision(2);
        result.innerHTML = `BMI = ${bmi}`;
    }
});
