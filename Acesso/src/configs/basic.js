const express = require("express")
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const app = express()
const cors = require("cors")
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.options('*', cors())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true}));

module.exports = app
