const express = require("express")
const router = express.Router()
const {criarUsuarioController} = require('../controllers/login')

router.post("/login", criarUsuarioController)

module.exports = router
