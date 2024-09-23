const {buscaHash} = require("../repositories/usuarios")

exports.testaAcesso = async (req, res, hash)=>{
    const consultadoHAsh = await buscaHash(hash)
    if(consultadoHAsh.length>0){
        res.status(200).json({mensage:"Acesso liberado", acess:true})
    }else{
        res.status(401).json({mensage:"Necessario Autenticação", acess:false})
    }
}
