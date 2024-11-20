const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const cors = require("cors")


app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

module.exports = app
