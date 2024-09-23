const {procurarValidacao, Validar, desValidar} = require("../repositories/validacao")

exports.validarPost = async (req, res, id, CodigoDenuncia)=>{
    try{
        //const busca = await procurarValidacao(CodigoDenuncia, id)
        const resultValidacao = await Validar(id, CodigoDenuncia)
        console.log(resultValidacao)
    }catch(err){
        console.log("Houve um erro ao tentar validar uma denúncia ", err)
    }
    
}