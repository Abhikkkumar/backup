import express from "express"
import bodyParser from "body-parser"
import axios from "axios"


const app = express();
const port = 3000;
const accessToken = "1689827954849465";
const baseUrl = `https://superheroapi.com/api/${accessToken}`

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/image",async (req,res)=>{
    console.log(req.body);
    let charName = req.body.charName;
    try{
        let response = await axios.get(baseUrl+"/search/"+charName);
        // console.log("url: " + baseUrl+"/search/"+charName);
        // console.log(response.data);
        let thisData = {
            name : charName,
            imgLink : response.data.results[0].image
        }
        console.log(thisData);
        res.render("index.ejs",{
            data:thisData
        });
        // console.log(response.data.results);
    }catch(error){
        console.log(error);
        res.status(500).render("index.ejs",{err:error});
    }
})

app.listen(port,()=>{
    console.log(`App is running at port ${port}`);
})