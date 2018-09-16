export function _search(key, value) {
	return this.filter(i => i[key] === value)
}

export function _delete(item) {
	return this.filter(i => i !== item)
}

export function _deleteByIndex(idx) {
	this.splice(idx, 1)
	return this
}

export function _same(arr) {
	return this.filter(i => arr.has(i)) || []
}

export function _diff(arr) {
	let diff1 = this.filter(i => !arr.has(i)) || []
	let diff2 = arr.filter(i => !this.has(i)) || []
	return diff1.concat(diff2)
}

export function _unique() {
	return [...new Set(this)]
}

export function _reverse() {
	let arr = []
	let len = this.length - 1
	for (let i = len; i >= 0; i--) {
		arr.push(this[i])
	}
	return arr
}