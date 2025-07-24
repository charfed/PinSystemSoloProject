const {Student} = require ('../models/');



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
const {name,type,sex,picture,behavior,greenPin,bluePin,redPin,teacherId} = req.body
   try {
  const student =  await Student.create({name,type,sex,picture,behavior,greenPin,bluePin,redPin,teacherId});
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
     const {name,type,sex,picture,behavior,greenPin,bluePin,redPin} = req.body

try {
  const student =  await Student.update({name,type,sex,picture,behavior,greenPin,bluePin,redPin},
    {where : {id : id} });
  res.status(204).send(student)
} catch (error) {
  res.status(404).send(error)
  throw error
}

}



module.exports = {getAll,getOne,addOne,removeOne,modifyOne}