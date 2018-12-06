export function _forEach(fun) {
  let len = this.length
  for (let i = 0; i < len; i++) {
    fun(i)
  }
}