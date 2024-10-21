const {buscarPost} = require("../repositories/validacao")
const {salvarComentario} = require("../repositories/comentarios")
const { v4: uuidv4 } = require('uuid');

exports.salvarComentario = async (_idUser, conteudo, _idPost, res)=>{
    try{
        const buscaPost = buscarPost(_idPost)
        if(buscaPost.length>0){
            const salvar = salvarComentario(_idUser, conteudo, _idPost, uuidv4())
            console.log(salvar)
            if(salvar){
                res.json({mensagem:"sucesso", acess:true})
            }else{
                res.json({mensagem:"Erro ao fazer comentario", acess:false})
            }
        }
    }catch(err){
        console.error("Erro ao tentar salvar comentario")
        res.json({mensagem:"Erro ao tentar salvar comentario", erro:err})
    }
}