const {SalvarPostBD} = require("../repositories/CriarPost")
const {buscarUsuarioDB} = require("../repositories/carregarDenuncia")
const axios = require("axios")

exports.CriarPost = async (data, cookie, _idUser, formato, res, req) =>{
    try{

        if (formato=="buffer"){
            var files = req.files   
        }else if(formato=="base64"){
            var files = req.body.files
        }else{
            return res.json({mensagem:"Formato de imagem inválido", acess:false})
        }
        
        if(files.length>0 && files.length<=3){
            const manda_files_para_axios = await axios.post('http://localhost:3002/api/salvarImagem', {files:files, _idUser:_idUser, cookie:cookie, formato:formato})

            if(manda_files_para_axios.data.acess){
                
                if(manda_files_para_axios.data.arrayCaminhos.length==0){
                    return res.json({status:false, mesage:"É necessário ao menos uma imagem para fazer a denúncia", acess:false})
                }
                let arrayImagens = []
                for(const element of manda_files_para_axios.data.arrayCaminhos){
                    arrayImagens.push({Caminho:element.publicUrl})
                }
                const Usuario = await buscarUsuarioDB(_idUser)
                data.Descricao.Nome = Usuario[0].nome
                data.Descricao.Imagens=arrayImagens
                console.log(data)
                const statusRegistroSalvo = await SalvarPostBD(data)

                if(statusRegistroSalvo){
                    res.json({acess:true, mensagem:"Denuncia realizada com sucesso", erros:manda_files_para_axios.data.arrayErros})
                }else{
                    res.json({acess:false, mensagem:"Houve algum erro ao fazer a denuncia"})
                }
            }else{
                res.json({mensagem:"Erro ao enviar as imagens", acess:false})
            }
        }else{
            res.json({mensagem:"É necessário ao menos um arquivo e no máximo 3. Cada imagem deve ter no máximo 1 mega", acess:false})
        }
        
    }catch(err){
        console.error("Erro ao tentar salvar Denuncia ",err)
        res.json({acess:false, mensagem:"Houve algum erro ao fazer a denuncia", erro:err})
    }
}
