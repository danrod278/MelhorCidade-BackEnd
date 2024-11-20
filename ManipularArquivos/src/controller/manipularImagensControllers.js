const {salvarImagem, trocarImagemService, deletarImagemService} = require("../services/manipularImagensServices")

exports.salvarImagemController = async (req, res)=>{
    try{
       
        if(req.body.files.length>0 && req.body.files.length<=3){
            const {files, formato} = req.body
            salvarImagem(res, files, formato)
        }else{
            res.json({mensagem:"É necessário ao menos um arquivo e no máximo 3. Cada imagem deve ter no máximo 1 mega", acess:false})
        }
    }catch(err){
        console.error("Houve um erro ao receber a imagem "+err.message)
        res.json({mensagem:"Houve um erro ao receber a imagem. Verifique os campos", acess:false})
    }

}

exports.atualizarImagemController = async(req, res)=>{
    try {
        const {files, formatoFiles} = req.body
        trocarImagemService(files, formatoFiles, res)
    } catch (error) {
        console.error('Erro ao enviar imagens para trocarImagemService',error)
        res.json({mensagem:"Erro ao atualizar imagens. Verifique os campos", acess:false})
    }
}

exports.deletarImagemController = async(req, res)=>{
    try {
        const {pathName}=req.body
        deletarImagemService(pathName, res)
    } catch (error) {
        res.json({mensagem:"Erro ao deletar imagem. Verifique os campos", acess:false})
    }
}
