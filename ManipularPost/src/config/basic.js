const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.options('*', cors())

app.use(bodyParser.urlencoded({limit:"7mb",extended:true}))
app.use(bodyParser.json({limit:"7mb"}))

module.exports = app
