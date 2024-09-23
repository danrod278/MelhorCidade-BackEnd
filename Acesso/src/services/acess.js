const {buscaHash, buscadorDeId} = require("../repositories/usuarios")

exports.testaAcesso = async (req, res, hash)=>{
    try{
        const consultadoHAsh = await buscaHash(hash)
        if(consultadoHAsh.length>0){
            console.log("Acesso Liberado")
            res.status(200).json({mensagem:"Acesso liberado", acess:true})
        }else{
            res.status(200).json({mensagem:"Necessario Autenticação", acess:false})
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
            res.status(200).json({mesage:"Id encontrado", acesso:true})
        }
    }catch(err){
        console.error('Erro ao tentar verificar o Id'+err)
        res.json({mesage:'Erro ao tentar verificar o Id', erro:err})
    }
}