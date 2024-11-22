const {Post} = require("../models/Post")
const {buscarPost} = require("../repositories/validacao")

exports.mudarStatusDenuncia = async (CodigoDenuncia, mudancas)=>{
    const testeExistenciaPost = await buscarPost(CodigoDenuncia)
    if(testeExistenciaPost.length>0){
        const date = new Date()
        const atualizacao = await Post.updateOne(
            { CodigoDenuncia:CodigoDenuncia },
            { $set:{ OqueFoiFeito:mudancas, StatusDenuncia:"Resolvido", statusDenunciaChange: date }})
        if(atualizacao.modifiedCount>0){
            return true
        }else{
            return false
        }
    }else{
        return "Esse post não existe!"
    }
}

