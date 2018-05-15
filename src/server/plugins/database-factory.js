const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const { databaseConfig } = require('../../config')

let database = null

const databaseFactory = (server) => {
  if (database) return database

  const sequelizeContext = createSequelizeContext(databaseConfig)
  database = initializeDatabeObject(sequelizeContext, Sequelize)
  server = registerDatabaseGlobalScope(server, databaseConfig, database)
  syncDatabase(sequelizeContext, database)

  return database
}

const loadDatabaseModels = (sequelize) => {
  const dir = path.join(__dirname, '../../models')

  const models = []

  fs.readdirSync(dir).forEach(file => {
    const modelDir = path.join(dir, file)
    const model = sequelize.import(modelDir)
    models[model.name] = model
  })

  return models
}

const createSequelizeContext = (databaseConfig) => {
  return new Sequelize(
    databaseConfig.database,
    databaseConfig.username,
    databaseConfig.password,
    databaseConfig.params
  )
}

const initializeDatabeObject = (sequelizeContext, Sequelize) => {
  database = {
    sequelizeContext,
    Sequelize,
    models: {}
  }

  database.models = loadDatabaseModels(sequelizeContext)

  return database
}

const syncDatabase = (sequelize, database) => sequelize.sync().done(() => database)

const registerDatabaseGlobalScope = (server, databaseConfig, database) => {
  server.$databaseConfig = databaseConfig
  server.$database = database

  return server
}

module.exports = databaseFactory
