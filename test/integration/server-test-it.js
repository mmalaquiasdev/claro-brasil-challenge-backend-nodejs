const {defaultIosDevice, defaultAndroidDevice} = require('./mocks')

describe('Routes of Devices', () => {
  describe('Route GET /users/{id}/devices', () => {
    it('Should return a list of books and STATUS CODE 200 OK', (done) => {
      request
        .get('/users/1/devices')
        .end((err, res) => {
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
})
