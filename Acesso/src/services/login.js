const {verificarCadastros, NovoUsuario} = require('../repositories/usuarios')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt")

exports.buscaCadastros = async (data)=>{
    try{
        
        var testBusca = await verificarCadastros(data)
        
        if(testBusca.length>0){
            
            return [true, testBusca[0].senha]
        }else{
            return [false]
        }
    }catch(err){
        console.error('Houve um erro no processo de verificação de cadastro '+err)
    }
}

exports.logar = async (data, res)=>{
    try{
        const usuario = await this.buscaCadastros(data)
        if(usuario[0]){
            const testCompare = await comparar(data.senha, usuario[1])
            
            if (testCompare){
                res.status(200).json({acesso:true, mensage:"Acesso liberado"})
            }
        }
        else{
            res.status(401).json({acesso:false, mensage:"Dados incorretos"})
        }
    }catch(err){
        console.error('Houve um erro no processo de criação de usuario '+err)
    }
}

async function comparar(senha, hash) {
    try{
        const result = bcrypt.compare(senha, hash)
        return result
    }catch(err){
        console.error('Erro ao comparar o hash com a senha'+err)
    }
    
    
}
