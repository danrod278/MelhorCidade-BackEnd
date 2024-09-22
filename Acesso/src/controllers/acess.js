
exports.acessController = async (req, res)=>{
    try{
        const hashbody = req.body.cookie
        const hashdaSecao = req.cookies.hashTemporario
        
        if(hashbody===hashdaSecao){
            res.status(200).json({mensage:"Acesso liberado", acess:true})
        }else{
            res.status(401).json({mensage:"Necessario Autenticação", acess:false})
    }
    }catch(err){
        console.error("Erro ao verificar cookie "+err)
    }
}
