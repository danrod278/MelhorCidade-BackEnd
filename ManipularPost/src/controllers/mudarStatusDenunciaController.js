const {mudarStatusDenunciaService} = require("../services/mudarStatusDenunciaService")

exports.mudarStatusDenunciaController = async(req, res)=>{
    try {
        const {cookie, _idUser, mudancas, CodigoDenuncia} = req.body
        if(cookie && _idUser && mudancas && CodigoDenuncia){
            mudarStatusDenunciaService(cookie, _idUser, mudancas, CodigoDenuncia, res)
        }else{
            return res.json({mensagem:"É necessário o cookie, _idUser, mudancas e CodigoDenuncia para usar esse serviço", acess:false})
        }
    } catch (error) {
        console.error("Erro ao tentar mudar Status da denúncia", err)
        return res.json({mensagem:"Erro ao tentar mudar Status da denúncia", acess:false})
    }
}
