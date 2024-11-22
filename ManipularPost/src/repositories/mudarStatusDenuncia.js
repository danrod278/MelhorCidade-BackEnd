const {Post} = require("../models/Post")
const {buscarPost} = require("../repositories/validacao")

exports.mudarStatusDenuncia = async (CodigoDenuncia, mudancas)=>{
    const testeExistenciaPost = await buscarPost(CodigoDenuncia)
    if(testeExistenciaPost.length>0){
        const atualizacao = await Post.updateOne({CodigoDenuncia:CodigoDenuncia},{OqueFoiFeito:mudancas, StatusDenuncia:"Resolvido"})
        console.log(atualizacao)
        if(atualizacao.modifiedCount>0){
            return true
        }else{
            return false
        }
    }else{
        return "Esse post não existe!"
    }
}

