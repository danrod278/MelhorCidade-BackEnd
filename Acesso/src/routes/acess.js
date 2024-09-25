const express = require("express")
const router = express.Router()
const {acessController } = require('../controllers/acess')
const {verificarIdController} = require("../controllers/verificarId")

router.post("/acess", acessController)
router.post("/verificarId", verificarIdController)

module.exports = router
