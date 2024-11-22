const {criarUsuario} = require('../services/novo_usuario')

exports.criarUsuarioController = async (req, res)=>{
    try{
        const params = req.body
        
        let data = {
                nome:params.nome,
                email:params.email,
                senha:params.senha,
        }
        if(data.nome && data.email && data.senha && data.endereco){

            criarUsuario(data, res)
        }else{
            res.json({mensagem:"Dados insuficientes", acess:false})
        }
    }catch(err){
        console.error('Erro ao criar novo usuario ' +err)
    }
}

