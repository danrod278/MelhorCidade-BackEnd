const imagens = require("../routes/imagens")
module.exports = (app)=>{
    app.use('/api', imagens)
}