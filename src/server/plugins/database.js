const {database} = require('../../config')
const dbFactory = require('../../services/database')

const db = dbFactory(database.getConnection(process.env.NODE_ENV))

const dbPlugin = (server) => {
  server.use((req, res, next) => {
    req.$db = db
    next()
  })
}

module.exports = dbPlugin
