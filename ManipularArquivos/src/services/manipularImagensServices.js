const {v4: uuidv4} = require("uuid")
const path = require("path")
const fs = require("fs")

exports.salvarImagem = async (res, arrayImagens)=>{
    try{
        
    }catch(err){
        console.error("Erro ao salvar a imagem "+err)
        res.json({mensagem:"Erro ao salvar a imagem", erro:err, acess:false})
    }
}
