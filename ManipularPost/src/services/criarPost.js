const {SalvarPostBD} = require("../repositories/CriarPost")

exports.CriarPost = async (data, res) =>{
    try{
        const statusRegistroSalvo = await SalvarPostBD(data)
        
        if(statusRegistroSalvo){
            res.status(200).json({status:true, mesage:"Denuncia realizada com sucesso"})
        }else{
            res.status(400).json({status:false, mesage:"Houve algum erro ao fazer a denuncia"})
        }
    }catch(err){
        console.error("Erro ao tentar salvar Denuncia ",err)
    }
}
