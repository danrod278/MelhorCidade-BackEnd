const {buscaHash} = require("../repositories/usuarios")

exports.testaAcesso = async (req, res, hash)=>{
    try{
        if(!hash){
            res.status(401).json({mensage:"Necessário Autenticação", acess:false})
        }else{
            const consultadoHAsh = await buscaHash(hash)
            if(consultadoHAsh.length>0){
                res.status(200).json({mensage:"Acesso liberado", acess:true})
            }else{
                res.status(401).json({mensage:"Necessario Autenticação", acess:false})
            }
        }
    }catch(err){
        res.status(400).json({mesage:"Erro ao autenticar usuario"+err})
    }
    
}
