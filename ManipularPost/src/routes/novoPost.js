const express = require("express")
const router = express.Router()
const {controllerNovoPost} = require("../controllers/NovoPostController")
router.post("/novoPost", controllerNovoPost)

module.exports = router
