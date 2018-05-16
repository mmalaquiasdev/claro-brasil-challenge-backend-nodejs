const db = require('../services/database')

const routes = (server) => {
  server.get('/users/:user_id/devices', async (req, res) => {
    try {
      const devices = await db.device().findAll(req.params)
      return res.send(devices)
    } catch (error) {
      console.error(error)
      return res.send(error)
    }
  })

  server.get('/users/:user_id/devices/:device_id', async (req, res) => {
    try {
      const device = await db.device().findOne(req.params)
      return res.send(device)
    } catch (error) {
      console.error(error)
      return res.send(error)
    }
  })

  server.post('/users/:user_id/devices', async (req, res) => {
    try {
      const newDevice = await db.device().create(req.body)
      return res.send(newDevice)
    } catch (error) {
      console.error(error)
      return res.send(error)
    }
  })

  server.patch('/users/:user_id/devices/:device_id', async (req, res) => {
    try {
      const updatedDevice = await db.device().update(req.params, req.body)
      return res.send(updatedDevice)
    } catch (error) {
      console.error(error)
      return res.send(error)
    }
  })

  server.del('/users/:user_id/devices/:device_id', async (req, res) => {
    try {
      await db.device().del(req.params)
      res.status(204)
      return res.send()
    } catch (error) {
      console.error(error)
      return res.send(error)
    }
  })
}

module.exports = routes
