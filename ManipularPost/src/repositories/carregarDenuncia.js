const {Post} = require("../models/Post")
const {Usuario} = require("../models/Usuario")

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