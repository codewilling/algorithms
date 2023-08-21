//current number x number away
//if number at index i is <= current number, multiply by pointer by current number
// function maxArea(height: number[]): number {
//   let maximum = 0;
//   for (let i = 0; i < height.length; i++) {
//     console.log(i);
//     let pointer = 1;
//     let nextNumber = height[i + pointer];
//     if (nextNumber) {
//       if (nextNumber <= height[i]) {
//         let product = pointer * nextNumber;
//         console.log(product);
//         if (product > maximum) {
//           maximum = product;
//           console.log(maximum);
//         }
//       }
//       nextNumber = height[i + pointer + 1];
//       console.log(nextNumber);
//       pointer++;
//       console.log(pointer);
//     }
//   }
//   return maximum;
// }

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function maxArea(height: number[]) {
  let leftPointer = 0;
  let righPointer = height.length - 1;
  let maximum = 0;
  while (leftPointer < righPointer) {
    let width = righPointer - leftPointer;
    let product = width * Math.min(height[leftPointer], height[righPointer]);
    maximum = Math.max(product, maximum);
    if (height[leftPointer] < height[righPointer]) {
      leftPointer++;
    } else {
      righPointer--;
    }
  }
  return maximum;
}

console.log(maxArea(height));

// Runtime
// Details
// 76ms
// Beats 59.46%of users with TypeScript
// Memory
// Details
// 50.56MB
// Beats 97.67%of users with TypeScript
