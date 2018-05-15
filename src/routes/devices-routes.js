const handlerFindAll = (req, res) => {
  return res.send([
    {
      id: 219412,
      user_id: 1,
      name: 'IPHONE SE (GSM)',
      model: 'IOS'
    },
    {
      id: 554131,
      user_id: 1,
      name: 'SM-G920F',
      model: 'ANDROID'
    }
  ])
}

module.exports = {
  devicesHandlerFindAll: handlerFindAll
}
