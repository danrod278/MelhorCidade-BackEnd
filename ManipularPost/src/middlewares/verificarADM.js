const axios = require("axios")

exports.verificarADM = async (req, res, next)=>{
    try{
        const form = req.body
        if(form._idUser){
            const permicao = await axios.post("http://localhost:3000/api/verificarADM", {_idUser:form._idUser}, {
                headers: {
                    'Content-Type': 'application/json'
                }})
            
            if(permicao.data.acess){
                next()
            }
            else{
                res.json({mensagem:"Necessário ser ADM para acessar esse serviço", acess:false})
            }
        }else{
            res.json({mensagem:"Id", acess:false})
        }
    }catch(err){
        console.error(err)
        res.json({mensagem:"Erro ao tentar verificarse é ADM", erro:err, acess:false})
    }
}
