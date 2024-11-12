const app = require("./src/app")
const {dotenvVariables} = require('./dotenvVariables')

app.listen(dotenvVariables.PORT, ()=>{
    console.log("Servidor rodando na porta "+dotenvVariables.PORT)
})
