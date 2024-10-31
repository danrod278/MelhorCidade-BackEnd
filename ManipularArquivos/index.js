const app = require("./src/app")
const {dotenvVariables} = require('./dotenvVariables')

app.listen(dotenvVariables.PORT_MANIPULAR_ARQUIVOS, ()=>{
    console.log("Servidor rodando na porta "+dotenvVariables.PORT_MANIPULAR_ARQUIVOS)
})