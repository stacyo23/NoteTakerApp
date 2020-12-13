//requires express to use
const express = require('express');

//tells node to create an express server
const app = express();

//creates a variable for the port to listen on
var PORT = process.env.PORT || 8080;

//tells the express app to parse date into understandable values
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//exports the routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//starts the application
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });