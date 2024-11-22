const express = require("express")
const router = express.Router()
const {validarPostController} = require("../controllers/validacao")
const {carregarComFiltrosController, carregarPostsPorLocalizacaoController} = require("../controllers/NovoPostController")

router.post("/validacao", validarPostController)
router.post("/carregarComFiltros", carregarComFiltrosController)
router.post("/carregarPostsLocalizacao", carregarPostsPorLocalizacaoController)

module.exports = router
