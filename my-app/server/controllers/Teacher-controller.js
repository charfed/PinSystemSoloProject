const {Teacher} = require ('../models/');



const getAll = async(req,res)=> {
try {
  const teachers = await Teacher.findAll();
  res.status(200).json({message : "Teachers fetched",teachers})
} catch (error) {
  res.status(404).json(error)
  throw error
}
}

const getOne = async (req,res)=> {
  const {id} = req.params
try {
  const teacher =  await Teacher.findByPk(id);
  res.status(200).json({message : "Teacher fetched",teacher})
} catch (error) {
  res.status(404).json(error)
  throw error
}
}

const createOne = async (req,res) => {
   const {body} = req.body
   try {
  const teacher =  await Teacher.create(body);
  res.status(201).json({message : "Teacher created",teacher})
} catch (error) {
  res.status(404).json(error)
  throw error
} 
}

const removeOne = async (req,res) => {
     const {id} = req.params
try {
  const teacher =  await Teacher.destroy({where : id});
  res.status(200).json({message : "Teacher destroyed",teacher})
} catch (error) {
  res.status(404).json(error)
  throw error
}
}

const modifyOne = async (req,res) => {
     const {id} = req.params
     const {body} = req.body

try {
  const teacher =  await Teacher.update(body,{where : id});
  res.status(200).json({message : "Teacher modified",teacher})
} catch (error) {
  res.status(404).json(error)
  throw error
}

}



module.exports = {getAll,getOne,createOne,removeOne,modifyOne}