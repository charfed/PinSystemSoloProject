const express = require("express")
const {getAll,getOne,addOne,removeOne,modifyOne} = require("../controllers/Student-controller.js")
const router = express.Router()






router.get('/',getAll)
router.get('/:id',getOne)
router.post('/',addOne)
router.delete('/:id',removeOne)
router.put('/:id',modifyOne)

module.exports = router