const restify = require('restify')

const routes = require('../routes')
const plugins = require('./plugins')

const server = restify.createServer()
server.use(restify.plugins.bodyParser())

plugins(server)
routes(server)

module.exports = server
