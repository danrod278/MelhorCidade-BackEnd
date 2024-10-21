const axios = require("axios")
const {CriarPost} = require('../services/criarPost')
const { v4: uuidv4 } = require('uuid');
exports.controllerNovoPost = async (req, res)=>{
    try{
        const form = req.body
        const permicao = await axios.post("http://localhost:3000/api/acess", {cookie:form.cookie}, {
            headers: {
                'Content-Type': 'application/json'
            }})
            if (permicao.data.acess){
                const postData = {
                    Descricao:{
                        Categoria:form.categoria,
                        Referencia:form.referencia,
                        Ocorrencia:form.ocorrencia,
                        ID_usuario:form._idUser,
                        
                    },
                    CodigoDenuncia:uuidv4(),
                    StatusDenuncia:"Em aberto",
                    CoordenadasOcorrencia:form.coordenadas
                }
                CriarPost(postData, res)
            
        }else{
            res.status(401).json({mesage:'Necessário iniciar seção'})
        }
    }catch(err){
        res.status(401).json('Erro ao Criar novo post ', err)
    }

}