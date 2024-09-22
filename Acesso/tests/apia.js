const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const axios = require("axios")

app.use(express.json())
app.post('/apib', (req, res)=>{
    console.log(req.body)
    if(!req.user){        
        console.log("salvando user")
        req.user={}
       
    }
    if(!req.user.acess){
        console.log("salvando acess")
        req.user.acess = {}
    }
    if(!req.user.acess.hash){
        console.log("salvando hash")
        req.user.acess.hash = req.body.hash
        console.log(req.body.hash)
    }
    else if(req.user.acess.hash){
        console.log(req.user.acess.hash)
    }

})

app.listen(3000, ()=>{
    console.log("Rodando na porta 3000")
})
