const {SalvarPostBD} = require("../repositories/CriarPost")
const axios = require("axios")

exports.CriarPost = async (data, res, req) =>{
    try{
        const files = {files:req.files}
        if(files.files.length>0 && files.files.length<=3){
            const manda_files_para_axios = await axios.post('http://localhost:3003/api/salvarImagem', files)
            if(manda_files_para_axios.data.arrayCaminhos){
                console.log(manda_files_para_axios.data.arrayCaminhos.length)
                if(manda_files_para_axios.data.arrayCaminhos.length==0){
                    return res.json({status:false, mesage:"É necessário ao menos uma imagem para fazer a denúncia", acess:false})
                }
                data.Descricao.Imagens=manda_files_para_axios.data.arrayCaminhos
                const statusRegistroSalvo = await SalvarPostBD(data)
                if(statusRegistroSalvo){
                    return res.json({status:true, mesage:"Denuncia realizada com sucesso", erros:manda_files_para_axios.data.arrayErros})
                }else{
                    return res.json({status:false, mesage:"Houve algum erro ao fazer a denuncia"})
                }
            }else{
                res.json({erros:manda_files_para_axios.data.arrayErros, acess:false})
            }
        }else{
            res.json({mensagem:"É necessário ao menos um arquivo e no máximo 3. Cada imagem deve ter no máximo 1 mega", acess:false})
        }
        
    }catch(err){
        console.error("Erro ao tentar salvar Denuncia ",err)
        res.json({status:false, mensagem:"Houve algum erro ao fazer a denuncia", err})
    }
}
