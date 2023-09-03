function evalRPN(tokens: string[]): number {
  let stack: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i]) {
      case "+":
        stack.push(stack.pop()! + stack.pop()!);

        break;
      case "-":
        let topNumM = stack.pop();
        let bottomNumM = stack.pop();
        stack.push(bottomNumM! - topNumM!);

        break;
      case "*":
        stack.push(stack.pop()! * stack.pop()!);

        break;
      case "/":
        let topNumD = stack.pop();
        let bottomNumD = stack.pop();
        let result = Math.trunc(bottomNumD! / topNumD!);

        stack.push(result);
        break;
      default:
        console.log(stack);
        stack.push(Number.parseInt(tokens[i]));
    }
  }
  return stack[0];
}

let tokens = ["4","13","5","/","+"]

console.log(evalRPN(tokens));


// Runtime
// Details
// 75ms
// Beats 37.22%of users with TypeScript
// Memory
// Details
// 44.88MB
// Beats 84.44%of users with TypeScript