'use strict'

const app = require('./configs/basic')

require('./configs/database')
require('./configs/middlewares')
require('./configs/routes')(app)
require('./configs/models')

module.exports = app
