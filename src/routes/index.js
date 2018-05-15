const {devicesHandlerFindAll} = require('./devices-routes')

const routes = (server) => {
  server.get('/', (req, res) => {
    return res.send('testing...')
  })

  server.get('/users/:id/devices', devicesHandlerFindAll)
}

module.exports = routes
