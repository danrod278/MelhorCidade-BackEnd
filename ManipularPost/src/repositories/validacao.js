const {Post} = require("../models/Post")

exports.Validar = async (id, CodigoDenuncia) =>{
    const adicionarValidacao = await Post.updateOne({CodigoDenuncia:CodigoDenuncia}, {$push:{_Id_Usuario:id}})
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

