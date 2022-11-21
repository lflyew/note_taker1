const express = require("express");
// const apiroutes = require("./routes/index.js");
const apiroutes = require("./routes/index");
const htmlroutes = require("./routes/routeshtml.js");
const path = require("path")
const notes = require("./db/db.json")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));

});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));

});

app.get('/api/notes', (req, res)=>{
res.json(notes)
})
// app.use("/api", apiroutes);
// app.use("/", htmlroutes);

app.listen(PORT, () =>
console.log(`Express server listening on port ${PORT}!`)
);
