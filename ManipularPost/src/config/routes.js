const novoPostRouter = require('../routes/novoPost')
const interacoes = require('../routes/interacoes')
const {verificarCookie} = require("../middlewares/verificarcookie")

module.exports = (app)=>{
    app.use('/api', verificarCookie, novoPostRouter)
    app.use('/api', verificarCookie, interacoes)
}
