function longestConsecutive(nums: number[]): number {
  if (nums.length < 2) {
    return 1;
  } else {
    let sorted = [...nums].sort((a, b) => a - b);
    console.log(sorted);
    let longestSequence: number[] = [];
    let currentSequence: number[] = [];
    currentSequence.push(sorted[0]);
    longestSequence.push(sorted[0]);
    console.log(currentSequence);
    for (let i = 1; i < sorted.length; i++) {
      let nextValInSorted = sorted[i];
      console.log(nextValInSorted);
      let nextInSequence = currentSequence[currentSequence.length - 1] + 1;
      console.log(nextInSequence);

      if (nextValInSorted === nextInSequence) {
        currentSequence.push(sorted[i]);
        if (currentSequence.length > longestSequence.length) {
          longestSequence = currentSequence;
          console.log(longestSequence);
        }
      } else {
        currentSequence = [sorted[i]];
      }
    }
    console.log(longestSequence);
    return longestSequence.length;
  }
}

//if length is less than 2, return array[0]
//

let nums = [1, 2, 0, 1];
console.log(longestConsecutive(nums));
