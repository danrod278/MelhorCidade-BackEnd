const login = require('../routes/login')

module.exports = (app)=>{
    app.use('/api', login)
}
