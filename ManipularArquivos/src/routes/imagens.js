const express = require("express")
const router = express.Router()
const { salvarImagemController, lerImagensController } = require('../controller/manipularImagensControllers')

router.post("/salvarImagem", salvarImagemController)
router.post("/lerImagens", lerImagensController)

module.exports = router
