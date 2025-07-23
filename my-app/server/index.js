const express = require("express");
let app = express();
const cors = require("cors")
const db = require("./models")
const routerStudents = require('./routes/Student-route.js')
const routerTeachers = require('./routes/Teacher-route.js')


app.use(express.static(__dirname + "/../public/"));
app.use(express.json())
app.use(cors())

app.use('/api/students',routerStudents)
app.use('/api/teachers',routerTeachers)

let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
