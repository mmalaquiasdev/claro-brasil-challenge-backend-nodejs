const {cors} = require('../../config')

const corsPlugin = (server) => {
  server.pre(cors.preflight)
  server.use(cors.actual)
}

module.exports = corsPlugin
