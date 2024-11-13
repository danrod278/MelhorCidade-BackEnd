const {salvarImagem} = require("../services/manipularImagensServices")

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
        res.json({mensagem:err, acess:false})
    }

}
