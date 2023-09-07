function generateParenthesis(n: number): string[] {
  let stack: string[] = [];
  let res: string[] = [];

  function backtrack(openN, closedN) {
    if (openN === closedN && openN === n) {
      res.push(stack.join(""));
      return;
    }
    if (openN < n) {
      stack.push("(");
      backtrack(openN + 1, closedN);
      stack.pop();
    }
    if (closedN < openN) {
      stack.push(")");
      backtrack(openN, closedN + 1);
      stack.pop();
    }
  }
  backtrack(0, 0);
  return res;
}

let n = 2;

console.log(generateParenthesis(n));

// Runtime
// Details
// 59ms
// Beats 63.38%of users with TypeScript
// Memory
// Details
// 44.48MB
// Beats 82.52%of users with TypeScript
