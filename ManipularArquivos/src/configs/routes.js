const { verificarCookie } = require("../middlewares/verificarcookie")
const imagens = require("../routes/imagens")

module.exports = (app)=>{
    app.use('/api', verificarCookie, imagens)
}