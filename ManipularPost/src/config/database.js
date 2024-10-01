const mongoose = require("mongoose")
const {dotenvVariables} = require("../../dotenvVariables")

mongoose.set('strictQuery', true);
mongoose.connect(dotenvVariables.ATLAS_URI_CONNECTION).then(()=>{
    console.log("Conectado ao bando de dados")
}).catch((err)=>{
    console.error(err)
})
