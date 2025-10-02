import express from "express";
import fs from "node:fs";
import path from "node:path"

const app = express();
const __dirname = import.meta.dirname
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

let comment;

fs.readFile('guestbook.json', 'utf-8', (err, data) => {
    if(err){
        console.error("Error reading file: ", err);
        return;
    }
    comment = JSON.parse(data);
})

app.get("/guestbook", (req, res) => {
    console.log(comment.length)
    const reversedComment = comment.reverse()
    const info = reversedComment.map(item => `<div style="background: #fff; border-left: 4px solid #007bff; padding: 10px; margin-bottom: 15px; border-radius: 5px;">
      <div style="font-weight: bold">${item.name}</div>
      <div style=" font-size: 0.9em; color: gray;">${item.time}</div>
      <div class="message">${item.comment}</div>
    </div>`)
    res.send(`
        <html>
        <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;"> 
            <h1 style="text-align: center; margin-bottom: 20px;">Comments Here...</h1>
            <section style="max-width: 500px; margin: 0 auto;">
                ${info}
            </section>
        </body>
        </html>
        `);
            
    res.sendFile(path.join(__dirname, "public/guestbook.html"))
    
})

app.listen(3000, console.log("Listening on port 3000"))