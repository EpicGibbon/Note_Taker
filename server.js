//Dependencies
const express = require("express");
const { v1: uuidv1 } = require('uuid');
//calling the express module into action
const app = express();

const PORT = process.env.PORT || 3000;
//Express Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static("public"));




app.post("/api/notes", (req, res) =>{

const noteObj = req.body;

noteObj.id = uuidv1();

})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    
})