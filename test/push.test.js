const Stack = require('../index')

test('pushing to stack changes size', ()=>{
	let stack = new Stack()
	stack.push('something')
	expect(stack.count).toBe(1)
})

test('pushes to end of stack', ()=>{
	let stack = new Stack()
	stack.storage['0'] = 'something'
	stack.count = 1
	stack.push('something-else')
	expect(stack.storage[stack.count-2]).toBe('something')
	expect(stack.storage[stack.count-1]).toBe('something-else')
})
