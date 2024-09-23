const {validarPost} = require("../services/validarPost")
const axios = require("axios")
exports.validarPost = async (req, res)=>{
    try{
        const form = req.body
        const permicao = await axios.post("http://localhost:3000/api/acess", {cookie:form.cookie}, {
            headers: {
                'Content-Type': 'application/json'
            }})
        console.log(permicao)
        if(permicao){
            validarPost(req, res, form._id, form.codigoDenuncia)
        }
    }catch(err){
        console.error("Houve um erro ao tentar fazer a verificação ",err)
    }
}