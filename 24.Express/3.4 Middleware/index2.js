import express from "express";
import morgan from 'morgan'


const app = express();
const port = 3000;

app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}))
app.get("/", (req, res) => {
  // console.log(res.json());
  res.send("<h1> hello world </h1>")
 // res.send(res.json);dd
});
  

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
