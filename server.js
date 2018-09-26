const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const path = require('path');
const bcrypt = require('bcryptjs');
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})