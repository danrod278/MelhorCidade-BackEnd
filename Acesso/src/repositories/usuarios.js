const {Usuario} = require('../models/Usuario')


exports.verificarCadastros = async(data)=>{
    try{
        const consulta = await Usuario.find({email:data.email})
        
        return consulta

    }catch(err){
        console.error('Houve um erro ao buscar um cadastro '+err)
    }
}
