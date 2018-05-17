const errors = require('restify-errors')

const findAll = async (req) => {
  try {
    const devices = await req.$db.device.findAll(req.params)
    return devices
  } catch (error) {
    console.error(error)
    throw error
  }
}

const findOne = async (req) => {
  try {
    const device = await req.$db.device.findOne(req.params)
    if (!device) throw new errors.NotFoundError('Device not found')
    return device
  } catch (error) {
    throw error
  }
}

const create = async (req) => {
  try {
    await verifyDeviceLimitExceeded(req.$db, req)
    req.body.user_id = req.params.user_id
    const newDevice = await req.$db.device.create(req.body)
    return newDevice
  } catch (error) {
    throw error
  }
}

const destroy = async (req) => {
  try {
    await verifyMinialDeviceLimitExceeded(req.$db, req)
    const affectRow = await req.$db.device.del(req.params)

    if (affectRow === 0) throw new errors.NotFoundError('Device not found')

    return affectRow
  } catch (error) {
    throw error
  }
}

const update = async (req) => {
  try {
    const updatedDevice = await req.$db.device.update(req.params, req.body)
    return updatedDevice
  } catch (error) {
    console.error(error)
    throw error
  }
}

const verifyDeviceLimitExceeded = async (db, req) => {
  const DEVICE_LIMIT = 3
  try {
    const devices = await findAll(req)
    if (devices.length >= DEVICE_LIMIT) {
      const filtredDevices = devices.filter(device => userCanModifyDevices(device.update_at))
      if (filtredDevices.length !== 0) {
        throw new errors.PreconditionFailedError('Device limit exceeded, user has 3 registered. Please remove one device to subscribe a new one')
      }
      throw new errors.PreconditionFailedError('Device limit exceeded, user has 3 devices registered')
    }
  } catch (error) {
    throw error
  }
}

const verifyMinialDeviceLimitExceeded = async (db, req) => {
  const DEVICE_LIMIT = 1
  try {
    const devices = await findAll(req)

    if (devices.length <= DEVICE_LIMIT) {
      throw new errors.PreconditionFailedError('Minimal device limit exceeded, user has 1 device registered')
    }
  } catch (error) {
    throw error
  }
}

const userCanModifyDevices = (lastChangeDate) => {
  const PERIOD_DAYS_BLOCK = 30
  const lastDate = new Date(lastChangeDate)
  const actualDate = new Date()
  const timeDiff = Math.abs(actualDate.getTime() - lastDate.getTime())
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

  return diffDays >= PERIOD_DAYS_BLOCK
}

module.exports = {
  findAll: findAll,
  findOne: findOne,
  create: create,
  destroy: destroy,
  update: update
}
