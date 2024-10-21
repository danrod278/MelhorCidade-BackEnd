const axios = require("axios")
const {vericadorDeId} = require('../services/acess')
exports.verificarIdController = async (req, res, next)=>{
    try{
        const _id = req.body._idUser
        vericadorDeId(req, res, _idUser)

    }catch(err){
            console.error('Houve um erro ao verficar o Id'+err)
            res.json({mesage:'Houve um erro ao verficar o Id', erro:err})
    }
}
