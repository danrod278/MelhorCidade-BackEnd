const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({limit:"7mb",extended:true}))
app.use(bodyParser.json({limit:"7mb"}))

module.exports = app