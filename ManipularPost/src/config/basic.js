const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())

app.use(bodyParser.urlencoded({limit:"50mb",extended:true}))
app.use(bodyParser.json({limit:"50mb"}))

module.exports = app
