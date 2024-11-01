const login = require('../routes/login')
const acess = require('../routes/acess')

module.exports = (app)=>{
    app.use('/api', login)
    app.use('/api', acess)
}
