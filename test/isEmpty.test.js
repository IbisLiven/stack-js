const Stack = require('../index')

test('returns true when empty',()=>{
	let stack = new Stack()
	expect(stack.isEmpty()).toBe(true)
})

test('returns false when storage not empty',()=>{
	let stack = new Stack()
	stack.storage['0'] = 'something'
	expect(stack.isEmpty()).toBe(false)
})

test('returns false when count is not zero',()=>{
	let stack = new Stack()
	stack.count = 1
	expect(stack.isEmpty()).toBe(false)
})
