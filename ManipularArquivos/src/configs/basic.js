const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const cors = require("cors")


app.use(cors())

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

module.exports = app
