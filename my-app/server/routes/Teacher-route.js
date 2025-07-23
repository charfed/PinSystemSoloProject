const express = require("express")
const {getAll,getOne,createOne,removeOne,modifyOne} = require("../controllers/Teacher-controller.js")
const router = express.Router()






router.get('/',getAll)
router.get('/:id',getOne)
router.post('/',createOne)
router.delete('/:id',removeOne)
router.put('/:id',modifyOne)

module.exports = router