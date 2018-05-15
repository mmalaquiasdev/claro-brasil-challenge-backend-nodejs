const model = (sequelizeContext, sequelizeDataType) => defineDeviceModel(sequelizeContext, sequelizeDataType)

const defineDeviceModel = (sequelizeContext, sequelizeDataType) => {
  return sequelizeContext.define('Device', {
    id: idColumn(sequelizeDataType),
    user_id: userIdColumn(sequelizeDataType),
    name: nameColumn(sequelizeDataType),
    model: modelColumn(sequelizeDataType)
  })
}

const idColumn = (sequelizeDataType) => ({
  type: sequelizeDataType.INTEGER,
  primaryKey: true,
  autoIncrement: true,
  allowNull: true
})

const userIdColumn = (sequelizeDataType) => ({
  type: sequelizeDataType.INTEGER,
  allowNull: true
})

const nameColumn = (sequelizeDataType) => ({
  type: sequelizeDataType.STRING,
  validate: {
    notEmpty: true
  }
})

const modelColumn = (sequelizeDataType) => ({
  type: sequelizeDataType.STRING,
  validate: {
    notEmpty: true
  }
})

module.exports = model
