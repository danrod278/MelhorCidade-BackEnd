const mongoose = require("mongoose")
const Schema = mongoose.Schema
const novoUsuarioSchemma = new Schema({
    nome:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    idade:{
        type: String,
        required:false
    },
    telefone:{
        type: String,
        required:false
    },

    senha:{
        type: String,
        required:true
    },
    tipoUsuario:{
        type: String,
        required:true
    },
    _id:{
        type: String,
        required:true
    },
    hashTemporario:{
        type: String,
        required:false
    }
})

const Usuario = mongoose.model('Usuarios', novoUsuarioSchemma)

exports.Usuario = Usuario
