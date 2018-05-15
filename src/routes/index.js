const routes = (server) => {
  server.get('/', (req, res) => {
    return res.send('testing...')
  })
}

module.exports = routes
