function longestConsecutive(nums: number[]): number {
  //create a set
  const uniqueNumbers = new Set(nums);
  //loop through nums
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let longest = 0;
    //check if current number is beginning of sequence
    if (!uniqueNumbers.has(nums[i] - 1)) {
      //if beginning of sequence, keep looking for next number in sequence add to longest
      while (uniqueNumbers.has(nums[i] + longest)) {
        longest += 1;
      }
    }
    if (longest > max) {
      max = longest;
    }
  }
  return max;
}
