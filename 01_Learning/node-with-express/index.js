import { resolveSoa } from "dns";
import express from "express";
const app =express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send(`Hello Visitors! Welcome to ${port}/`);
})
app.get("/about",(req,res)=>{
    res.send("You are on About Page.");
})
app.post("/register",(req,res)=>{
    res.sendStatus(201);
    // The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource
})
app.put("/user/angela",(req,res)=>{
    res.sendStatus(200);
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})