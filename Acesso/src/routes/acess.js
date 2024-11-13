const express = require("express")
const router = express.Router()
const {acessController, verificarADMController} = require('../controllers/acess')
const {verificarIdController} = require("../controllers/verificarId")

router.post("/acess", acessController)
router.post("/verificarId", verificarIdController)
router.post("/verificarADM", verificarADMController)
module.exports = router
