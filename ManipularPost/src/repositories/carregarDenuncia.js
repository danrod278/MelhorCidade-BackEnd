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

exports.carregarDenunciasPorTurn = async(turn)=>{
    try {
        const denuncias = await Post.find().sort({createdAt:-1}).skip(15*turn).limit(15)
        return denuncias
    } catch (error) {
        return err
    }
}


exports.apagaDenuncia = async(CodigoDenuncia)=>{
    const testeExistencia = await this.pegarDenunciaDB(CodigoDenuncia)
    if(testeExistencia.length>0){
        var delet = await Post.deleteOne({CodigoDenuncia:CodigoDenuncia})
        if(delet.deletedCount>0){
            return {mensagem:testeExistencia[0], status:true}
        }else{
            return {status:false, mensagem:"Erro ao deletar a denúncia"}
        }
    }else{
        return {mensagem:"necessário um Códiogo de denúncia válido", status:false}
    }
}

exports.buscaPostsPorId = async(_idUser)=>{
    
    const buscausuario = await this.buscarUsuarioDB(_idUser)
    if(buscausuario.length>0){
        const posts = await Post.find({"Descricao.ID_usuario":_idUser})
        return posts    
    }else{
        return false
    }
}
