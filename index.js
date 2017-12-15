const flatten = ([...args]) => args.reduce((a, b)=> a.concat(Array.isArray(b) ? flatten(b) : b), [])

const Stack = function(){
	this.count = 0
	this.storage = {}
}

Stack.from = function(...args){
	const stack = new Stack()
	flatten(args).map(value=>stack.push(value))
	return stack
}

Stack.prototype.isEmpty = function(){
	return (this.count==0 && Object.keys(this.storage).length==0)?true:false
}

Stack.prototype.size = function(){
	return this.count
}

Stack.prototype.empty = function(){
	for(let key in Object.keys(this.storage)){
		delete this.storage[key]
	}
	this.count = 0
}

Stack.prototype.clear = function(){
	this.empty()
}

Stack.prototype.push = function(value){
	this.storage[this.count] = value
	this.count++
}

Stack.prototype.pushMany = function(...args){
	flatten(args).map(value=>this.push(value))
}

Stack.prototype.pop = function(){
	if(this.count === 0) return null
	const result = this.storage[--this.count]
	delete this.storage[this.count]
	return result
}

Stack.prototype.peek = function(){
	if(this.count === 0) return null
	return this.storage[this.count-1]
}

Stack.prototype.swap = function(){
	if(this.count < 2) return null
	const last = this.storage[this.count-1]
	const second = this.storage[this.count-2]
	this.storage[this.count-2] = last
	this.storage[this.count-1] = second
}

module.exports = Stack
