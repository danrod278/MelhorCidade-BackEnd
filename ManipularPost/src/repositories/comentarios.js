const {Post} = require("../models/Post")

exports.salvarComentario = async(_idUser, conteudo, _idPost, _idComentario)=>{
    try{
        const salvarComentario = await Post.updateOne({CodigoDenuncia:_idPost},{$pull:{_idUsuario:_idUser, _idComentario:_idComentario, conteudo:conteudo}})
        if(salvarComentario.modifiedCount>0){
            return true
        }
        else{
            return false
        }
    }catch(err){
        console.error("Erro ao slvar o comentario "+err)
        return err
    }
}