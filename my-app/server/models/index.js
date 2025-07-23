
const { Sequelize, DataTypes } = require('sequelize');
const config = require("../config/config-data.js")
const Student = require('../models/Student.js')
const Teacher = require('../models/Teacher.js')

const connectToMysql = new Sequelize(config.database, config.user, config.password, {
  host: 'localhost',
  dialect: 'mysql'

});

async function SystemCon() {
try {
  await connectToMysql.authenticate();
  console.log('Connection to pinsystem has been established successfully.');

} catch (error) {
  console.error('Unable to connect to the pinsystem database:', error);
}
}

SystemCon()

const db = {}

db.Sequelize = Sequelize
db.connectToMysql = connectToMysql

db.Student = Student(connectToMysql,DataTypes)
db.Teacher = Teacher(connectToMysql,DataTypes)


module.exports = db

// connectToMysql.sync({ alter: true })




