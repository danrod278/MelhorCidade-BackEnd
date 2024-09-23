const novoPostRouter = require('../routes/novoPost')
const interacoes = require('../routes/interacoes')

module.exports = (app)=>{
    app.use('/api', novoPostRouter)
    app.use('/api', interacoes)
}
