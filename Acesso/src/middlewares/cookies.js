const axios = require("axios")

exports.verificarCookieController = async (req, res, next)=>{
    try{
        const cookie = req.body.cookie
        const permicao = await axios.post('http://localhost:3000/api/acess', {cookie:cookie})
        if(permicao.data.acess){
            next()
        }else{
            res.json({mensagem:"Cookie inválido", acess:false})
        }
    }catch(err){
            console.error('Houve um erro ao verficar o Id'+err)
            res.json({mesage:'Houve um erro ao verficar o Id', erro:err})
        }
}
