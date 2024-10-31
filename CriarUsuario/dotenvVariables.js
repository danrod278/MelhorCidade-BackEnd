require('dotenv').config()

exports.dotEnvVariables = {
    ATLAS_URI_CONNECTION:process.env.ATLAS_URI_CONNECTION,
    CRIARUSUARIO_PORT:process.env.PORT_CRIAR_USUARIO,
    SALTROUNDS:process.env.SALTROUNDS
}
