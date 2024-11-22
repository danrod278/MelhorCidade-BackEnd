const axios = require("axios")
const {apagaDenuncia} = require("../repositories/carregarDenuncia")
const {dotenvVariables} = require("../../dotenvVariables")

exports.deletarDenunciaService = async(CodigoDenuncia, cookie, _idUser, res)=>{
    const queryDenunciaDB = await apagaDenuncia(CodigoDenuncia)
    var arrayErros=[]
    var arrayData=[]
    
    if(queryDenunciaDB.status==true){
        
        var paths = queryDenunciaDB.mensagem.Descricao.Imagens
       
        for(const element of paths){
            var deleteImage = await axios.post(dotenvVariables.MANIPULARARQUIVOS_MS+"api/deletarImagem", {cookie:cookie, _idUser:_idUser, pathName:element.Caminho})
            if(deleteImage.data.acess){
                arrayData.push(element)
            }else{
                arrayErros.push(element)
            }
        }
        res.json({mensagem:"Denúncia deletada com sucesso!", acess:true})
    }else{
        console.log(queryDenunciaDB.mensagem)
        res.json({mensagem:queryDenunciaDB.mensagem, acess:false})
    }
}
