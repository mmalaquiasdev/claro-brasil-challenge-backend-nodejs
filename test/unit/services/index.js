const test = require('ava')
const {create} = require('../.././../src/services/device')

test('Should return a list of books', (t) => {
  const req = () => {
    t.is(1, 'error')

    return Promise.resolve({
      valor: () => 1
    })
  }

  return create(req).then((v) => {
    t.is(v, 1)
  })
})
