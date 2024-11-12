const axios = require("axios")
const {pegarDenunciaDB, buscarUsuarioDB} = require("../repositories/carregarDenuncia")

exports.carregarDenunciaService = async(CodigoDenuncia, _idUser, cookie, res)=>{
    try{
        let denunciaDB = await pegarDenunciaDB(CodigoDenuncia)
        var denuncia = JSON.parse(JSON.stringify(denunciaDB[0]))
        if(denunciaDB.length>0){
            let arrayCaminhos = denuncia.Descricao.Imagens            
            var buffer = await axios.post('http://localhost:3003/api/lerImagens', {_idUser:_idUser, cookie:cookie, files:arrayCaminhos})
            var arrayBuffers = buffer.data.arrayBuffers
            denuncia.Descricao={...denuncia.Descricao, Imagens:arrayBuffers}
            
            const Usuario = await buscarUsuarioDB(denuncia.Descricao.ID_usuario)
            denuncia.nome = Usuario[0].nome/**/
            console.log(denuncia)

            res.json({mensagem:denuncia, acess:true})
        }else{
            res.json({mensagem:"É necessáro um código de denuncia válido", acess:false})
        }
    }catch(err){
        console.error("Erro ao tentar ler as denúncias", err)
        return res.json({mensagem:"Erro ao tentar ler as denúncias",erro:err, acess:false})
    }
}
