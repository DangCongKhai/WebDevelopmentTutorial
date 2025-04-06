import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 3000;

// Host your server on selected port
app.listen(PORT, () => {
  console.log("server is running on port ", PORT)
})

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("hello");
    res.sendFile(path.join(__dirname, "index.html"))
})


