const novoPostRouter = require('../routes/novoPost')
const interacoes = require('../routes/interacoes')
const comentar = require("../routes/comentarios")
const {verificarCookie} = require("../middlewares/verificarcookie")
const upload = require("../middlewares/multer")
const errosMulter = require("../middlewares/errorMulter")
const {verificarADMMiddleware} = require("../middlewares/verificarADM")
const mudarStatusDenuncia = require("../routes/mudarStatusDenuncia")
const deletarDenuncia = require("../routes/deletarDenuncia")

module.exports = (app)=>{
    app.use('/api', upload.any(), errosMulter, verificarCookie, novoPostRouter)
    app.use('/api', verificarCookie, interacoes)
    app.use('/api', verificarCookie, comentar)
    app.use("/api", verificarCookie, verificarADMMiddleware, mudarStatusDenuncia)
    app.use("/api", verificarCookie, verificarADMMiddleware, deletarDenuncia)
}
