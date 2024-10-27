const {salvarImagem, lerImagens} = require("../services/manipularImagensServices")

exports.salvarImagemController = async (req, res)=>{
    try{
        console.log(req.body)
        if(req.body.files.length>0 && req.body.files.length<=3){
            const files = req.body.files
            salvarImagem(res, files)
        }else{
            res.json({mensagem:"É necessário ao menos um arquivo e no máximo 3. Cada imagem deve ter no máximo 1 mega", acess:false})
        }
    }catch(err){
        console.error("Houve um erro ao receber a imagem "+err.message)
        res.json({mensagem:err, acess:false})
    }
}

exports.lerImagensController = async (req, res)=>{
    try {
        const files = req.body.files
        console.log(files)
        if(files.length>0){
            lerImagens(res, files)
        }else{
            res.json({mensagem:"É necessário ao menos um caminho", acess:false})
        }
    } catch (err) {
        res.json({mensagem:"Erro ao ler a imagem", erro:err, acess:false})
    }
}
