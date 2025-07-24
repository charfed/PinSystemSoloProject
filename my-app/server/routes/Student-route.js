const express = require("express")
const {getAll,getOne,addOne,removeOne,modifyOne,searchStudents} = require("../controllers/Student-controller.js")
const router = express.Router()



router.get('/',getAll)
router.get('/getOne/:id',getOne) // conflicts will happen if you leave the /:id the same as /sear xill be read
router.post('/',addOne)
router.delete('/:id',removeOne)
router.put('/:id',modifyOne)
router.get('/sear',searchStudents)

module.exports = router