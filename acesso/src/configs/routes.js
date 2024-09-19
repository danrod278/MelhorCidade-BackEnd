const criarNovoUsuario = require('../routes/login')

module.exports = (app)=>{
    app.use('/', criarNovoUsuario)
}
