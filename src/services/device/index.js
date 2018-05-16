const create = (db, body) => {

}

const userExceededDeviceLimit= async (db, body) => {
  const DEVICE_LIMIT = 3
  try {
    const count = await db.count(body.user_id)
    if(count === DEVICE_LIMIT) throw 
  } catch (error) {
    console.error(error)
    return error
  }
}
