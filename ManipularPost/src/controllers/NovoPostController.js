const {CriarPost} = require('../services/criarPost')
const {carregarDenunciaService, carregarPostsPorIdService, carregarComFiltrosService, carregarPostsPorLocalizacaoService} = require("../services/carregarPostService")
const {carregarPostsPorDataService} = require("../services/carregarPostsPorDataService")
const { v4: uuidv4 } = require('uuid');

exports.controllerNovoPost = async (req, res)=>{
    try{
        const form = req.body
        const {cookie, _idUser} = req.body
        
        
        const postData = {
            Descricao:{
                Categoria:form.categoria,
                Endereco:form.endereco,
                Ocorrencia:form.ocorrencia,
                ID_usuario:form._idUser,
            },
            CodigoDenuncia:uuidv4(),
            StatusDenuncia:"Em aberto",
            CoordenadasOcorrencia:{type:"Point", coordinates:form.CoordenadasOcorrencia}
        }
        CriarPost(postData, cookie, _idUser,form.formato, res, req)

    }catch(err){
        res.status(401).json('Erro ao Criar novo post ', err)
    }
}

exports.carregarDenunciasController = async (req, res)=>{
    try{
        const {CodigoDenuncia, _idUser, cookie} = req.body

        if(CodigoDenuncia){
            carregarDenunciaService(CodigoDenuncia, _idUser, cookie, res)
        }else{
            res.json({mensagem:"É necessáro um código de denuncia válido", acess:false})
        }
    }catch(err){
        console.error("Erro ao carregar denuncia para o usuário", err)
        res.json({mensagem:"Erro ao carregar denuncia para o usuário", erro:err, acess:false})
    }
}

exports.carregarPostsPorDataController = async(req, res)=>{
    try{
        const {turn} = req.body
        if(turn>=0){
            carregarPostsPorDataService(turn, res)
        }else{
            console.error("É necessário um turn maior ou igual a 0");
            res.json({mensagem:"É necessário um turn maior ou igual a 0", acess:false})
        }
    }catch(err){
        console.error('Erro ao receber o formulário de carregarPostsPorData',err)
        res.json({mensagem:"Erro ao receber o formulário de carregarPostsPorData", err, acess:false})
    }
}

exports.carregarPostsPorId = async(req, res)=>{
    try {
        const {_idUserSee} = req.body
        if(_idUserSee){
            carregarPostsPorIdService(_idUserSee, res)
        }else{
            return res.json({mensagem:"É necessário um _idUser para usar esse serviço"})
        }

    } catch (error) {
        console.error("Erro ao carregar posts pelo id", error)
        res.json({mensagem:"Erro ao carregar posts pelo id", acess:false})
    }
}

exports.carregarComFiltrosController = async(req, res)=>{
    try {
        const {turn, filtro} = req.body
        carregarComFiltrosService(filtro, turn, res)
    } catch (error) {
        console.log("Erro ao tentar filtrar denúncias", error)       
        return res.json({mensagem:"Erro ao tentar filtrar denúncias", acess:false})
    }
}


exports.carregarPostsPorLocalizacaoController = async(req, res)=>{
    try {
        const {coordenadas, zoom} = req.body
        if(zoom>0 && coordenadas.length==2){
            carregarPostsPorLocalizacaoService(coordenadas, zoom, res)
        }else{
            return res.json({mensagem:"É necessário zoom e [coordenadas] (além de cookie e _idUser)", acess:false})
        }
    } catch (error) {
        console.error("Houve um erro ao carregar as denúncias por localização", error)
        return res.json({mensagem:"Houve um erro ao carregar as denúncias por localização", acess:false})
        
    }
}