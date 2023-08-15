//loop through string
//check codePointAt between 48-57,65-90, ot 97-122
//convert to lowercase
//push to convertedString
//set second pointer
//loop through string backards (start at length-1)
//check if string at index(lowercase) is equal to convertedString
//while second pointer less than length of string, increase

function isPalindrome(s: string): boolean {
  let [convertedString, leftPointer, validPalindrome] = ["", 0, true];

  for (let i = 0; i < s.length; i++) {
    if (isValidAscii(s[i])) {
      convertedString += s[i].toLowerCase();
    }
  }
  let rightPointer = convertedString.length - 1;
  while (leftPointer < rightPointer) {
    if (convertedString[leftPointer] !== convertedString[rightPointer]) {
      validPalindrome = false;
      break;
    }
    leftPointer++;
    rightPointer--;
  }
  function isValidAscii(character: string): boolean {
    let code = character.charCodeAt(0);
    let codeIsNum = code >= 48 && code <= 57;
    let codeIsUppercaseLetter = code >= 65 && code <= 90;
    let codeIsLowercaseLetter = code >= 97 && code <= 122;
    return codeIsNum || codeIsUppercaseLetter || codeIsLowercaseLetter;
  }
  return validPalindrome;
}

const string = "A man, a plan, a canal: Panama";
console.log(isPalindrome(string));
