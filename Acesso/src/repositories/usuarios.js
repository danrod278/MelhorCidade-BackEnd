const {Usuario} = require('../models/Usuario')

exports.NovoUsuario = async (data)=>{
    try{
        const nUser = new Usuario(data)
        await nUser.save()
        return data

    }catch(err){
        console.error("Erro ao salvar um novo usuario no banco de dados "+err)
    }
}

exports.verificarCadastros = async(data)=>{
    try{
        const consulta = await Usuario.find({email:data.email})
        
        return consulta

    }catch(err){
        console.error('Houve um erro ao buscar um cadastro '+err)
    }
}
