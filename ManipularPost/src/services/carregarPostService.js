const axios = require("axios")
const {pegarDenunciaDB, buscarUsuarioDB} = require("../repositories/carregarDenuncia")
exports.carregarDenunciaService = async(CodigoDenuncia, res)=>{
    try{
        const denuncia = await pegarDenunciaDB(CodigoDenuncia)
        if(denuncia.length>0){
            let arrayCaminhos = denuncia.Descricao.Imagens
            let arrayBuffers;
            let arrayBuffersErro;
            for(i=0;i<arrayCaminhos.length;i++){
                var buffer = await axios.post('http://localhost:3003/api/', arrayCaminhos[i])
                if(buffer.data){
                    arrayBuffers.push(buffer.data)
                }else{
                    arrayBuffersErro.push(arrayCaminhos[i])
                }
            }
            denuncia.Descricao.Imagens=arrayBuffers
            const Usuario = await buscarUsuarioDB(denuncia.Descricao.ID_usuario)
            denuncia.nome = Usuario.nome
            
            /*falta pegar o nome, e a foto de perfil do usuario. as funções repositório que fazem isso ja estão prontas; falta criar as rotas que vão buscar a imagem em manipularArquivos também falta inserir caminho da foto de perfil no model de usuario*/

        }else{
            return res.json({mensagem:"É necessáro um código de denuncia válido", acess:false})
        }
    }catch(err){
        console.error("Erro ao tentar ler as denúncias", err)
        return res.json({mensagem:"Erro ao tentar ler as denúncias",erro:err, acess:false})
    }
}
