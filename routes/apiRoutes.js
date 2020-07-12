//================
//LOAD DATA
//We are linking our routes to a source of db/db.json
//These data sources hold JSON of information on notes
//=================

let noteData = require("../db/db.json");
const { v1: uuidv1 } = require('uuid');
const { urlencoded } = require("express");


//==============
//Routing
//==============

module.exports = function (app) {
    //API GET Requests
    //Below code handles when users "visit" a page
    //In each of the below cases when a user visits a link
    //(ex Localhost:PORT/api/noteData.. they are shown a JSON of the data in the table)

    app.get("/api/notes", function (req, res) {
        res.json(noteData);
        console.log(noteData);

    });

    //API POST REQUEST
    //Below code handles when a user submits a form and thus submits data to the server
    //In each of the below cases, when a user submits form data (a JSON object)

    app.post("/api/notes", urlencoded, (req, res) => {
        const noteObj = req.body;
        noteObj.id = uuidv1();
        fs.writeFile(db, noteObj, (err) => {
            console.log("youve sucessfully created a note!");
            if (err) {
                return err;
            }
            res.send("Success!")
        })
    });

    app.delete("/api/notes/:" + noteobj.id)
};



