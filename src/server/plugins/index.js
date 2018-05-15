const plugins = [
  require('./cors'),
  require('./database-factory'),
  require('./database-plugin')
]

const registerPlugins = (server) => plugins.forEach((plugin) => plugin(server))

module.exports = registerPlugins
