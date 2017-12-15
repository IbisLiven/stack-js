# Stack.js
An implementation of a stack using javascript objects

## methods

### Stack.from()
Creates a new stack from provided arguments.
any arrays in the arguments are flattened.

### Stack.prototype.clear()
deletes all items in the stack
(alias for Stack.prototype.empty)

### Stack.prototype.empty()
deletes all items in the stack

### Stack.prototype.isEmpty()
returns true if stack is empty, otherwise returns false.

### Stack.prototype.peek()
returns last item in stack without removing it

### Stack.prototype.pop()
pops the last item off the stack.

### Stack.prototype.push()
pushes an item to the stack.

### Stack.prototype.pushMany()
pushes many items to the stack in the order provided.
any arrays in the arguments are flattened.

### Stack.prototype.size()
returns the current size of the stack.

### Stack.prototype.swap()
swaps the last two items in the stack

## Properties
these are not meant to be accessed during normal use
### count
the number of items in the stack
### storage
all the items in the stack


## Examples
```js
const Stack = require('stack-js')

let stack = new Stack()

stack.isEmpty()	// true
stack.push(2)
stack.isEmpty()	// false
stack.push(3)
stack.push(4)
stack.size()	// 3
stack.peek()	// 4
stack.pop() 	// 4
stack.size()	// 2
stack.pop() 	// 3
stack.empty()
stack.size()	// 0
stack = Stack.from(1,2,[3,4],5)
stack.size()	// 5
stack.swap()
stack.pop() 	// 4
stack.pop() 	// 5
```
