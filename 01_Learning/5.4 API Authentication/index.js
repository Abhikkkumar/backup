import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "munnabhishek";
const yourPassword = "munna@turki";
const yourAPIKey = "dd2bafae-0edf-4f2a-94cf-cbe317916bff";
const yourBearerToken = "b8c93202-41e3-4c8f-a7d6-d237c02755b4";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try{
    const response = await axios.get(API_URL+`random`);
    const result = response.data;
    let res1 = JSON.stringify(result);
    res.render("index.ejs",{content:res1});
  }catch(error){
   console.log("error: "+error);
   res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
 

 try{
  const response = await axios.get(API_URL+`all`,{
                                    auth:{
                                      username: yourUsername,
                                      password:yourPassword
                                    }
                                  });
  const result = response.data;
  let res1 = JSON.stringify(result);
  res.render("index.ejs",{content:res1});
}catch(error){
 console.log("error: "+error);
 res.status(404).send(error.message);
}

});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  const useLink = API_URL+`filter?score=${5}&apiKey=${yourAPIKey}`;
  try{
    const response = await axios.get(useLink);
    const result = response.data;
    let res1 = JSON.stringify(result);
    res.render("index.ejs",{content:res1});
  }catch(error){
    console.log("error: "+error);
    res.status(404).send(error.message);
  }

});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
 const useLink = API_URL+`secrets/${42}`;
  try{
    const response = await axios.get(useLink,{
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      }
    });
    const result= response.data;
    let res1 = JSON.stringify(result);
    res.render("index.ejs",{
      content:res1
    });
  }catch(error){
    console.log("error: "+ error);
    res.status(404).send(error.message);
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
