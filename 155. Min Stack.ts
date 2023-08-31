class MinStack {
  stack: number[];
  minStack: number[];
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val: number) {
    //Array with non-writable length - Object.defineProperty(numbers, "length", { writable: false });
    if(this.minStack.length !== 0){
      if (val < this.minStack[this.minStack.length - 1]) {
        this.minStack[this.minStack.length] = val;
      } else {
        this.minStack[this.minStack.length] =
          this.minStack[this.minStack.length - 1];
      }
    }
    if (this.stack.length === 0) {
      this.stack[0] = val;
      this.minStack[0] = val;
      console.log(this.stack);
      console.log(this.minStack);
    } else {
      this.stack[this.stack.length] = val;
    }
  }
  pop() {
    //Shortening an array - the extra elements are deleted
    this.stack.length = this.stack.length - 1;
    this.minStack.length = this.minStack.length - 1;
    console.log(this.stack)
    console.log(this.minStack)
  }
  top() {
    console.log(this.stack.length)
    
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    console.log(this.minStack);
    return this.minStack[this.minStack.length-1];
  }
}

const minStack = new MinStack();

console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-3));
console.log(minStack.getMin()); // return -3
console.log(minStack.pop());
console.log(minStack.top()); // return 0
console.log(minStack.getMin());


// Runtime
// Details
// 99ms
// Beats 65.89%of users with TypeScript
// Memory
// Details
// 50.30MB
// Beats 90.81%of users with TypeScript