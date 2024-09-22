const {logar} = require('../services/login')

exports.criarUsuarioController = async (req, res)=>{
    try{
        
        const params = req.body
        let data = {
                email:params.email,
                senha:params.senha,
        }
        logar(data, res)
    }catch(err){
        console.error('Erro ao criar novo usuario ' +err)
    }
}

