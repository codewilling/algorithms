function isValid(s: string): boolean {
  let key = new Map([
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ]);
  let stack: string[] = [];
  console.log(key);
  if (s.length > 1) {
    stack.push(s[0]);
  } else {
    return false;
  }

  for (let i = 1; i < s.length; i++) {
    console.log(s[i]);
    if (s[i] === key.get(stack[stack.length - 1])) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  let result = stack.length ? false : true;
  return result;
}

console.log(isValid("(}"));

// Runtime
// Details
// 119ms
// Beats 5.12%of users with TypeScript
// Memory
// Details
// 49.35MB
// Beats 5.10%of users with TypeScript
