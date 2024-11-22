const express = require("express")
const router = express.Router()
const {validarPostController} = require("../controllers/validacao")
const {carregarComFiltrosController} = require("../controllers/NovoPostController")

router.post("/validacao", validarPostController)
router.post("/carregarComFiltros", carregarComFiltrosController)

module.exports = router
