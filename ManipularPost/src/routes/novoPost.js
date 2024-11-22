const express = require("express")
const router = express.Router()
const {controllerNovoPost, carregarDenunciasController, carregarPostsPorDataController, carregarPostsPorId} = require("../controllers/NovoPostController")

router.post("/novaDenuncia", controllerNovoPost)
router.post("/carregarPost", carregarDenunciasController)
router.post("/carregarPostsPorData", carregarPostsPorDataController)
router.post("/carregarPostsPorId", carregarPostsPorId)

module.exports = router
