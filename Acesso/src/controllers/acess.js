const {testaAcesso, verificarADMService} = require("../services/acess")

exports.acessController = async (req, res)=>{
    try{
        const hashbody = req.body.cookie
        const _id = req.body._idUser
        testaAcesso(req, res, hashbody, _id)
    }catch(err){
        console.error("Erro ao verificar cookie "+err)
        res.json({mensagem:"Erro ao verificar cookie ", acess:false})
    }
}


exports.verificarADMController = async(req, res)=>{
    try {
        const {_idUser} = req.body
        if( _idUser){
            verificarADMService(_idUser, res)
        }
    } catch (error) {
        console.error("Houve um erro ao tentar fazer a verificação de ADM")
        res.json({mensagem:"Houve um erro ao tentar fazer a verificação de ADM", acess:true})
    }
}