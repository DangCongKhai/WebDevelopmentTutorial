import express from 'express'
import bodyParser from 'body-parser';


const app = express()
const port = 3000;
let info_array = [];

app.use(bodyParser.urlencoded({extended : true}))

app.get("/", (req, res) => {
    res.render("index.ejs", 
        {info_array : info_array}
    );
})

app.post("/submit", (req, res) => {
    info_array.push([req.body['fname'], req.body['lname']]);

    res.render("index.ejs", 
        {info_array : info_array}
    )
})


app.listen(port, () => {
    console.log(`Listen at port ${port}`)
})

