const {deletarDenunciaService} = require("../services/deletarDenunciaService")

exports.deletarDenunciaController = async(req, res)=>{
    try{
        const {CodigoDenuncia, cookie, _idUser} = req.body
        if(CodigoDenuncia && _idUser && cookie){
            deletarDenunciaService(CodigoDenuncia, cookie, _idUser, res)
        }else{
            res.json({mensagem:"É necessário uma denúncia válida", acess:false})
        }
    }catch(err){
        console.error("Erro ao deletar a denúncia", err)
        res.json({mensagem:"Erro ao deletar a denúncia", acess:false})
    }
}
