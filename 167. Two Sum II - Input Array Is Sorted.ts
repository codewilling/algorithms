//**Numbers are sorted in ascending order**
//traverse array using two pointers to find match
//adjust pointers as needed when sum of numbers is out of bounds from target

function twoSum(numbers: number[], target: number): number[] {
  let result: number[] = [];
  //two pointers
  let lowPointer = 0;
  let highPointer = numbers.length - 1;

  while (lowPointer < highPointer) {
    let sum = numbers[lowPointer] + numbers[highPointer];
    if (sum === target) {
      result = [lowPointer + 1, highPointer + 1];
      break;
    }
    if (sum > target) {
      highPointer -= 1;
    } else {
      lowPointer += 1;
    }
  }

  return result;
}

// TypeScript
// Runtime
// 63 ms
// Beats
// 69.24%
// Memory
// 43.2 MB
// Beats
// 90.48%
