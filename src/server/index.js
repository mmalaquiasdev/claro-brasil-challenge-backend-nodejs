const restify = require('restify')

const routes = require('../routes')
const plugins = require('./plugins')

const server = restify.createServer()

plugins(server)
routes(server)

module.exports = server
