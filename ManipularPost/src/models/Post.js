const mongoose = require("mongoose")
const Schema = mongoose.Schema

const novoPostSchema = new Schema({
    Descricao:{
        Categoria:{
            type:String,
            required:true
        },
        Referencia:{
            type: String,
            required:false
        },
        Ocorrencia:{
            type:String,
            required:true
        },
        ID_usuario:{
            required:true,
            type:String
        },
        Imagens:[{
            Caminho:{
                required:true,
                type:String
            }
        }]
    },
    CodigoDenuncia:{
        required:true,
        type:String
    },
    StatusDenuncia:{
        type:String,
        required:true
    },
    CoordenadasOcorrencia:{
        latitude:{
            type:Number,
            required:true
        },
        longitude:{
            type:Number,
            required:true
        }
    },
    Validacoes:[{
        _Id_Usuario:{
            required:true,
            type: String
        }
    }]
})

const Post = mongoose.model("Post", novoPostSchema)
module.exports = {Post}
