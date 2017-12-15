const Stack = require('../index')

test('returns size by count',()=>{
	let stack = new Stack()
	stack.count = 1
	expect(stack.size()).toBe(1)
})

test('does not return size by storage',()=>{
	// it would be a problem if count is not equal to storage, but count is the number we want
	let stack = new Stack()
	stack.storage['0'] = 'something'
	expect(stack.size()).toBe(0)
})
