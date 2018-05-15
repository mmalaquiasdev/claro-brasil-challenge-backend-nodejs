describe('Routes of Devices', () => {
  describe('Route GET /users/{id}/devices', () => {
    it('Should return a list of books and STATUS CODE 200 OK', (done) => {
      request
        .get('/users/1/devices')
        .end((err, res) => {
          done(err)
        })
    })
  })
})
