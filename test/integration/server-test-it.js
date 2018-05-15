const {defaultIosDevice, defaultAndroidDevice, newDevice} = require('./mocks')

describe('Routes of Devices', () => {
  const Device = server.$database.models.Device

  beforeEach((done) => {
    Device
      .destroy({where: {}})
      .then(() => {
        Device.create(defaultIosDevice)
        Device.create(defaultAndroidDevice)
      })
      .then(() => done())
  })

  describe('Route GET /users/{id}/devices', () => {
    it('Should return a list of devices and STATUS CODE 200 OK', (done) => {
      request
        .get('/users/1/devices')
        .end((err, res) => {
          expect(res.status).to.be.eql(200)
          expect(res.body.length).to.be.eql(2)

          expect(res.body[0].user_id).to.be.eql(defaultIosDevice.user_id)
          expect(res.body[0].name).to.be.eql(defaultIosDevice.name)
          expect(res.body[0].model).to.be.eql(defaultIosDevice.model)

          expect(res.body[1].user_id).to.be.eql(defaultAndroidDevice.user_id)
          expect(res.body[1].name).to.be.eql(defaultAndroidDevice.name)
          expect(res.body[1].model).to.be.eql(defaultAndroidDevice.model)

          done(err)
        })
    })
  })

  describe('Route GET /users/{user_id}/devices', () => {
    it('Should return a empyt list of devices and STATUS CODE 204 NO CONTENT', (done) => {
      request
        .get('/users/2/devices')
        .end((err, res) => {
          expect(res.status).to.be.eql(204)

          done(err)
        })
    })
  })

  describe('Route GET /users/{user_id}/devices/{id}', () => {
    it('Should return a device and STATUS CODE 200 OK', (done) => {
      request
        .get('/users/1/devices/219412')
        .end((err, res) => {
          expect(res.status).to.be.eql(200)

          expect(res.body.id).to.be.eql(defaultIosDevice.id)
          expect(res.body.user_id).to.be.eql(defaultIosDevice.user_id)
          expect(res.body.name).to.be.eql(defaultIosDevice.name)
          expect(res.body.model).to.be.eql(defaultIosDevice.model)

          done(err)
        })
    })
  })

  describe('Route GET /users/{user_id}/devices/{id}', () => {
    it('Should return a error msg and STATUS CODE 404 NOT FOUND', (done) => {
      request
        .get('/users/1/devices/666')
        .end((err, res) => {
          expect(res.status).to.be.eql(404)

          done(err)
        })
    })
  })

  describe('Route POST /users/{user_id}/devices', () => {
    it('Should create a device and STATUS CODE 201 CREATED', (done) => {
      request
        .post(`/users/${newDevice.user_id}/devices`)
        .send(newDevice)
        .end((err, res) => {
          expect(res.status).to.be.eql(201)

          expect(res.body.user_id).to.be.eql(newDevice.user_id)
          expect(res.body.name).to.be.eql(newDevice.name)
          expect(res.body.model).to.be.eql(newDevice.model)

          done(err)
        })
    })
  })

  describe('Route PATCH /users/{user_id}/devices/{id}', () => {
    let newNameIosDevice = defaultIosDevice;
    newNameIosDevice.name = 'IPHONE 7'

    it('Should update the name of the device and STATUS CODE 200 OK', (done) => {
      request
        .patch(`/users/${newDevice.user_id}/devices/${newNameIosDevice.id}`)
        .send(newNameIosDevice)
        .end((err, res) => {
          expect(res.status).to.be.eql(200)

          expect(res.body.name).to.be.eql(newNameIosDevice.name)

          done(err)
        })
    })
  })

  // after((done) => {
  //   Device
  //     .destroy({where: {}})
  //     .then(() => done())
  // })
})
