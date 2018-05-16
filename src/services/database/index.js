const db = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'claro_brasil_nodejs'
  }
})

module.exports = {
  device: () => require('./device')(db)
}
