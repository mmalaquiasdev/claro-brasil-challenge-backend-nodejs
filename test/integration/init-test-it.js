const supertest = require('supertest')
const chai = require('chai')

const server = require('../../src/server')

global.server = server
global.request = supertest(server)
global.expect = chai.expect
