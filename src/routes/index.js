const service = require('../services')

const routes = (server) => {
  server.get('/users/:user_id/devices', async (req, res) => {
    try {
      const devices = await service.findAll(req)
      return res.send(devices)
    } catch (error) {
      console.error(error)
      return res.send(error)
    }
  })

  server.get('/users/:user_id/devices/:device_id', async (req, res) => {
    try {
      const device = await service.findOne(req)
      return res.send(device)
    } catch (error) {
      console.error(error)
      return res.send(error)
    }
  })

  server.post('/users/:user_id/devices', async (req, res) => {
    try {
      const newDevice = await service.create(req)
      return res.send(newDevice)
    } catch (error) {
      return res.send(error)
    }
  })

  server.patch('/users/:user_id/devices/:device_id', async (req, res) => {
    try {
      const updatedDevice = await service.update(req)
      return res.send(updatedDevice)
    } catch (error) {
      console.error(error)
      return res.send(error)
    }
  })

  server.del('/users/:user_id/devices/:device_id', async (req, res) => {
    try {
      await service.destroy(req)
      res.status(204)
      return res.send()
    } catch (error) {
      console.error(error)
      return res.send(error)
    }
  })
}

module.exports = routes
