const express = require("express")
const router = express.Router()
<<<<<<< HEAD
const {acessController} = require('../controllers/acess')

router.post("/acess", acessController)
=======
const {acessController } = require('../controllers/acess')
const {verificarIdController} = require("../controllers/verificarId")

router.post("/acess", acessController)
router.post("/verificarId", verificarIdController)
>>>>>>> d3b1e142296eed6f513a65c5911cd0831e0241ce

module.exports = router
