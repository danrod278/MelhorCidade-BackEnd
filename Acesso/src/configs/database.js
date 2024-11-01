const mongoose = require("mongoose")
const dotnvVariables = require("../../dotenvVariables")
mongoose.set('strictQuery', true);

console.log("URI do MongoDB:", dotnvVariables.dotEnvVariables.ATLAS_URI_CONNECTION);

mongoose.connect(dotnvVariables.dotEnvVariables.ATLAS_URI_CONNECTION).then(()=>{
    console.log("Conectado ao banco de dados")
}).catch((err)=>{
    console.error(err)
})

