const Stack = require('../index')

test('popping from stack changes size', ()=>{
	let stack = new Stack()
	stack.storage['0'] = 'something'
	stack.count = 1
	stack.pop()
	expect(stack.size()).toBe(0)
})

test('popping from empty stack returns null', ()=>{
	let stack = new Stack()
	expect(stack.pop()).toBeNull()
})

test('pops last value from stack', ()=>{
	let stack = new Stack()
	stack.storage['0'] = 'something'
	stack.storage['1'] = 'something-else'
	stack.count = 2
	expect(stack.pop()).toBe('something-else')
})
