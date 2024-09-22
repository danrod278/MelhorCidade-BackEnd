const express = require("express")

const bodyParser = require('body-parser')
const session = require("express-session")
const dotenvVariables = require("../../dotenvVariables")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true}));

app.use(session({
    secret:dotenvVariables.dotEnvVariables.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
}))

module.exports = app
