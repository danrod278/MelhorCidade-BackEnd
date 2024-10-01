const {Validar, Validar_ID} = require("../repositories/validacao")

exports.validarPost = async (req, res, id, CodigoDenuncia)=>{
    try{
        const validandoId = await Validar_ID(id)
        console.log(validandoId)
        if(validandoId.length>0){
            const resultValidacao = await Validar(id, CodigoDenuncia)
            //console.log(resultValidacao)
            if(resultValidacao.modifiedCount>0){
                res.status(200).json({mesage:"Validação realizada com suceso", acess:true})
            }else{
                res.json({mesage:"Erro na Validação. Verifique os campos. possível erro, codigo de denuncia inválido"})
    
            }
        }else{
            res.json({mesage:"Esse id não existe"})
        }
        
    }catch(err){
        console.log("Houve um erro ao tentar validar uma denúncia ", err)
    }
}
