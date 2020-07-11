//Dependencies
const express = require("express");
const { v1: uuidv1 } = require('uuid');





//Tells node that we are creating an "Express" server
const app = express();
//Sets up initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;


//Express Middleware(handles data parsing)
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static("public"));

//====================
//ROUTER
//The code below points our server to a series of "route" files
//These routes give our server a "map" of how to respond when users visit or request data from various URLS
//====================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//===========
//LISTENER
//The code below "starts" our server
//===========



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    
})