const {logar} = require('../services/login')

exports.criarUsuarioController = async (req, res)=>{
    try{
<<<<<<< HEAD
        
=======
>>>>>>> d3b1e142296eed6f513a65c5911cd0831e0241ce
        const params = req.body
        let data = {
                email:params.email,
                senha:params.senha,
        }
        logar(data, res, req)
    }catch(err){
        console.error('Erro ao criar novo usuario ' +err)
    }
}

