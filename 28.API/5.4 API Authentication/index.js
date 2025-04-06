import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";


const yourUsername = "dangcongkhai";
const yourPassword = "123";
const yourAPIKey = "81480bf7-1b06-4183-a8b9-e63c93b0ee31";
const yourBearerToken = "7e97884e-c7e5-4355-8b53-7e33296a3ab2";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try{
    const response = await axios.get(API_URL + "random" );
    res.render("index.ejs", {content : JSON.stringify(response.data)})
  }catch (error){
    console.log(error);
  }
  
});

app.get("/basicAuth", async (req, res) => {
  try{
    const response = await axios.get(API_URL + "all", {
      params: {
        page : 1
      },
      auth : {
        username : yourUsername,
        password : yourPassword
      }
    })
    res.render("index.ejs", {content : JSON.stringify(response.data)})
  }catch (error){
    console.log(error)
  }
  
});

app.get("/apiKey", async (req, res) => {
  try{
    const response = await axios.get(API_URL + "filter",{
      params : {
        apiKey : yourAPIKey,
        score : 2
      },
      // auth : {
      //   // apiKey : yourAPIKey
      // }
    })
    res.render("index.ejs", {content : JSON.stringify(response.data)})
  }catch (error){
    console.log(error);
  }
  
});

app.get("/bearerToken", async (req, res) => {
  try{
    const response = await axios.get(API_URL + "secrets/2", {
      headers : {
        Authorization : `Bearer ${yourBearerToken}`
      }
    })
    console.log(response.data);
    res.render("index.ejs", {content : JSON.stringify(response.data)})
  }catch(error){
    console.log(error)
  }
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



 //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.


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


    //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.



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







