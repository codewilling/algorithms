function productExceptSelf(nums: number[]): number[] {
  const result = [1];
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    //loop through and set current result position  to prefix then multiply current number with current prefix , set result to prefix
    result[i] = prefix;
    prefix *= nums[i];
  }
  // on the next iteration assign current result position to postfix multiplied by current value(which is the prefix from previous iteration) in current position, again multiply current number with current prefix and set result to prefix
  let postfix = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}
