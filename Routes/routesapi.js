const router = require('express').Router();
const { addNewNote, deleteNote } = require('../helpers/utils');
const fs = require('fs');

//GET Route

router.get("/", (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) =>{
        if (err) {
            console.log("There is no note in file!");
        } else {
            res.json(JSON.parse(data));
        }
        });
    });

    //POST Route

    router.post('/', (req, res) => {
        console.info(`${req.method} Request received to add note!`);
        const { title, text } = req.body;
        if (title && text) {
            const notenew = addNewNote(title, text);
            const response = {
                status: "Success",
                body: notenew,
            };
            res.json(response);

        } else {
            res.json('Error');
        }});

        //Delete Route

        router.delete('/:id', (req, res) => {
            console.info(`${req.method} Request received to delete note!`);
            fs.readFile('./db/db.json', 'utf8', (err, Notes) => {
                deleteNote(req.params.id, JSON.parse(Notes));
                res.json(true);
            });
        });

        module.exports = router;
