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

exports.verificarCadastros = async(email, cpf)=>{
    try{
        const emailQuery = await Usuario.find({email:email})
        const cpfQuery = await Usuario.find({CPF:cpf})
        
        return {email:emailQuery, cpf:cpfQuery}

    }catch(err){
        console.error('Houve um erro ao buscar um cadastro '+err)
    }
}
