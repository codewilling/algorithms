function threeSum(nums: number[]): number[][] {
  let result: number[][] = [];

  //order in ascending
  let sortedNums = [...nums].sort((a, b) => a - b);
  //****1ST ATTEMPT****
  //since numbers are sorted, adjust to find zero
  //start all three at lowest, increase highest first until all zero's are found
  //if highest goes over zero adjust middle until all zero's are found
  // sortedNums.forEach((val, idx) => {
  //   if (idx > 0 && val === sortedNums[idx - 1]) idx++;
  //   let lowestPointer = idx;
  //   let middlePointer = idx + 1;
  //   let highestPointer = sortedNums.length - 1;
  //   while (middlePointer < highestPointer) {
  //     let num1 = sortedNums[lowestPointer];
  //     let num2 = sortedNums[middlePointer];
  //     let num3 = sortedNums[highestPointer];
  //     let sum = num1 + num2 + num3;
  //     console.log(sum);
  //     if (sum > 0) {
  //       highestPointer--;
  //     } else if (sum < 0) {
  //       middlePointer++;
  //     } else {
  //       result.push([num1, num2, num3]);
  //     }
  // if (sum === 0) {
  //   result.push([num1, num2, num3]);
  // }
  // if (sum < 0 ) {
  //     middlePointer++;
  // }
  // if (sum > 0 ) {
  //     highestPointer--;
  // }
  //   }
  // });

  //**** SECOND ATTEMPT ****
  //keep moving lower pointer if same as previous value
  //if lowerpointer + L + R is equal to 0, add to result
  //if sum >0, decrease sum by moving HighPointer lower
  //if sum<0, increase sum by moving middle pointer
  // middle and Highpointer should never equal previous values
  for (let i = 0; i < sortedNums.length; i++) {
    let lowPointer = i;
    while (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      lowPointer = ++i;
    }
    let midPointer = i + 1;
    let highPointer = sortedNums.length - 1;
    console.log(lowPointer, midPointer, highPointer);
    while (midPointer < highPointer) {
      let sum =
        sortedNums[lowPointer] +
        sortedNums[midPointer] +
        sortedNums[highPointer];
      console.log(sum);
      if (sum < 0) {
        midPointer++;
      } else if (sum > 0) {
        highPointer--;
      } else {
        result.push([
          sortedNums[lowPointer],
          sortedNums[midPointer],
          sortedNums[highPointer],
        ]);
        console.log(result);
        midPointer++;
        while (
          sortedNums[midPointer] === sortedNums[midPointer - 1] &&
          midPointer < highPointer
        ) {
          midPointer++;
        }
        console.log(midPointer);
      }
    }
  }

  return result;
}

console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));

// Runtime
// Details
// 161ms
// Beats 83.96%of users with TypeScript
// Memory
// Details
// 59.17MB
// Beats 64.88%of users with TypeScript
