const handlerFindAll = (req, res) => {
  const Device = req.$database.models.Device

  return Device.findAll({})
    .then(data => res.json(data))
    .catch(err => {
      res.status(412)
      res.send(err)

      return res
    })
}

module.exports = {
  devicesHandlerFindAll: handlerFindAll
}
