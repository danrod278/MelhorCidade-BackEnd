const express = require("express")
const router = express.Router()
const {acessController} = require('../controllers/acess')

router.post("/acess", acessController)

module.exports = router
