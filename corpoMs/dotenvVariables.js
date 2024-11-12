require('dotenv').config()
exports.dotenvVariables = {
    PORT:process.env.PORT,
    ATLAS_URI_CONNECTION:process.env.ATLAS_URI_CONNECTION,
}
