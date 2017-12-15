const Stack = require('../index')

test('peeking at stack does not change size', ()=>{
	let stack = new Stack()
	stack.storage['0'] = 'something'
	stack.count = 1
	stack.peek()
	expect(stack.size()).toBe(1)
})

test('peeking at an empty stack returns null', ()=>{
	let stack = new Stack()
	expect(stack.peek()).toBeNull()
})

test('peeks at last value from stack', ()=>{
	let stack = new Stack()
	stack.storage['0'] = 'something'
	stack.storage['1'] = 'something-else'
	stack.count = 2
	expect(stack.peek()).toBe('something-else')
})
