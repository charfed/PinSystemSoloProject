const express = require("express");
let app = express();
const cors = require("cors")
const db = require("./models")


app.use(express.static(__dirname + "/../public/"));
app.use(express.json())
app.use(cors())


let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
