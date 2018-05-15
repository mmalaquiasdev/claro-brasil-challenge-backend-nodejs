const restify = require('restify')

const routes = require('../routes')
const plugins = require('./plugins')

const server = restify.createServer()
server.use(restify.plugins.queryParser({ mapParams: true }))
server.use(restify.plugins.bodyParser({ mapParams: true }))
server.use(restify.plugins.acceptParser(server.acceptable))

plugins(server)
routes(server)

module.exports = server
