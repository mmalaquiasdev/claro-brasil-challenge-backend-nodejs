const getConnection = (NODE_ENV) => {
  if (NODE_ENV === 'test') return databaseTest
  if (NODE_ENV === 'development') return databaseDevelopment
  if (NODE_ENV === 'production') return databaseProduction
}

const databaseTest = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './test-db.sqlite'
  }
})

const databaseDevelopment = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './dev-db.sqlite'
  }
})

const databaseProduction = ({
  client: process.env.DATABASE_CLIENT,
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_SCHEMA
  }
})

module.exports = { getConnection }
