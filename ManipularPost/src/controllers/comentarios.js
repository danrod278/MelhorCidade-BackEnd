const axios = require('axios')
const {salvarComentario} = require("../services/comentarios")
exports.comentarController = async (req, res)=>{
    try{
        const {conteudo, _idUser, CodigoDenuncia} = req.body
        salvarComentario(_idUser, conteudo, CodigoDenuncia, res)
    }
    catch (err){
        console.error("Erro ao fazer comentário "+err)
        res.json({mensagem:"Erro ao fazer comentário", err:err})
    }
}
