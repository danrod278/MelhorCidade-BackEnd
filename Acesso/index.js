const app = require('./src/app')
const {dotEnvVariables} = require('./dotenvVariables')
app.listen(dotEnvVariables.ACESSO_PORT, ()=>{
    console.log("Servidor rodando na porta "+dotEnvVariables.ACESSO_PORT)
})