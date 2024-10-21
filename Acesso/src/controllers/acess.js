const {testaAcesso} = require("../services/acess")

exports.acessController = async (req, res)=>{
    try{
        const hashbody = req.body.cookie
        const _id = req.body._idUser
        console.log(hashbody, _id)
        testaAcesso(req, res, hashbody, _id)
    }catch(err){
        console.error("Erro ao verificar cookie "+err)
        res.json({mensagem:"Erro ao verificar cookie ", acess:false})
    }
}
