const {criarUsuario} = require('../services/novo_usuario')

exports.criarUsuarioController = async (req, res)=>{
    try{
        console.log("Entrou na rota")
        const params = req.params
        let data = {
                email:params.email,
                senha:params.senha,
        }
        criarUsuario(data, res)
    }catch(err){
        console.error('Erro ao criar novo usuario ' +err)
    }
}

