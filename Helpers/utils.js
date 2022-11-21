const fs = require('fs');
// const uuid = require('uuid');
const path = require('path');


//delete note through id
function deleteNote(id, allNotes) {
    const NotesFilter = allNotes.filter((note) => note.id !== id);

    fs.writeFile(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(NotesFilter),
        (writeErr) =>
        writeErr
        ? console.error(writeErr)
        : console.info("Successfully deleted!")
    );
    
}
//add new note
function addNewNote(title, text) {
    const newNote = {
        title,
        text,
        id: Math.floor(Math.random()*1000000000),

    };
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        if (err) {
            console.error(err);
        } else {

            const allNotes = JSON.parse(data);

            allNotes.push(newNote);

//write reviews back to file

            fs.writeFile(
                path.join(__dirname, "../db/db.json"),
                JSON.stringify(allNotes, null, 4),
                (writeErr) =>
                writeErr
                ? console.error(writeErr)
                : console.info("Successfully updated!")
            );
        }
        });
        return newNote;
    }

    module.exports = {
    addNewNote,
    deleteNote,

};


