const {testaAcesso} = require("../services/acess")
exports.acessController = async (req, res)=>{
    try{
        const hashbody = req.body.cookie
        const _id = req.body._id
        testaAcesso(req, res, hashbody, _id)
    }catch(err){
        console.error("Erro ao verificar cookie "+err)
    }
}
