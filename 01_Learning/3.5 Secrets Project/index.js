//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
const port = 3000;
var isAuthenticate = false;


app.use(bodyParser.urlencoded({extended:true}));

//  Custom Middleware
function passAuth(req,res,next){
    if(req.body.password==="ILoveProgramming")
        isAuthenticate=true;
    next();
}

app.use(passAuth);


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})
app.post("/check",(req,res)=>{
    if(isAuthenticate){
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        // res.sendFile(__dirname+"/public/index.html");
        res.redirect("/");
    }
})

app.listen(3000,()=>{
    console.log(`App is running at Port ${port}.`);
})
