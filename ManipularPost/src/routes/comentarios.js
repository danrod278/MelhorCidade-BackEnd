const express = require("express")
const router = express.Router()
const {comentar} = require("../controllers/comentarios.js")

router.post("/comentar", comentar)
router.post("/apagarComentario", validarPostController)

module.exports = router
