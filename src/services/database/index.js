const deviceFactory = require('./device')

const dbFactory = (dbConfig) => ({
  device: deviceFactory(dbConfig)
})

module.exports = dbFactory
