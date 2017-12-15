const Stack = require('../index')

test('pushing to stack changes size', ()=>{
	let stack = new Stack()
	stack.pushMany('something')
	expect(stack.count).toBe(1)
})

test('pushing to stack changes size appropriately', ()=>{
	let stack = new Stack()
	stack.pushMany('something','something-else')
	expect(stack.count).toBe(2)
})

test('pushes to end of stack', ()=>{
	let stack = new Stack()
	stack.storage['0'] = 'something'
	stack.count = 1
	stack.pushMany('something-else')
	expect(stack.storage[stack.count-2]).toBe('something')
	expect(stack.storage[stack.count-1]).toBe('something-else')
})

test('pushes to end of stack in right order', ()=>{
	let stack = new Stack()
	stack.pushMany('something','something-else')
	expect(stack.storage[stack.count-2]).toBe('something')
	expect(stack.storage[stack.count-1]).toBe('something-else')
})
