const {testaAcesso} = require("../services/acess")
<<<<<<< HEAD
exports.acessController = async (req, res)=>{
    try{
        const hashbody = req.body.cookie
        testaAcesso(req, res, hashbody)
    }catch(err){
        console.error("Erro ao verificar cookie "+err)
=======

exports.acessController = async (req, res)=>{
    try{
        const hashbody = req.body.cookie
        const _id = req.body._id
        
        testaAcesso(req, res, hashbody, _id)
    }catch(err){
        console.error("Erro ao verificar cookie "+err)
        res.json({mensagem:"Erro ao verificar cookie ", acess:false})
>>>>>>> d3b1e142296eed6f513a65c5911cd0831e0241ce
    }
}
