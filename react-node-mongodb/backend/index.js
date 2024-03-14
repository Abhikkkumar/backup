import express from "express";
import("./db/config.js");
import User from "./db/User.js";
import Product from "./db/Product.js";

import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register",async (req,res)=>{
    let user1 = new User(req.body);
    let result = await user1.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});
app.post("/login",async (req,res)=>{
    try{
        if(req.body.email && req.body.password){
            let response = await User.findOne({"email":req.body.email}).select("-password");
            if(response)
                res.send(response);
            else{
                res.send("No User found with this details.");
            }
        }
        
    }catch(err){
        // res.send("Some error occured.");
        console.log(err);
    }
});

app.post("/add-product",async (req,res)=>{
    
    try{
        
        const prod1 = new Product(req.body);
        
        const response = await prod1.save();
        
        res.send(response);

    }catch(err){
        res.send(err);
        
    }
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000.");
})