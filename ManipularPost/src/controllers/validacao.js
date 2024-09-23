const {validarPost} = require("../services/validarPost")
const axios = require("axios")
exports.validarPostController = async (req, res)=>{
    try{
        const form = req.body
        const permicao = await axios.post("http://localhost:3000/api/acess", {cookie:form.cookie}, {
            headers: {
                'Content-Type': 'application/json'
            }})
        if(permicao.data.acess){
            validarPost(req, res, form._id, form.codigoDenuncia)
        }else{
            res.json({mesage:"Necessário iniciar seção"})
        }
    }catch(err){
        console.error("Houve um erro ao tentar fazer a verificação ",err)
    }
}