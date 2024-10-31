const express = require("express")
const router = express.Router()
const {controllerNovoPost, carregarDenunciasController} = require("../controllers/NovoPostController")

router.post("/novaDenuncia", controllerNovoPost)
router.post("/carregarPost", carregarDenunciasController)
module.exports = router
