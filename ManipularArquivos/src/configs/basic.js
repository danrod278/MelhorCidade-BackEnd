const express = require("express")
const bodyParser = require('body-parser')

const app = express()


app.use(bodyParser.json({limit:"3mb"}))
app.use(bodyParser.urlencoded( { limit: '3mb', extended: true}));

module.exports = app
