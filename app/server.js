const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require("./routing/apiRoutes.js");
require("./routing/htmlRoutes.js");

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});