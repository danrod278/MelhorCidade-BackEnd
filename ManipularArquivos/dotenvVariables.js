require('dotenv').config()
exports.dotenvVariables = {
    PORT_MANIPULAR_ARQUIVOS:process.env.PORT_MANIPULAR_ARQUIVOS,
    ATLAS_URI_CONNECTION:process.env.ATLAS_URI_CONNECTION,
    SUPABASEURL:process.env.SUPABASEURL,
    SUPABASE_KEY:process.env.SUPABASE_KEY,
    ACESS_MS:process.env.ACESS_MS
}
