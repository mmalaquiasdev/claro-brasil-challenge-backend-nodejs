const databasePlugin = (server) => {
  server.use((req, res, next) => {
    req.$database = server.$database
    next()
  })
}

module.exports = databasePlugin
