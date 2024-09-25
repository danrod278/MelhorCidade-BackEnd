const axios = require("axios")

exports.verificarCookie = async (req, res, next)=>{
    

    const form = req.body
    const permicao = await axios.post("http://localhost:3000/api/acess", {cookie:form.cookie}, {
        headers: {
            'Content-Type': 'application/json'
        }})
    if(permicao.data.acess){
        next()
    }
    else{
        res.json({mensagem:"Necessário um cookie para acessar esse serivço", acess:false})
    }
}
