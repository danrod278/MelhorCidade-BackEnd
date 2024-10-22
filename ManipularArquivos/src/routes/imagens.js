const express = require("express")
const router = express.Router()
const { salvarImagemController } = require('../controller/salvarImagemControllers')

router.post("/salvarImagem", salvarImagemController)

module.exports = router
