const axios = require("axios")

exports.verificarCookie = async (req, res, next)=>{
    
    try{
        const form = req.body

        if(form._idUser && form.cookie){
            const permicao = await axios.post("http://localhost:3000/api/acess", {cookie:form.cookie, _idUser:form._idUser}, {
                headers: {
                    'Content-Type': 'application/json'
                }})
            console.log(permicao.data)
            if(permicao.data.acess){
                next()
            }
            else{
                res.json({mensagem:"Necessário um cookie ou um id válido para acessar esse serviço", acess:false})
            }
        }else{
            res.json({mensagem:"Id ou cookie inexistentes", acess:false})
        }
    }catch(err){
        console.error(err)
        res.json({mensagem:"Erro ao tentar verificar cookie e id", erro:err, acess:false})
    }
}
