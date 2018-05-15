const plugins = [
  require('./cors')
]

const registerPlugins = (server) => {
  plugins.forEach((plugin) => plugin(server))
}

module.exports = registerPlugins
