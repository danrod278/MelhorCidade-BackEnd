const {criarUsuario} = require('../services/novo_usuario')

exports.criarUsuarioController = async (req, res)=>{
    try{
        console.log("Entrou na rota")
        const params = req.params
        let data = {
                nome:params.nome,
                email:params.email,
                idade:params.idade,
                CPF:params.cpf,
                senha:params.senha,
                endereco:params.endereco
        }
        criarUsuario(data, res)
    }catch(err){
        console.error('Erro ao criar novo usuario ' +err)
    }
}

