const {verificarCadastros, salvarHash} = require('../repositories/usuarios')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt")

exports.buscaCadastros = async (data)=>{
    try{
        
        var testBusca = await verificarCadastros(data)
        
        if(testBusca.length>0){
            
            return [true, testBusca[0].senha, testBusca[0]._id]
        }else{
            return [false]
        }
    }catch(err){
        console.error('Houve um erro no processo de verificação de cadastro '+err)
    }
}

exports.logar = async (data, res, req)=>{
    try{
        const usuario = await this.buscaCadastros(data)
        if(usuario[0]){
            const testCompare = await comparar(data.senha, usuario[1])
            
            if (testCompare){   
                const hash = uuidv4();
                res.cookie("hashTemporario", hash, { maxAge: 300000 })
                res.cookie("IDUsuario", usuario[2], {maxAge: 300000})
                
                const statusGravacao = await salvarHash(usuario[2], hash)
                
                if(statusGravacao){
                    res.status(200).json({ acesso: true, mensage: "Acesso liberado", cookie: hash, _IdUser:usuario[2] });                
                }else{
                    res.status(400).json({ acesso: false, mensage: "Erro ao gravar hash"});
                }
            }else{
                res.status(401).json({acesso:false, mensage:"Dados incorretos"})
            }
        }else{
            res.status(401).json({acesso:false, mensage:"Dados incorretos"})
        }
        
        
    }catch(err){
        console.error('Houve um erro no processo de login '+err)
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
