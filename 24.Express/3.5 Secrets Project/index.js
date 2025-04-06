// //To see how the final website should work, run "node solution.js".
// //Make sure you have installed all the dependencies with "npm i".
// //The password is ILoveProgramming

// import express from 'express'
// import {fileURLToPath} from 'url'
// import {dirname} from 'path'
// import bodyParser from 'body-parser';

// const app = express();
// const port = 3000;
// // Create directory for accessing fiedls
// const __dirname = dirname(fileURLToPath(import.meta.url));
// let enteredPassWord = "";


// app.use(bodyParser.urlencoded({extended : true}));



// app.get("/", (req, res) =>  {
//     res.sendFile(__dirname + "/public/index.html");
// })

// function getPassWord(req, res, next){
//     console.log(req.body);
//     enteredPassWord = req.body.password;
//     next();
// }
// app.use(getPassWord)


// app.post("/check", (req, res) => {
//     if (enteredPassWord === "ILoveProgramming"){
//         res.sendFile(__dirname + "/public/secret.html");
//     }else{
//         res.sendFile(__dirname + "/public/index.html");
//     }
// })


// app.listen(port, () => {
//     console.log(`Listen from port ${port}`)
// })




/*
yesterday, I learned about middleware
- Middleware: the software that is in the middle of your application and client. 
- Functionality: 
+ Preprocesing: parse the content of your post request, streamline the process of sending request without doing it manually
+ Logging: log error, related information of clients' request
+ Authentication: sign up for a new account, middleware for authentication. Is this person authorized to do so. Ex: change facebook name to handbook--> Middlewareeeeeeeeee
+ Error:


app.use(function())
    next()
--> Order for using middleware is extremely crucial 
*/
import express from 'express'
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
let name = ""; 
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})
app.use(bodyParser.urlencoded({extended : true}))

function checkPassword(req, res, next){
    name = req.body.name;
    console.log(name);
    next();
}


app.get("/", (req, res) => {
    res.sendFile("html");
})

app.post("/submit", (req, res) => {
    res.send()
})