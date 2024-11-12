'use strict'

const app = require('./configs/basic')

require('./configs/database')
require('./configs/middlewares')
require('./configs/routes')
require('./configs/models')

module.exports = app