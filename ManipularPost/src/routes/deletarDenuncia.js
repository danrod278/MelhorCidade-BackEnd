const express = require("express")
const router = express.Router()
const {deletarDenunciaController} = require('../controllers/deletarDenunciaController')

router.post("/deletarDenuncia", deletarDenunciaController)

module.exports = router
