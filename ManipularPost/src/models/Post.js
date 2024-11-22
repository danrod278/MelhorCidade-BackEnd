const mongoose = require("mongoose")
const Schema = mongoose.Schema

const novoPostSchema = new Schema({
    Descricao:{
        Nome:{
            type:String,
            required:true
        },
        Categoria:{
            type:String,
            required:true
        },
        Endereco:{
            type: String,
            required:true
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
        type: {
            type: String,
            enum: ['Point'], // Definindo como 'Point' para uso geoespacial
            required: true
        },
        coordenadas: {
            type: [Number], // Array com [longitude, latitude]
            required: true
        }
    },
    Validacoes:[{
        _Id_Usuario:{
            required:true,
            type: String
        }
    }],
    comentarios:[{
        _idUsuario:{
            type:String,
            required:true
        },
        _idComentario:{
            type:String,
            required:true
        },
        conteudo:{
            type:String,
            required:true
        },
        nome:{
            required:true,
            type:String
        }
    }],
    OqueFoiFeito:{
        type:String,
        required:false,
        timestamps:true
    }
}, {timestamps:true})
const Post = mongoose.model("Post", novoPostSchema)

module.exports = {Post}
