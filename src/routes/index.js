const {devicesHandlerFindAll, devicesHandlerFindOne} = require('./devices-routes')

const routes = (server) => {
  server.get('/users/:user_id/devices', devicesHandlerFindAll)
  server.get('/users/:user_id/devices/:id', devicesHandlerFindOne)
}

module.exports = routes
