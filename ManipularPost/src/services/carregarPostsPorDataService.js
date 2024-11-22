const {carregarDenunciasPorTurn, buscarUsuarioDB} = require("../repositories/carregarDenuncia")

exports.carregarPostsPorDataService = async(turn, res)=>{
    try{

        var denuncias = await carregarDenunciasPorTurn(turn)
        if(denuncias){            
            res.json({denuncias, acess:true})
        }else{
            console.error("Erro ao tentar buscar as ultimas denúncias",err)
            res.json({mensagem:"Erro ao tentar buscar as ultimas denúncias", err, acess:false})    
        }

    }catch(err){
        console.error("Erro ao tentar buscar as ultimas denúncias",err)
        res.json({mensagem:"Erro ao tentar buscar as ultimas denúncias", err, acess:false})
    }
}