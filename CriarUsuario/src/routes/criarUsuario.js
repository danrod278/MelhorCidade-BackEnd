const express = require("express")
const router = express.Router()
const {criarUsuarioController} = require('../controllers/criarUsuario')

router.post("/criarConta/:nome/:email/:senha/:cpf/:idade/:endereco", criarUsuarioController)

module.exports = router
