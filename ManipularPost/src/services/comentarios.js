const {buscarPost} = require("../repositories/validacao")
const {salvarComentario} = require("../repositories/comentarios")
const { v4: uuidv4 } = require('uuid');

exports.salvarComentario = async (_idUser, conteudo, CodigoDenuncia, res)=>{
    try{
        const buscaPost = await buscarPost(CodigoDenuncia)
        
        if(buscaPost.length>0){
            const salvar = await salvarComentario(_idUser, conteudo, CodigoDenuncia, uuidv4())
            if(salvar){
                res.json({mensagem:"Sucesso ao fazer o comentário", acess:true})
            }else{
                console.error("Erro ao tentar salvar comentario")
                res.json({mensagem:"Erro ao fazer comentario", acess:false})
            }
        }
    }catch(err){
        console.error("Erro ao tentar salvar comentario"+err)
        res.json({mensagem:"Erro ao tentar salvar comentario", erro:err})
    }
}

