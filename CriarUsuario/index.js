const app = require("./src/app")
const {dotEnvVariables} = require("./dotenvVariables")

app.listen(dotEnvVariables.CRIARUSUARIO_PORT, ()=>{
    console.log("servidor CriarUsuario rodando na porta "+dotEnvVariables.CRIARUSUARIO_PORT)
})