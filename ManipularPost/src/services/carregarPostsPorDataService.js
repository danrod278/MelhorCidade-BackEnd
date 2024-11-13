const {carregarDenunciasPorTurn, buscarUsuarioDB} = require("../repositories/carregarDenuncia")

exports.carregarPostsPorDataService = async(turn, res)=>{
    try{

        var denuncias = await carregarDenunciasPorTurn(turn)
        if(denuncias){
            for(i=0;i<denuncias.length;i++){
                const Usuario = await buscarUsuarioDB(denuncias[i].Descricao.ID_usuario)
                denuncias[i].nome = Usuario[0].nome
            }
            console.log(denuncias[0])
            
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