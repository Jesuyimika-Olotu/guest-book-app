import express from "express";
import fs from "node:fs";

const app = express();

app.use(express.json())

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
    const info = reversedComment.map(item => `<div style="background-color: gray; padding: 20px; border-radius: 16px;">${item.comment}</div>`)
    res.send(`
        <html>
        <body> 
            <h1 style="text-align: center; font-family: sans-serif">All Comments</h1>
            ${info}
        </body>
        </html>
        `);
})

app.listen(3000, console.log("Listening on port 3000"))