function trap(height: number[]): number {
  let result = 0;
  let leftPointer = 0;
  let righPointer = height.length - 1;

  let maxLeft = height[leftPointer];
  let maxRight = height[righPointer];
  while (leftPointer < righPointer) {
    if (maxLeft <= maxRight) {
      leftPointer++;
      let curentHeight = height[leftPointer];
      let remainder = maxLeft - curentHeight;
      if (remainder > 0) result += remainder;
      maxLeft = Math.max(curentHeight, maxLeft);
    }
    if (maxRight < maxLeft) {
      righPointer--;
      let currentHeight = height[righPointer];
      let remainder = maxRight - currentHeight;
      if (remainder > 0) result += remainder;
      maxRight = Math.max(currentHeight, maxRight);
    }
  }
  return result;
}

// Runtime
// Details
// 60ms
// Beats 86.84%of users with TypeScript
// Memory
// Details
// 44.79MB
// Beats 95.18%of users with TypeScript