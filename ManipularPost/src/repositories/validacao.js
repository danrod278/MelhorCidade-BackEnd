const {Post} = require("../models/Post")
const {Usuario} = require('../models/Usuario')
exports.Validar = async (id, CodigoDenuncia) =>{
    const buscaPost = await Post.find({CodigoDenuncia:CodigoDenuncia})
    const adicionarValidacao = await Post.updateOne({CodigoDenuncia:CodigoDenuncia}, {$push:{Validacoes:{_Id_Usuario:id}}})
    return adicionarValidacao
}

exports.desValidar = async (id, CodigoDenuncia) =>{
    const adicionarValidacao = await Post.updateOne({CodigoDenuncia:CodigoDenuncia}, {$pull:{_Id_Usuario:id}})
    return adicionarValidacao
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