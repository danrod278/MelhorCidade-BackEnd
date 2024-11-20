const axios = require("axios")

exports.verificarCookie = async (req, res, next)=>{
    
    try{
        const form = req.body
        console.log(form)
        if(form._idUser && form.cookie){
            const permicao = await axios.post("https://ca0734f8-7429-4f58-83fb-17e6d34b8169-00-1q77a8k6pxaqh.janeway.replit.dev:3000/api/acess", {cookie:form.cookie, _idUser:form._idUser}, {
                headers: {
                    'Content-Type': 'application/json'
                }})
            if(permicao.data.acess){
                
                return next()
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
