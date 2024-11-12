'use strict'

const app = require('./config/basic')

require('./config/database')
require('./config/middlewares')
require('./config/routes')(app)
require('./config/models')

module.exports = app