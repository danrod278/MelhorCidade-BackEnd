const {Usuario} = require('../models/Usuario')


exports.verificarCadastros = async(data)=>{
    try{
        const consulta = await Usuario.find({email:data.email})
        
        return consulta

    }catch(err){
        console.error('Houve um erro ao buscar um cadastro '+err)
    }
}

exports.buscaHash = async (hash) => {
    try{
        const consulta = await Usuario.find({hashTemporario:hash})
        return consulta
    }catch(err){
        console.error('Erro ao buscar o hash no banco de dados: '+err)
    }
}

exports.salvarHash = async (idUsuario, hash)=>{
    try{
        const gravacao = await Usuario.findOneAndUpdate(
            {_id:idUsuario},
            {hashTemporario:hash},
            {new:true, upsert: true})

        return gravacao
    }catch(err){
        console.error("Erro ao salvar o hash no BD",err)
    }
}