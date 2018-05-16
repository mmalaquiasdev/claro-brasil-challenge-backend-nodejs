const deviceFactory = (db) => ({
  findAll: (params) => findAll(db, params),
  findOne: (params) => findOne(db, params),
  count: (params) => count(db, params),
  create: (body) => create(db, body),
  update: (params, body) => update(db, params, body),
  del: (params) => del(db, params)
})

const findAll = (db, params) => {
  return db
    .select()
    .table('device')
    .where({
      user_id: params.user_id
    })
}

const findOne = (db, params) => {
  return db
    .first()
    .table('device')
    .where({
      id: params.device_id,
      user_id: params.user_id
    })
}

const count = (db, params) => {
  return db('device')
    .first()
    .count('id AS count')
    .where('user_id', '=', params.user_id)
    .then((data) => data.count)
}

const create = (db, body) => {
  return db('device')
    .insert({
      user_id: body.user_id,
      name: body.name.toUpperCase(),
      model: body.model.toUpperCase()
    })
    .then((newId) => {
      const params = {
        device_id: newId,
        user_id: body.user_id
      }

      return findOne(db, params)
    })
}

const update = (db, params, body) => {
  return db('device')
    .update({
      name: body.name.toUpperCase()
    })
    .where({
      id: params.device_id,
      user_id: params.user_id
    })
    .then(() => findOne(db, params))
}

const del = (db, params) => {
  return db('device')
    .del()
    .where({
      id: params.device_id,
      user_id: params.user_id
    })
}

module.exports = deviceFactory
