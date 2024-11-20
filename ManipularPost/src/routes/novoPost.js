const express = require("express")
const router = express.Router()
const {controllerNovoPost, carregarDenunciasController, carregarPostsPorDataController} = require("../controllers/NovoPostController")

router.post("/novaDenuncia", controllerNovoPost)
router.post("/carregarPost", carregarDenunciasController)
router.post("/carregarPostsPorData", carregarPostsPorDataController)

module.exports = router
