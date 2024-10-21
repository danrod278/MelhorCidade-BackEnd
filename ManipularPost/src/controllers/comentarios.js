const axios = require('axios')
const {salvarComentario} = require("../services/comentarios")
exports.comentarController = async (req, res)=>{
    try{
        const {conteudo, _idUser, CodigoDenuncia} = req.body
        const idExistente = axios.post("http://localhost:3000/api/verificarId", {_idUser:_idUser})
        if(idExistente.data.acesso){
            salvarComentario(_idUser, conteudo, CodigoDenuncia, res)
        }
        else{
            res.json({mensagem:"esse id não existe", acess:false})
        }
    }
    catch (err){
        console.error("Erro ao fazer comentário "+err)
        res.json({mensagem:"Erro ao fazer comentário", err:err})
    }
}
