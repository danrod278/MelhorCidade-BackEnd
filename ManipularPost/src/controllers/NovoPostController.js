const {CriarPost} = require('../services/criarPost')
const { v4: uuidv4 } = require('uuid');

exports.controllerNovoPost = async (req, res)=>{
    try{
        const form = req.body
        const postData = {
            Descricao:{
                Categoria:form.categoria,
                Referencia:form.referencia,
                Ocorrencia:form.ocorrencia,
                ID_usuario:form._idUser,
                
            },
            CodigoDenuncia:uuidv4(),
            StatusDenuncia:"Em aberto",
            CoordenadasOcorrencia:form.CoordenadasOcorrencia
        }
        CriarPost(postData, res, req)

    }catch(err){
        res.status(401).json('Erro ao Criar novo post ', err)
    }

}