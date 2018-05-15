const handlerFindAll = (req, res) => {
  const Device = getDeviceDatabaseModel(req)

  return Device.findAll({
    where: {
      user_id: req.params.user_id
    }
  })
    .then(data => {
      if (!data.length) res.status(204)

      return res.json(data)
    })
    .catch(err => {
      res.status(412)
      res.send(err)

      return res
    })
}

const handlerFindOne = (req, res) => {
  const Device = getDeviceDatabaseModel(req)

  return Device.findOne({
    where: {
      user_id: req.params.user_id,
      id: req.params.id
    }
  })
    .then(data => {
      if (!data) res.status(404)

      return res.json(data)
    })
    .catch(err => {
      res.status(412)
      res.send(err)

      return res
    })
}

const handlerCreate = (req, res) => {
  console.log(`req: ${req}`)
  return getDeviceDatabaseModel(req)
    .create(req.body)
    .then(data => {
      res.status(201)
      return res.json(data)
    })
    .catch(err => {
      res.status(412)
      res.send(err)

      return res
    })
}

const getDeviceDatabaseModel = (req) => req.$database.models.Device

module.exports = {
  devicesHandlerFindAll: handlerFindAll,
  devicesHandlerFindOne: handlerFindOne,
  devicesHandlerCreate: handlerCreate
}
