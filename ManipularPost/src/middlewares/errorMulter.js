const multer = require("multer")

module.exports = (err, req, res, next) =>{
    if(err instanceof multer.MulterError){
        if(err.code =="LIMIT_FILE_SIZE"){
            res.json({mensagem:"Arquivo muito grande, máximo de 1MB por arquivo", acess:false})
        }
        if(err.code=="LIMIT_UNEXPECTED_FILE"){
            res.json({mensgaem:"Muitos arquivos, limite de 3", acess:false})
        }
        res.json({erro:err.message})
    }
    next()
}
