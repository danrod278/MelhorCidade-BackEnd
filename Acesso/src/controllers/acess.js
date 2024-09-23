const {testaAcesso} = require("../services/acess")
exports.acessController = async (req, res)=>{
    try{
        const hashbody = req.body.cookie
        testaAcesso(req, res, hashbody)
    }catch(err){
        console.error("Erro ao verificar cookie "+err)
    }
}
