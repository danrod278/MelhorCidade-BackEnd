const {mudarStatusDenunciaService} = require("../services/mudarStatusDenunciaService")

exports.mudarStatusDenunciaController = async(req, res)=>{
    try {
        const {cookie, _idUser, files, mudancas} = req.body
        if(cookie && _idUser && files.length>0 && mudancas){
            mudarStatusDenunciaService(cookie, _idUser, files, mudancas, res)
        }else{
            res.json({mensagem:"É necessário o coolie, _idUser, files em base64 com ao menos um arquivo e no máximo 3, e mudancas", acess:false})
        }
    } catch (error) {
        console.error("Erro ao tentar mudar Status da denúncia", err)
        res.json({mensagem:"Erro ao tentar mudar Status da denúncia", acess:false})
    }
}
