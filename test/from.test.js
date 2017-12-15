const Stack = require('../index')

test('new stack has count',()=>{
	let stack = Stack.from()
	expect(stack.count).toBe(0)
})
test('new stack has storage',()=>{
	let stack = Stack.from()
	expect(stack.storage).toMatchObject({})
})
test('new stack has appropriate count',()=>{
	let stack = Stack.from('somthing','something-else')
	expect(stack.count).toBe(2)
})
test('new stack has appropriate storage',()=>{
	let stack = Stack.from('something','something-else')
	expect(stack.storage).toMatchObject({
		"0":"something",
		"1":"something-else"
	})
})
test('array is flattened if only argument',()=>{
	let stack = Stack.from(['something','something-else'])
	expect(stack.count).toBe(2)
	expect(stack.storage).toMatchObject({
		"0":"something",
		"1":"something-else"
	})
})
test('all arrays are flattened properly',()=>{
	let stack = Stack.from('something',['something-else',['something-other','some thing']],'some other thing')
	expect(stack.count).toBe(5)
	expect(stack.storage).toMatchObject({
		"0":"something",
		"1":"something-else",
		"2":"something-other",
		"3":"some thing",
		"4":"some other thing",
	})
})
