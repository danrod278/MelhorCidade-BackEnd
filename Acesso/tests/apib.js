const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const axios = require("axios")

app.use(express.json())
app.post('/apia', (req, res)=>{
    console.log('enviando')
    axios.post('http://localhost:3000/apib', { hash: 232134 }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(err=>{
        console.log("Erroo:"+err)
    })
})

app.listen(3001, ()=>{
    console.log("Rodando na porta 3001")
})