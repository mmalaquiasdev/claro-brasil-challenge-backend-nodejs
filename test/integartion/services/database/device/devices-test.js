const test = require('ava')

require('dotenv').config()

const db = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './devices-db.sqlite'
  }
})

const devices = require('../../../../../src/services/database/device')(db)

const createOneDevice = () => {
  return devices
    .create({
      user_id: 1,
      name: 'IPHONE 1',
      model: 'IOS'
    })
}

test.beforeEach((t) => db('device').truncate())
test.after.always((t) => db('device').truncate())

test('Should create a device', async (t) => {
  const params = { user_id: 1 }

  await createOneDevice()

  const array = await devices.findAll(params)
  const newDevice = array[0]

  t.is(newDevice.name, 'IPHONE 1')
  t.is(newDevice.model, 'IOS')
})

test('Should create a device with uppercase data', async (t) => {
  const params = { user_id: 2 }

  await devices
    .create({
      user_id: 2,
      name: 'samsung galaxy a5',
      model: 'android'
    })

  const array = await devices.findAll(params)
  const newDevice = array[0]

  t.is(newDevice.name, 'SAMSUNG GALAXY A5')
  t.is(newDevice.model, 'ANDROID')
})

test('Should update a device', async (t) => {
  const params = {
    device_id: 1,
    user_id: 1
  }

  await createOneDevice()

  const updatedDevice = await devices.update(params, {name: 'Moto G5'})

  t.is(updatedDevice.name, 'MOTO G5')
})

test('Should delete a device', async (t) => {
  const params = {
    device_id: 1,
    user_id: 1
  }

  const affectedRows = 1
  await createOneDevice()

  const deletedDevice = await devices.del(params)

  t.is(deletedDevice, affectedRows)
})

test('Should return a list of device', async (t) => {
  const length = 3

  const params = { user_id: 1 }

  await createOneDevice()
  await createOneDevice()
  await createOneDevice()

  const array = await devices.findAll(params)

  t.is(array.length, length)
})

test('Should return one device', async (t) => {
  await createOneDevice()
  const params = {
    device_id: 1,
    user_id: 1
  }

  const device = await devices.findOne(params)

  t.is(device.id, 1)
})
