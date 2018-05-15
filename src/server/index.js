const restify = require('restify')
const routes = require('../routes')

const server = restify.createServer()

routes(server)

module.exports = server
