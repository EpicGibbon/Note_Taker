//Dependencies
//We need to include the path package to get the correct file path for our HTML

let path = require("path");

//=================
//Routing
//=================
module.exports = function(app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


    //HTML get requests
    //Below code handles when users "visit" a page.
    //In each of the below cases the user is shown an HTML page of content

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });


    //If no matching route is found then default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
};