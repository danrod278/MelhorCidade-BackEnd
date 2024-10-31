const express = require("express")
const router = express.Router()
const { salvarImagemController, lerImagensController } = require('../controller/manipularImagensControllers')

router.post("/salvarImagem", salvarImagemController)

module.exports = router
