'use strict'

const app = require('./configs/basic')

require('./configs/routes')(app)

module.exports = app