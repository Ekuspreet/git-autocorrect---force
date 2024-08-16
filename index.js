const express = require("express");

// imports
const app = express();
const bodyParser = require('body-parser');
require("module-alias/register");


// Setting up the view engine.
app.set("view engine", "ejs");


app.use(express.static("./public"));
app.use(bodyParser.json());

// Defining the routes here.
require("@routes/web.routes.js")(app);
require("@routes/api.routes.js")(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
