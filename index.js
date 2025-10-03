import express from "express";
import fs from "node:fs";
import path from "path";

const app = express();
app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const __dirname = import.meta.dirname;
const file = __dirname+"/public/guestbook.json"


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.post('/', (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    const time = req.body.time;

    if(!name || !message){
        return res.status(400).send('All fields are required');
    }

    let details = {
        name, comment: message, time: new Date().toLocaleTimeString()
    }

    const data = fs.readFileSync(file);
    const jsonData = JSON.parse(data);
    jsonData.push(details);
    fs.writeFileSync(file, JSON.stringify(jsonData), 'utf-8', (err) => {
        if(err) throw err;
        console.log('Data added to the file')
    });

    console.log(details)
    res.send(`Your form has been submitted successfully. You can return home`);
})

let comment;

fs.readFile(file, 'utf-8', (err, data) => {
    if(err){
        console.error("Error reading file: ", err);
        return;
    }
    comment = JSON.parse(data);
})

app.get("/guestbook", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/guestbook.html'))
})

app.listen(3000, console.log("Listening on port 3000"))