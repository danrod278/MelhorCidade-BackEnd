const app = require('./src/app')
const {dotEnvVariables} = require('./dotenvVariables')
app.listen(dotEnvVariables.ACESSO_PORT, ()=>{
<<<<<<< HEAD
    console.log("Servidor acess rodando na porta "+dotEnvVariables.ACESSO_PORT)
})
=======
    console.log("Servidor rodando na porta "+dotEnvVariables.ACESSO_PORT)
})
>>>>>>> d3b1e142296eed6f513a65c5911cd0831e0241ce
