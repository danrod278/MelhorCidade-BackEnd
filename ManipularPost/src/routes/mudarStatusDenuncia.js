const express = require("express")
const router = express.Router()
const {mudarStatusDenunciaController} = require('../controllers/mudarStatusDenunciaController')

router.post("/mudarStatusDenuncia", mudarStatusDenunciaController)
module.exports = router
