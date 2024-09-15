require('dotenv').config()

exports.dotEnvVariables = {
    SECRET_SESSION:process.env.SECRET_SESSION,
    ATLAS_URI_CONNECTION:process.env.ATLAS_URI_CONNECTION,
    CRIARUSUARIO_PORT:process.env.CRIARUSUARIO_PORT,
    SALTROUNDS:process.env.SALTROUNDS
}


