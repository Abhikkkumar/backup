import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let listArr=[];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

function Day(){
    const d= new Date();
    let dayNumber= d.getDay();
    let day="";
    
    switch(dayNumber){
        case 0:
            day="Sunday";
            
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
           
            break;
    }
    return day;
}

app.get("/",(req,res)=>{
    
    res.render("index.ejs",{weekDay:Day()});
})

app.post("/submit",(req,res)=>{
    let newItem = req.body.input;
    listArr.push(newItem);
    if(listArr.length>0)
        res.render("index.ejs",{List:listArr, weekDay:Day()});
    else
        res.render("index.ejs",{weekDay:Day()});
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}.`);
})