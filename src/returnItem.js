export function _find(fun) {
  let len = this.length
  for(let i = 0; i < len; i++) {
    if(fun(i)) {
      return i
    }
  }
}

export function _max(fun) {
  let len = this.length
  let m = undefined
  for(let i = 0; i < len; i++) {
    let v
    if(typeof fun === "function") {
      v = fun(i)
    }
    if(v > m || m === undefined) {
      m = v
    }
  }
  return m
}



// include, indexOf, some, map, forEach, find, filter,reduce, findIndex, max, min, swap,flaten, removeUnvaliable, every
// https://blog.csdn.net/zhu7478848/article/details/53190689
// https://www.cnblogs.com/shikelong/p/4489615.html
