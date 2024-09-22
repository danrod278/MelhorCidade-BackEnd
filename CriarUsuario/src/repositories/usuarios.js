const {Usuario} = require('../models/novoUsuarioBD')

exports.NovoUsuario = async (data)=>{
    try{
        const nUser = new Usuario(data)
        await nUser.save()
        return data

    }catch(err){
        console.error("Erro ao salvar um novo usuario no banco de dados "+err)
    }
}

exports.verificarCadastros = async(email)=>{
    try{
        const emailQuery = await Usuario.find({email:email})
        console.log(emailQuery)
        return emailQuery

    }catch(err){
        console.error('Houve um erro ao buscar um cadastro '+err)
    }
}
