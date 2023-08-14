/*
1) loop through list of words
2) for each word, create a array
3) loop through the letters of a word
4) map the index of the array to the current letter, e.g. a=0, b=1, etc by using the characterCode as a number 
5) for each index increase the count by one each time a letter is present
6) after the word loop, turn the array into a string
7) use the string as key in a map
8) add the current word to a key with the same frequency count or 9) create a new key if one does not exist
10) finally loop through the map and return all the values in an array
*/



function groupAnagrams(strs: string[]): string[][] {
  const result: string[][] = [];
  const characterMap = new Map();
  for (let i = 0; i < strs.length; i += 1) {
    const characterCount = new Array(26).fill(0);

    for (let j = 0; j < strs[i].length; j += 1) {
      const index = strs[i].charCodeAt(j) - "a".charCodeAt(0);
      characterCount[index] += 1;
    }
    console.log("characterCount after update:", strs[i], characterCount);
    const countString = characterCount.join(",");

    const val = characterMap.get(countString);
    if (!val) {
      characterMap.set(countString, [strs[i]]);
    } else {
      characterMap.set(countString, [...val, strs[i]]);
    }
  }
  characterMap.forEach((val, key, map) => {
    result.push(val);
  });

  return result;
}

console.log(groupAnagrams(strs));
