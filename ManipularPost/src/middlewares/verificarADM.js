const axios = require("axios")

exports.verificarADMMiddleware = async(req, res, next)=>{
    try {
        const {_idUser} =req.body
        const queryADM = await axios.post('http://localhost:3000/api/verificarADM', {_idUser:_idUser})
        console.log(queryADM.data)
        if(queryADM.data.acess){
            next()
        }else{
            return res.json({mensagem:"Acesso negado", acess:false})
        }
    } catch (error) {
        res.json({mensagem:'Houve um erro ao verificar se o usuario é administrador', acess:false})
    }
}
