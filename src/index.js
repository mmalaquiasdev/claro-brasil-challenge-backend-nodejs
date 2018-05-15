const server = require('./server')

const port = 3000

server.listen(port, () => console.log(`The server is running on port ${port}`))
