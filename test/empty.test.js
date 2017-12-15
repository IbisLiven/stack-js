const Stack = require('../index')

test('clears storage',()=>{
	let stack = new Stack()
	stack.storage['0'] = 'something'
	stack.empty()
	expect(Object.keys(stack.storage).length).toBe(0)
})

test('resets count',()=>{
	let stack = new Stack()
	stack.count = 1
	stack.empty()
	expect(stack.count).toBe(0)
})
