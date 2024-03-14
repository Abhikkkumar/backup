import express from "express";

const app=express();
const port = 3000;



app.get("/",(req,res)=>{
    const d= new Date();
    let dayNumber= d.getDay();
    let day="";
    let adv="Its time to work hard";
    switch(dayNumber){
        case 0:
            day="Sunday";
            adv="Its time to have fun";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            adv="Its time to have fun";
            break;
    }

    res.render("index.ejs",{
    
        day:day,
        advice:adv
    
    });
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}.`);
})