import express from 'express'

const app = express();
const PORT = 3000;


app.listen(PORT, () => {
  console.log("Listen at port ", PORT)
})


// Create GET, POST, PUT, PATCH, DELETE


app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>")
})

app.post("/post", (req, res) => {
  res.sendStatus(201);
})

app.put("/put", (req, res) => {
  res.sendStatus(202);
})

app.patch("/patch", (req, res) =>{
  res.sendStatus(200);
})

app.delete("/delete", (req, res) => {
  res.sendStatus(200);
})