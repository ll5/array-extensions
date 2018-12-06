export function _has(item) {
  for (let i of this) {
    if (i === item) return true
  }
  return false
}