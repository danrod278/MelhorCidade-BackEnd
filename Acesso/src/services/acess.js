const {buscaHash, buscadorDeId, verificarCadastros} = require("../repositories/usuarios")

exports.testaAcesso = async (req, res, hash, _id)=>{
    try{
        if(!hash || !_id){
            console.error('cookie ou id inexistentes')
            
            res.json({mensagem:"cookie ou id inexistentes", acess:false})
        }else{
            const consultadoHAsh = await buscaHash(hash, _id)
            
            if(consultadoHAsh.length>0){
                
                res.json({mensagem:"Acesso liberado", acess:true})
            }else{
                console.error("Necessario Autenticação")
                res.status(200).json({mensagem:"Necessario Autenticação", acess:false})
            }
        }
        
    }catch(err){
        console.error('Erro ao tentar verificar o hash'+err)
        res.json({mensagem:'Erro ao tentar verificar o hash', erro:err})
    }
}
   
exports.vericadorDeId = async (req, res, _id)=>{
    try{
        const userFound = await buscadorDeId(_id)

        if(userFound.length>0){
            res.status(200).json({mensagem:"Id encontrado", acess:true})
        }
    }catch(err){
        console.error('Erro ao tentar verificar o Id'+err)
        res.json({mensagem:'Erro ao tentar verificar o Id', erro:err})
    }
}

exports.verificarADMService = async(_idUser, res)=>{
    try {
        var usuario = await buscadorDeId(_idUser)

        if(usuario[0].tipoUsuario=="ADM"){
            res.json({mensagem:"É ADM", acess:true})
        }else{
            res.json({mensagem:"Não é ADM", acess:false})
        }
    } catch (error) {
        console.error("Houve um erro ao tentar fazer a verificação de ADM")
        res.json({mensagem:"Houve um erro ao tentar fazer a verificação de ADM", acess:true})
    }
}
