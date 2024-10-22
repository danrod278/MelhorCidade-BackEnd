const {validarPost} = require("../services/validarPost")

exports.validarPostController = async (req, res)=>{
    try{
        const form = req.body
        validarPost(req, res, form._idUser, form.codigoDenuncia)

    }catch(err){
        console.error("Houve um erro ao tentar fazer a verificação ",err)
        res.json(err)
    }
}
