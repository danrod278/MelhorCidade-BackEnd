const {Post} = require("../models/Post")

exports.SalvarPostBD = async (data)=>{
    try{
        const novoPost = new Post(data)

        const statusPostSalvo = await novoPost.save()
        return statusPostSalvo
    }catch(err){
        console.error('Erro ao salvar Nova Denúncia no banco de dados ',err)
    }
}
