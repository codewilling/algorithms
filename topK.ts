/*
Solution #1
*/
// function topKFrequent(nums: number[], k: number): number[] {
//   const map = new Map();

//   nums.forEach((n, i, a) => {
//     console.log(n);
//     const val = map.get(n);
//     console.log(val);
//     val === undefined ? map.set(n, 1) : map.set(n, val + 1);
//   });
//   console.log("map:", map);

//   const frequency = [...map];

//   frequency.sort((a, b) => b[1] - a[1]);
//   console.log("freq:", frequency);
//   let result: number[] = [];
//   let arIt = frequency.values();
//   while (result.length < k) {
  //     result.push(arIt.next().value[0]);
  //   }
  //   return result;
  // }
  
  /*
  Solution #2
  Bucket list sort
  
  use the indecises to equal the count of the numbers. e.g. for [1,,1,4,,6,6] wouuld equal [[],[4],[1, 6], []]
  */
let nums = [1, 1, 1, 2, 2, 3],
  k = 2;

function topKFrequent(nums: number[], k: number): number[] {
  let result: number[] = [];
  let freq: number[][] = Array(nums.length).fill([]);
  let count = new Map();
  //create a map to count the number of times each number appears
  for (let i = 0; i < nums.length; i += 1) {
    let key = nums[i];
    if (count.get(key) !== undefined) {
      count.set(key, count.get(key) + 1);
    } else {
      count.set(key, 1);
    }
  }
  console.log(count);
  //create an array from the map, using the amount of times a number appears as the index and storing the number at that index
  // let arrayCount = [...count]
  // console.log(arrayCount)
  count.forEach((val: number, key: number, map) => {
    freq[val] = [...freq[val], key];
  });
  console.log(freq);
  for (let i = freq.length; i > 0; i--) {
    if(freq[i].length){
      for (let j = 0; j < freq[i].length; j++) {
        result.push(freq[i][j]);
        if (result.length === k) break;
      }
    }
  }
  return result;
}

console.log(topKFrequent(nums, k));
