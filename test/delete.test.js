const array = require('../src/index')

let numArr = [1, 2, 3, 4, 5]

// 测试 number 类型
test('delete number-type element', () => {
  expect((numArr.delete(1))[0]).toBe(2)
})

// 测试 object 类型
let objArr = [{a: 1}, {a: 2}, {a: 3}, {a: 4}]
let obj = objArr[3]
test('delete object-type element', () => {
  expect((objArr.delete(obj)).length).toBe(3)
})
