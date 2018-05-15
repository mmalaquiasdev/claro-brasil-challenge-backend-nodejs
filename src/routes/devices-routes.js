const handlerFindAll = (req, res) => {
  return getDeviceDatabaseModel(req)
    .findAll({
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
      return res.send(err)
    })
}

const handlerFindOne = (req, res) => {
  return getDeviceDatabaseModel(req)
    .findOne({
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
      return res.send(err)
    })
}

const handlerCreate = (req, res) => {
  return getDeviceDatabaseModel(req)
    .create(req.body)
    .then(data => {
      res.status(201)
      return res.json(data)
    })
    .catch(err => {
      res.status(412)
      return res.send(err)
    })
}

const handlerUpdateName = (req, res) => {
  const name = req.body.name

  return getDeviceDatabaseModel(req)
    .update({ name }, {
      where: {
        user_id: req.params.user_id,
        id: req.params.id
      }
    })
    .then(() => handlerFindOne(req, res))
    .catch(err => {
      res.status(412)
      return res.send(err)
    })
}

const handlerDelete = (req, res) => {
  return getDeviceDatabaseModel(req)
    .destroy({
      where: {
        user_id: req.params.user_id,
        id: req.params.id
      }
    })
    .then(() => res.json(204))
    .catch(err => {
      res.status(412)
      return res.send(err)
    })
}

const getDeviceDatabaseModel = (req) => req.$database.models.Device

module.exports = {
  devicesHandlerFindAll: handlerFindAll,
  devicesHandlerFindOne: handlerFindOne,
  devicesHandlerCreate: handlerCreate,
  devicesHandlerUpdateName: handlerUpdateName,
  devicesHandlerDelete: handlerDelete
}
