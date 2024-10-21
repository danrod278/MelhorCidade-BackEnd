const {Post} = require("../models/Post")
const {Usuario} = require('../models/Usuario')

exports.Validar = async (id, CodigoDenuncia) =>{
    const buscaPost = await Post.find({CodigoDenuncia:CodigoDenuncia})
    const buscaId = await Post.find({
        Validacoes: {
            $elemMatch: {
                _Id_Usuario: id
            }
        },
        CodigoDenuncia:CodigoDenuncia
    });
        console.log("validacao encontrada",buscaId)
        if(buscaId.length>0){
            const retirarValidacao = await Post.updateOne({CodigoDenuncia:CodigoDenuncia}, {$pull:{Validacoes:{_Id_Usuario:id}}})
            return retirarValidacao
        }else{
            const adicionarValidacao = await Post.updateOne({CodigoDenuncia:CodigoDenuncia}, {$push:{Validacoes:{_Id_Usuario:id}}})
            return adicionarValidacao
        }
    }

exports.procurarValidacao = async (CodigoDenuncia, idUser) => {
    const result = await Post.find({CodigoDenuncia:CodigoDenuncia},
         {Validacoes:{_Id_Usuario:idUser}}
    )
    return result
}

exports.Validar_ID = async (_id)=>{
    const testId = await Usuario.find({_id:_id})
    return testId
}

exports.buscarPost = async (_idPost)=>{
    try{
        const buscaPost = await Post.find({CodigoDenuncia:CodigoDenuncia})
        return buscaPost
    }catch(err){
        console.error("Erro ao buscar pelo post "+err)
        return err
    }
}