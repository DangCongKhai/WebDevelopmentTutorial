import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next){
  console.log(`Url is : hello${req.url}`)
  console.log(`Request method ${req.method}`)
  next();
}

app.use(logger);


// This is the handler 
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
