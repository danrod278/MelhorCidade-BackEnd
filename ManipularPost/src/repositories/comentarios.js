const {Post} = require("../models/Post")

exports.salvarComentario = async(_idUser, conteudo, CodigoDenuncia, _idComentario)=>{
    try{
        const salvarComentario = await Post.updateOne({CodigoDenuncia:CodigoDenuncia},
            {$push:{
                comentarios:{_idUsuario:_idUser, _idComentario:_idComentario, conteudo:conteudo}}
            }
        )
       
        if(salvarComentario.modifiedCount>0){
            return true
        }
        else{
            return false
        }
    }catch(err){
        console.error("Erro ao salvar o comentario "+err)
        return err
    }
}
