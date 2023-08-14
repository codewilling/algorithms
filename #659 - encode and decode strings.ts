//#659 - Encode and Decode Strings
// write two functions, one that will encode a string and another that will decode the output of the encode function returnin the original string

function encode(input: string[]): string {
  let res = "";
  for (let i = 0; i < input.length; i++) {
    const wordLength = input[i].length;
    const encodedString = wordLength.toString(10) + "*" + input[i];
    res += encodedString;
  }
  return res;
}

function decode(input: string): string[] {
  let res: string[] = [];
  let i = 0;
  while (i < input.length) {
    // let j = i;
    let j = i + 1;
    // while (input[j] !== "*") {
    let length = Number(input[i]);
    let word = input.substring(j + 1, j + length + 1);
    console.log(word);
    res.push(word);
    i = j + length + 1;
    // }
  }

  return res;
}

let input = ["lint", "code", "love", "you"];
let encoded = encode(input);
console.log(encoded);
console.log(decode(encoded));
