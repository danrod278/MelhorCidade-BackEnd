const app = require("./src/app")
const {dotenvVariables} = require('./dotenvVariables')

app.listen(dotenvVariables.PORT_NOVOPOST, ()=>{
    console.log("Servidor ManipularPost rodando na porta "+dotenvVariables.PORT_NOVOPOST)

})
