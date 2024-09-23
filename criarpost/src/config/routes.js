const novoPostRouter = require('../routes/novoPost')

module.exports = (app)=>{
    app.use('/api', novoPostRouter)
}
