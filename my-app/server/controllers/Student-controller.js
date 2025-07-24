const { Op } = require('sequelize');
const {Student ,Sequelize} = require ('../models/');



const searchStudents = async (req,res)=> {

  console.log("queeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeery",req.query)

  const { name, type, genre, behavior } = req.query
console.log("filrter",req.query)

  try {
    const searchTerm = {}
    if(name){
      searchTerm.name = {[Op.like] : `%${name}%`}
    }
    if(behavior){
      searchTerm.behavior = {[Op.like] : `%${behavior}%`}
    }
    if(genre){
      searchTerm.genre = genre
    }
    const students =  await Student.findAll({where :searchTerm})
    
    return res.status(200).send(students)

  } catch (error) {
    res.send(404).send("not found")
  }


}


const getAll = async(req,res)=> {
try {
  const students = await Student.findAll();
  res.status(200).send(students)
} catch (error) {
  res.status(404).send(error)
  throw error
}

}

const getOne = async (req,res)=> {
  const {id} = req.params
try {
  const student =  await Student.findByPk(id);
  res.status(200).send(student)
} catch (error) {
  res.status(404).send(error)
  throw error
}
}

const addOne = async (req,res) => {
const {name,status,genre,picture,behavior,greenPin,bluePin,redPin,teacherId} = req.body
   try {
  const student =  await Student.create({name,status,genre,picture,behavior,greenPin,bluePin,redPin,teacherId});
  res.status(201).send(student)
} catch (error) {
  res.status(404).send(error)
  throw error
} 
}

const removeOne = async (req,res) => {
     const {id} = req.params
     
try {
  const student =  await Student.destroy({where : {id : id}});
  res.status(204).send("Student removed")
} catch (error) {
  res.status(404).send(error)
  throw error
}

}

const modifyOne = async (req,res) => {

     const {id} = req.params
     const {name,status,genre,picture,behavior,greenPin,bluePin,redPin} = req.body
     

try {
  
  
  const student =  await Student.update({name,status,genre,picture,behavior,greenPin,bluePin,redPin},
    {where : {id : id} });
  res.status(201).send(student)
} catch (error) {
  res.status(404).send(error)
  throw error
}

}



module.exports = {getAll,getOne,addOne,removeOne,modifyOne,searchStudents}