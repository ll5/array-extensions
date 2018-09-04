const array = require('../src/index')

let arr = [{a: 1}, {a: 2}, {a: 3}, {a: 4}]

//  搜索
test('search from arr', () => {
  expect(arr.search('a', 2)[0]).toBe(arr[1])
})
