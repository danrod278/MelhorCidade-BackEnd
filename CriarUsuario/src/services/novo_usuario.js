const {verificarCadastros, NovoUsuario} = require('../repositories/usuarios')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt")
const {dotEnvVariables} = require("../../../dotenvVariables")

exports.buscaCadastros = async (email)=>{
    try{
        
        const testExistencia = await verificarCadastros(email)
        if(testExistencia.length>0){
            return false
            
        }else{
            return true
        }
    }catch(err){
        console.error('Houve um erro no processo de verificação de cadastro '+err)
    }
}

exports.criarUsuario = async (data, res)=>{
    try{
        
        const permicao = await this.buscaCadastros(data.email)
        if(!permicao){
            res.status(400).json({error:"Essa conta ja existe"})
        }else{
            data._id = uuidv4()
            data.senha = await criptografarSenha(data.senha)
            data.tipoUsuario="comum"
            console.log(data)
            const salvoStatus = await NovoUsuario(data)
            if(salvoStatus){
                res.status(200).json({dados:data, mensage:"Conta criada com sucesso", acess:true})
            }else{
                res.status(400).json({mensage:"Erro ao salvar no banco de dados (Possível campo faltando)", status:false})
            }
        }
    }catch(err){
        console.error('Houve um erro no processo de criação de usuario '+err)
    }

}

async function criptografarSenha(senha) {
    const hash = await bcrypt.hash(senha, dotEnvVariables.SALTROUNDS)
    return hash 
}

