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
<<<<<<< HEAD:Acesso/src/models/Usuario.js
=======
    idade:{
        type: String,
        required:true
    },
    telefone:{
        type: String,
        required:true
    },
>>>>>>> eb5121eb5f485c71e52e6084d253b3a5aa37902d:CriarUsuario/src/models/novoUsuarioBD.js
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
