const {Post} = require("../models/Post")
const {Usuario} = require("../models/Usuario")
const { post } = require("../routes/novoPost")

exports.pegarDenunciaDB = async (CodigoDenuncia)=>{
    try{
        const denuncia = await Post.find({CodigoDenuncia:CodigoDenuncia})
        return denuncia
    }catch(err){
        return err
    }
}

exports.buscarUsuarioDB = async(_idUser)=>{
    try{
        const usuario = await Usuario.find({_id:_idUser})
        return usuario
    }catch(err){
        return err
    } 
}

exports.carregarDenunciasPorTurn = async(turn)=>{
    try {
        const denuncias = await Post.find().sort({createdAt:-1}).skip(20*turn).limit(20)
        return denuncias
    } catch (error) {
        return err
    }
}
