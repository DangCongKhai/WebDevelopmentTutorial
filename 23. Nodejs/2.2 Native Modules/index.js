import fs from 'fs'

// fs.writeFile("message.t", "My name is Khai", (err) => {
//     if (err) throw err;
//     console.log(err);
// })


fs.readFile( 'message.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})


