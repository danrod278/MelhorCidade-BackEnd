const {mudarStatusDenuncia} = require("../repositories/mudarStatusDenuncia")

exports.mudarStatusDenunciaService = async(cookie, _idUser, mudancas, CodigoDenuncia, res)=>{
    try {
        const statusResolve = await mudarStatusDenuncia(CodigoDenuncia, mudancas)
        if(statusResolve===true){
            return res.json({mensagem:"Denúncia resolvida com sucesso", acess:true})
        }else if (statusResolve==false){
            return res.json({mensagem:"Não foi possível mudar o Status da denúncia!", acess:false})
        }else{
            return res.json({mensagem:statusResolve, acess:false})
        }
    } catch (error) {
        console.error("Houve um erro ao mudar o status da denúncia", error)
        return res.json({mensagem:"Houve um erro ao mudar o status da denúncia", acess:false})
    }
}
