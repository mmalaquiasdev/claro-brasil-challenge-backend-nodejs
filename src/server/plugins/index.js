const plugins = [
  require('./cors'),
  require('./database')
]

const registerPlugins = (server) => plugins.forEach((plugin) => plugin(server))

module.exports = registerPlugins
