const {validarPost} = require("../services/validarPost")

exports.validarPostController = async (req, res)=>{
    try{
        const form = req.body
        validarPost(res, form._idUser, form.CodigoDenuncia)

    }catch(err){
        console.error("Houve um erro ao tentar fazer a verificação ",err)
        res.json({erro:err})
    }
}
