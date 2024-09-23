const express = require("express")
const router = express.Router()
const {validarPost} = require("../controllers/validacao")

router.post("/validacao", validarPost)

module.exports = router
