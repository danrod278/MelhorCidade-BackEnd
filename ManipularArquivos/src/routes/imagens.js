const express = require("express")
const router = express.Router()
const { salvarImagemController, atualizarImagemController, deletarImagemController} = require('../controller/manipularImagensControllers')
const { verificarADMMiddleware } = require("../middlewares/verificarADM")

router.post("/salvarImagem", salvarImagemController)
router.post("/trocarImagem", verificarADMMiddleware, atualizarImagemController)
router.post("/deletarImagem", verificarADMMiddleware, deletarImagemController)

module.exports = router
