const {verificarCadastros, NovoUsuario} = require('../repositories/usuarios')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt")
const {dotEnvVariables} = require("../../dotenvVariables")

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
            res.json({error:"Essa conta já existe"})
        }else{
            data._id = uuidv4()
            data.senha = await criptografarSenha(data.senha)
            data.tipoUsuario="comum"
            //console.log(data)
            const salvoStatus = await NovoUsuario(data)
            if(salvoStatus){
                res.json({mensagem:"Conta criada com sucesso", acess:true})
            }else{
                res.json({mensagem:"Erro ao salvar no banco de dados (Possível campo faltando)", acess:false})
            }
        }
    }catch(err){
        console.error('Houve um erro no processo de criação de usuario '+err)
    }

}

async function criptografarSenha(senha) {
    const saltround = parseInt(dotEnvVariables.SALTROUNDS)
    const hash = await bcrypt.hash(senha, saltround)
    return hash 
}

