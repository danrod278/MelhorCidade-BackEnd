const axios = require("axios")
const {pegarDenunciaDB, buscarUsuarioDB, buscaPostsPorId} = require("../repositories/carregarDenuncia")

exports.carregarDenunciaService = async(CodigoDenuncia, _idUser, cookie, res)=>{
    try{
        let denunciaDB = await pegarDenunciaDB(CodigoDenuncia)
        
        if(denunciaDB.length>0){           
            var denuncia = JSON.parse(JSON.stringify(denunciaDB[0]))
            const Usuario = await buscarUsuarioDB(denuncia.Descricao.ID_usuario)
            denuncia.nome = Usuario[0].nome/**/
            res.json({mensagem:denuncia, acess:true})
        }else{
            res.json({mensagem:"É necessáro um código de denuncia válido", acess:false})
        }
    }catch(err){
        console.error("Erro ao tentar ler as denúncias", err)
        return res.json({mensagem:"Erro ao tentar ler as denúncias",erro:err, acess:false})
    }
}

exports.carregarPostsPorIdService = async(_idUserSee, res)=>{
    const buscaPosts = await buscaPostsPorId(_idUserSee)
    
    if(!buscaPosts){
        return res.json({mensagem:"Esse Id não existe", acess:false})
    }else{
        return res.json({acess:true, posts:buscaPosts})
    }
}
