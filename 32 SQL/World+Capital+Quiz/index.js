import express from "express";
import bodyParser from "body-parser";
import pg from 'pg'

const {Client} = pg;


const app = express();
const port = 3000;

let quiz = [];
const client = new Client({
  user : 'postgres',
  password : 'dangcongkhai123',
  host : 'localhost',
  port : 5432,
  database : 'hotel'
})

await client.connect();

let query = "select c.country, c.capital, f.flags from capitals as c join flags as f on c.id = f.id"
try{
  const result = await client.query(query);
  quiz = result.rows

}catch(error){
  console.log(error.stack);
}finally{
  await client.end();
}





let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
