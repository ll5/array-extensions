import {_has} from './returnBoolean'
import {
	_delete,
	_deleteByIndex,
	_diff,
	_reverse,
	_same,
	_search,
	_unique
} from './returnArray'


Object.defineProperties(Array.prototype, {
	has: { value: _has},
	search: { value: _search},
	delete: { value: _delete},
	deleteByIndex: { value: _deleteByIndex},
	same: { value: _same},
	diff: { value: _diff},
	unique: { value: _unique},
	reverse: { value: _reverse}
})
// include, indexOf, some, map, forEach, find, filter,reduce, findIndex, max, min, swap,flaten, removeUnvaliable, every
// https://blog.csdn.net/zhu7478848/article/details/53190689
// https://www.cnblogs.com/shikelong/p/4489615.html
