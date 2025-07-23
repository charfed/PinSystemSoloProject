const {Teacher} = require ('../models/');



const getAll = async(req,res)=> {
try {
  const teachers = await Teacher.findAll();
  res.status(200).send(teachers)
} catch (error) {
  res.status(404).send(error)
  throw error
}
}

const getOne = async (req,res)=> {
  const {id} = req.params
try {
  const teacher =  await Teacher.findByPk(id);
  res.status(200).send(teacher)
} catch (error) {
  res.status(404).send(error)
  throw error
}
}

const addOne = async (req,res) => {
   const {name} = req.body
   try {
  const teacher =  await Teacher.create({name});
  res.status(201).json(teacher)
} catch (error) {
  res.status(404).send(error)
  throw error
} 
}

const removeOne = async (req,res) => {
     const {id} = req.params
try {
  const teacher =  await Teacher.destroy({where : {id : id}});
  res.status(204).send("teacher removed")
} catch (error) {
  res.status(404).send(error)
  throw error
}
}

const modifyOne = async (req,res) => {
     const {id} = req.params
     const {name} = req.body

try {
  const teacher =  await Teacher.update(name,
    {where : {id : id} });
  res.status(204).send(teacher)
} catch (error) {
  res.status(404).send(error)
  throw error
}

}



module.exports = {getAll,getOne,addOne,removeOne,modifyOne}