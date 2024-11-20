const {Post} = require("../models/Post")
const {Validar_ID} = require("../repositories/validacao")
exports.salvarComentario = async(_idUser, conteudo, CodigoDenuncia, _idComentario)=>{
    try{
        const usuario = await Validar_ID(_idUser)
        const nome = usuario[0].nome
        console.log(nome)
        const salvarComentario = await Post.updateOne({CodigoDenuncia:CodigoDenuncia},
            {$push:{
                comentarios:{_idUsuario:_idUser, _idComentario:_idComentario, conteudo:conteudo, nome:nome}}
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
