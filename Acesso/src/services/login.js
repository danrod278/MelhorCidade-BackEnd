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
                res.cookie("hashTemporario", hash, { maxAge: 90000 })
                res.cookie("IDUsuario", usuario[2], {maxAge: 90000})
                console.log(req.cookies.hashTemporario)
                const statusGravacao = await salvarHash(usuario[2], hash)
                
                console.log({acesso: true, mensagem: "Acesso liberado", cookie: hash, id:usuario[2] })
                if(statusGravacao){
                    res.status(200).json({ acesso: true, mensagem: "Acesso liberado", cookie: hash, id:usuario[2] });                
                }else{
                    res.json({ acesso: false, mensagem: "Erro ao gravar hash"});
                }
            }else{
                res.json({acesso:false, mensagem:"Dados incorretos"})
            }
        }else{
            res.json({acesso:false, mensagem:"Dados incorretos"})
        }
        
        
    }catch(err){
        console.error('Houve um erro no processo de login '+err)
        res.json({mensagem:"Houve um erro no processo de login", erro:err})
    }
}

async function comparar(senha, hash) {
    try{
        const result = bcrypt.compare(senha, hash)
        return result
    }catch(err){
        console.error('Erro ao comparar o hash com a senha'+err)


        res.json({mensagem:"Erro ao comparar o hash com a senha", erro:err})


    }
    
    
}
