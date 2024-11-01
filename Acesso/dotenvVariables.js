require('dotenv').config()

exports.dotEnvVariables = { 
    ATLAS_URI_CONNECTION:process.env.ATLAS_URI_CONNECTION,
    
    ACESSO_PORT:process.env.ACESSO_PORT,
    SALTROUNDS:process.env.SALTROUNDS
}
