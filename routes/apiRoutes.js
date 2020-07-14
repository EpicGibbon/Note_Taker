//================
//LOAD DATA
//We are linking our routes to a source of db/db.json
//These data sources hold JSON of information on notes
//=================
const fs = require("fs");
const { v1: uuidv1 } = require('uuid');



//==============
//Routing
//==============

module.exports = function (app) {
    //API GET Requests
    //Below code handles when users "visit" a page
    //In each of the below cases when a user visits a link
    //(ex Localhost:PORT/api/noteData.. they are shown a JSON of the data in the table)

    app.get("/api/notes", function (req, res) {
        const noteData = JSON.parse(fs.readFileSync(`${__dirname}/../db/db.json`, "utf8"))
        res.json(noteData);
        console.log(noteData);
    });

    //API POST REQUEST
    //Below code handles when a user submits a form and thus submits data to the server
    //In each of the below cases, when a user submits form data (a JSON object)

    app.post("/api/notes", (req, res) => {
        console.log("Req Body:", req.body);
        const data = fs.readFileSync(`${__dirname}/../db/db.json`, "utf8")
        let notesArray = JSON.parse(data)
        const noteObj = req.body;
        noteObj.id = uuidv1();
        notesArray.push(noteObj);
        fs.writeFileSync(`${__dirname}/../db/db.json`, JSON.stringify(notesArray))
        console.log("youve sucessfully created a note!");
        res.send("Success!")
    });

    app.delete("/api/notes/:id", (req, res) => {
        let noteData = JSON.parse(fs.readFileSync(`${__dirname}/../db/db.json`, "utf8"));
        const deletedNotes = noteData.filter(function (noteObj) {
            return noteObj.id !== req.params.id;
        })
        fs.writeFileSync(`${__dirname}/../db/db.json`, JSON.stringify(deletedNotes));

        res.json(deletedNotes);

    });
}



