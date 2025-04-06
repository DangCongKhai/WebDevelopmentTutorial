import express from "express";
import {fileURLToPath} from 'url'
import { dirname } from "path";
import morgan from "morgan";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
let bandName = "";
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(bodyParser.urlencoded({extended : true}));

function bandNameGenerator(req, res, next){
  console.log(req.body);
  bandName = req.body['street'] + req.body['pet'];
  next();
}
app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/submit", (req, res) => {
  res.send("<h1> Your band name is: </h1>" + 
    `${bandName}`
  )
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
