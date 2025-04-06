import express from "express";
import bodyParser from "body-parser";
import pg from 'pg'

const {Client} = pg;
const app = express();
const port = 3000;
let visited_countries = []

// Further consideration
const client = new Client({
  user :  "postgres",
  password :  "dangcongkhai123", //default process.env.PGPASSWORD
  host : "localhost", // default process.env.PGHOST
  port :  5432, // default process.env.PGPORT
  database :  'world', // default process.env.PGDATABASE || user
} )
await client.connect()

async function getVisitedCountries(){
  let countries = [];
  try {
    const result = await client.query("select country_code from visited_countries");
    const rows = result.rows;
    rows.forEach(country => {
      countries.push(country['country_code']);
    });
  } catch (error) {
    console.log(error);
  }
  return countries;
}

async function getCountryCodeFromCountryName(country_name){
  const query = "SELECT * from country where LOWER(country_name) ILIKE $1";
  const result = await client.query(query, [country_name]);
  return result.rows;
}



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
 
  visited_countries = await getVisitedCountries();
  console.log(visited_countries);
  res.render("index.ejs", {
    total : visited_countries.length, 
    countries : visited_countries
  });
});


app.post("/add", async (req, res) => {
  
  try {
    
    const countryResult = await getCountryCodeFromCountryName(`%${req.body.country.toLowerCase()}%`);

    if (countryResult.length == 0){
      // console.log(`Country name ${req.body.country} not found`)
      return res.render("index.ejs",{
        total : visited_countries.length,
        countries : visited_countries,
        error : `Country name ${req.body.country} not found`
      })
    }else if (visited_countries.find(country => country == countryResult[0]['country_code'])){
      return res.render("index.ejs",{
        total : visited_countries.length,
        countries : visited_countries,
        error : `Country name ${req.body.country} already existed`
      })
    }
    
    await client.query('BEGIN');
    const insertQuery = "INSERT INTO visited_countries(id, country_code, country_name) VALUES ($1, $2, $3) " 
    const insertValues = [parseInt(countryResult[0]['id']), countryResult[0]['country_code'], countryResult[0]['country_name']];
    await client.query(insertQuery, insertValues);
    await client.query("COMMIT");

  } catch (error) {
    console.log(error)
    await client.query("ROLLBACK")
  }

  return res.redirect("/");

  
})
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
