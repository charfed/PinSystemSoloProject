const {Student} = require ('../models/');



const getAll = async(req,res)=> {
try {
  const students = await Student.findAll();
  res.status(200).json({message : "Teachers fetched",students})
} catch (error) {
  res.status(404).json(error)
  throw error
}
}


const getOne = async (req,res)=> {
  const {id} = req.params
try {
  const student =  await Student.findByPk(id);
  res.status(200).json({message : "Student fetched",student})
} catch (error) {
  res.status(404).json(error)
  throw error
}
}

const createOne = async (req,res) => {
   const {body} = req.body
   try {
  const student =  await Student.create(body);
  res.status(201).json({message : "Student created",student})
} catch (error) {
  res.status(404).json(error)
  throw error
} 
}

const removeOne = async (req,res) => {
     const {id} = req.params
try {
  const student =  await Student.destroy({where : id});
  res.status(200).json({message : "Student destroyed",student})
} catch (error) {
  res.status(404).json(error)
  throw error
}
}

const modifyOne = async (req,res) => {
     const {id} = req.params
     const {body} = req.body

try {
  const student =  await Student.update(body,{where : id});
  res.status(200).json({message : "Student modified",student})
} catch (error) {
  res.status(404).json(error)
  throw error
}

}



module.exports = {getAll,getOne,createOne,removeOne,modifyOne}