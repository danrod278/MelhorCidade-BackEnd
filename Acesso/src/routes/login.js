const express = require("express")
const router = express.Router()
const {criarUsuarioController} = require('../controllers/login')

router.post("/login/:email/:senha", criarUsuarioController)

module.exports = router
