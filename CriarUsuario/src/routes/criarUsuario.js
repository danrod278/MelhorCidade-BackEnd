const express = require("express")
const router = express.Router()
const {criarUsuarioController} = require('../controllers/criarUsuario')

router.post("/criarConta", criarUsuarioController)

module.exports = router
