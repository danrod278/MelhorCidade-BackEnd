const {Validar, Validar_ID} = require("../repositories/validacao")

exports.validarPost = async (res, id, CodigoDenuncia)=>{
    try{
        const validandoId = await Validar_ID(id)
        if(validandoId.length>0){
            const resultValidacao = await Validar(id, CodigoDenuncia)
            if(resultValidacao.modifiedCount>0){
                res.json({mensagem:"Validação realizada com suceso", acess:true})
            }else{
                res.json({mensagem:"Erro na Validação. Verifique os campos. possível erro, codigo de denuncia inválido", acess:false})
            }
        }else{
            res.json({mensagem:"Esse id não existe"})
        }
        
    }catch(err){
        console.log("Houve um erro ao tentar validar uma denúncia ", err)
    }
}
