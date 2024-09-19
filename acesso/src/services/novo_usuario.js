const {verificarCadastros, NovoUsuario} = require('../repositories/usuarios')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt")
const {dotEnvVariables} = require("../../../dotenvVariables")

exports.buscaCadastros = async (data)=>{
    try{
        
        const testBusca = await verificarCadastros(data)
        if(testBusca.length>0){
            return true
        }
    }catch(err){
        console.error('Houve um erro no processo de verificação de cadastro '+err)
    }
}

exports.logar = async (data, res)=>{
    try{
        const usuario = await this.buscaCadastros(data)
        if(usuario){
            const testCompare = comparar(data.senha, permicao.senha)
            if (testCompare){
                
            }
        }
        
    }catch(err){
        console.error('Houve um erro no processo de criação de usuario '+err)
    }

}

async function comparar(senha, hash) {
    bcrypt.compare(senha, hash, (result)=>{
        return result
    })
    
}

