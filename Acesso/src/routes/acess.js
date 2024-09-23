const express = require("express")
const router = express.Router()
const {acessController } = require('../controllers/acess')
const {verificarIdController} = require("../controllers/verificarId")
const {verificarCookieController} = require("../middlewares/cookies")

router.post("/acess", acessController)
router.post("/verificarId", verificarCookieController, verificarIdController)

module.exports = router
