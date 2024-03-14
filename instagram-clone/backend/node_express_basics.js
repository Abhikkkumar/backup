//--------- Node Basics

// const http = require("http"); // import 'http' module

// // 3 types of modules: 1. file based(we create them) 2. built-in (already available) 3.third-party module ( we need to install them )
// //we are creating a server
// const server = http.createServer((req,res)=>{
//     console.log("server created");
//     res.end("Hello World!");
// })

// //running the server on a port
// server.listen(5000,"localhost",()=>{
//     console.log("Server is running on port 5000.");
// })

//------ Server using express

const express = require('express');

const app = express();
const PORT = 5000;
const data = require("./data.js");
const cors = require("cors");

app.use(cors());

app.get("/",(req,res)=>{
    res.json({
        name:"Abhishek",
        email:"abhi@abhi.com"
    });
});
app.get("/data",(req,res)=>{
    res.json(data);
})
app.get("/about",(req,res)=>{
    res.json("Hello Users! we are using Express");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})