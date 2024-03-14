import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname= dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

var bandName='';
//don't meshup order of middleware
app.use(bodyParser.urlencoded({extended:true}));

//custom middleware
function bandNameGenerator(req,res,next){
  console.log(req.body);
  bandName = req.body.street+req.body.pet;
  next();
}
app.use(bandNameGenerator);

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
})
app.post("/submit",(req,res)=>{
  
  const ans = `<h1>Your band name is</h1><h2>${bandName}🤞</h2>.`;
  res.send(ans);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
