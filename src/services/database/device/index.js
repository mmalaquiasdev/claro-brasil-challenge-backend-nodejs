const deviceFactory = (db) => ({
  findAll: () => findAll(db),
  findOne: () => {},
  count: () => {},
  create: () => {},
  update: () => {},
  del: () => {}
})

const findAll = (db) => {
  return db.select().table('device')
}

module.exports = deviceFactory
