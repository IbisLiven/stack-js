const Stack = require('../index')

test('returns null if less than two items on stack',()=>{
	let stack = new Stack()
	expect(stack.swap()).toBeNull()
	stack.storage['0'] = 'something'
	stack.count = 1
	expect(stack.swap()).toBeNull()
})

test('swaps two items',()=>{
	let stack = new Stack()
	stack.storage['0'] = 'something'
	stack.storage['1'] = 'something-else'
	stack.count = 2
	stack.swap()
	expect(stack.storage['0']).toBe('something-else')
	expect(stack.storage['1']).toBe('something')
})

test('swaps last two items',()=>{
	let stack = new Stack()
	stack.storage['0'] = 'something'
	stack.storage['1'] = 'something-else'
	stack.storage['2'] = 'something-other'
	stack.count = 3
	stack.swap()
	expect(stack.storage[stack.count-2]).toBe('something-other')
	expect(stack.storage[stack.count-1]).toBe('something-else')
})
