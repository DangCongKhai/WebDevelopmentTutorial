import express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url';


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
// const d = new Date();
// let day = d.getDay();
// let result = "";
// let advice = "";

// if (day != 0){
//     result = "weekday";
//     advice = "go to sleep";
// }else{
//     result = "weekend";
//     advice = "work harder";
// }

// app.listen(port, () => {
//     console.log(`Listen to port ${port}`);
// })

// app.get("/", (req, res) => {
//     res.render(__dirname + "/views/index.ejs", 
//         {daytype : result, advice : advice}
//     );
// })

app.get("/", (req, res) => {
    let bowls = ["banana", "apple", "orange"]

    res.render(__dirname+"/views/index.ejs", 
        {fruits : bowls}
    )
})




