const routes = (server) => {
  server.get('/users/:user_id/devices', (req, res) => {
    return res.send({msg: 'ok...'})
  })
  // server.get('/users/:user_id/devices', devicesHandlerFindAll)
  // server.get('/users/:user_id/devices/:id', devicesHandlerFindOne)
  // server.post('/users/:user_id/devices', devicesHandlerCreate)
  // server.patch('/users/:user_id/devices/:id', devicesHandlerUpdateName)
  // server.del('/users/:user_id/devices/:id', devicesHandlerDelete)
}

module.exports = routes
