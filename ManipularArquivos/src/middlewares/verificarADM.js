const axios = require("axios")
const {dotenvVariables} = require("../../dotenvVariables")
exports.verificarADMMiddleware = async(req, res, next)=>{
    try {
        const {_idUser} =req.body
        const queryADM = await axios.post(dotenvVariables.ACESS_MS+'api/verificarADM', {_idUser:_idUser})
        
        if(queryADM.data.acess){
            next()
        }else{
            return res.json({mensagem:"Acesso negado", acess:false})
        }
    } catch (error) {
        res.json({mensagem:'Houve um erro ao verificar se o usuario é administrador', acess:false})
    }
}
