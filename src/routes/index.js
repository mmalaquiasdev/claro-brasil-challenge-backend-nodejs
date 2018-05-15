const {devicesHandlerFindAll, devicesHandlerFindOne, devicesHandlerCreate} = require('./devices-routes')

const routes = (server) => {
  server.get('/users/:user_id/devices', devicesHandlerFindAll)
  server.get('/users/:user_id/devices/:id', devicesHandlerFindOne)
  server.post('/users/:user_id/devices', devicesHandlerCreate)
}

module.exports = routes
