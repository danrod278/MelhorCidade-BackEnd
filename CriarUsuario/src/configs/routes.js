const criarNovoUsuario = require('../routes/criarUsuario')

module.exports = (app)=>{
    app.use('/', criarNovoUsuario)
}