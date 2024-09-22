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
    }
    
})

const Usuario = mongoose.model('Usuarios', novoUsuarioSchemma)

exports.Usuario = Usuario
