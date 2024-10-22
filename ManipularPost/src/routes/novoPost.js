const express = require("express")
const router = express.Router()
const {controllerNovoPost} = require("../controllers/NovoPostController")

router.post("/novaDenuncia", controllerNovoPost)
router.post("/carregarPost", )
module.exports = router
