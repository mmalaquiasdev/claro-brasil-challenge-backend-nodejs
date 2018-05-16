const test = require('ava')

require('dotenv').config()

const db = require('knex')({
  client: process.env.DATABASE_CLIENT,
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_SCHEMA_TEST
  }
})

const devices = require('../../../../../src/services/database/device')(db)

test.beforeEach((t) => db('device').truncate())

test('Should create a device', async (t) => {
  const newDevice = await devices
    .create({
      user_id: 1,
      name: 'IPHONE 1',
      model: 'IOS'
    })

  t.is(newDevice.name, 'IPHONE 1')
  t.is(newDevice.model, 'IOS')
})

test('Should create a device with uppercase data', async (t) => {
  const newDevice = await devices
    .create({
      user_id: 2,
      name: 'samsung galaxy a5',
      model: 'android'
    })

  t.is(newDevice.name, 'SAMSUNG GALAXY A5')
  t.is(newDevice.model, 'ANDROID')
})
