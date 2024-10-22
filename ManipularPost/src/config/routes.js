const novoPostRouter = require('../routes/novoPost')
const interacoes = require('../routes/interacoes')
const comentar = require("../routes/comentarios")
const {verificarCookie} = require("../middlewares/verificarcookie")
const upload = require("../middlewares/multer")
const errosMulter = require("../middlewares/errorMulter")


module.exports = (app)=>{
    app.use('/api', upload.any(), errosMulter, verificarCookie, novoPostRouter)
    app.use('/api', verificarCookie, interacoes)
    app.use('/api', verificarCookie, comentar)
}
