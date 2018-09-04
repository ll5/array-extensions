Array.prototype.has = function (item) {
  for (let i of this) {
    if (i === item) return true
  }
  return false
  // let hasItem = false
  // this.forEach(i => {
  //   if (i === item) hasItem = true
  // })
  // return hasItem
}

Array.prototype.search = function (key, value) {
  return this.filter(i => i[key] === value)
}

Array.prototype.delete = function (item) {
  return this.filter(i => i !== item)
}

Array.prototype.deleteByIndex = function (idx) {
  this.splice(idx, 1)
  return this
}

Array.prototype.same = function (arr) {
  return this.filter(i => arr.has(i)) || []
}

Array.prototype.diff = function (arr) {
  let diff1 = this.filter(i => !arr.has(i)) || []
  let diff2 = arr.filter(i => !this.has(i)) || []
  return diff1.concat(diff2)
}

Array.prototype.unique = function () {
  return [...new Set(this)]
}