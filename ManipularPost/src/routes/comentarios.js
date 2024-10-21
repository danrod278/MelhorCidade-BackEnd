const express = require("express")
const router = express.Router()
const {comentarController} = require("../controllers/comentarios.js")

router.post("/comentar", comentarController)
//router.post("/apagarComentario", validarPostController)

module.exports = router
