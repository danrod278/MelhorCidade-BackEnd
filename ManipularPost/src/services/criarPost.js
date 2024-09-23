const {SalvarPostBD} = require("../repositories/CriarPost")

exports.CriarPost = async (data) =>{
    try{
        const statusRegistroSalvo = await SalvarPostBD(data)
        console.log(statusRegistroSalvo)
    }catch(err){
        console.error("Erro ao tentar salvar Denuncia ",err)
    }
}
