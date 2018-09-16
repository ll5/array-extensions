// const _ = require('../src/index')
import _ from '../src/index'

let numArr = [1, 2, 3, 4, 5]

// 测试 number 类型
test('arr has element 3', () => {
  expect(numArr.has(1)).toBe(true)
  expect(numArr.has(6)).toBe(false)
})

// 测试 object 类型
let objArr = [{a: 1}, {a: 2}, {a: 3}, {a: 4}]
let obj = objArr[3]
let obj2 = {a: 3}
test('arr has object {a:3}', () => {
  expect(objArr.has(obj)).toBe(true)
  expect(objArr.has(obj2)).toBe(false)
})
