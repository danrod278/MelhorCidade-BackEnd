const express = require("express")
const router = express.Router()
const {validarPostController} = require("../controllers/validacao")

router.post("/validacao", validarPostController)

module.exports = router
