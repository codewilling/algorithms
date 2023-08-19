function mergeSorted(ary1: number[], ary2: number[]): number[] {
  let result: number[] = [];
  if (!ary1.length || !ary2.length) return [...ary1, ...ary2];
  
    let ary1Pointer = 0;
    let ary2Pointer = 0;
    let num1 = ary1[ary1Pointer];
    let num2 = ary2[ary2Pointer];
    while (num1 || num2) {
      console.log(num1, num2)
      if (num1 < num2) {
        result.push(num1);
        num1 = ary1[ary1Pointer++]
        console.log(num1)
      } else if (num1 > num2) {
        result.push(num2);
        num2 = ary2[ary2Pointer++];
      } else {
        result.push(num1, num2);
        num1 = ary1[ary1Pointer++]
        num2 = ary2[ary2Pointer++];
      }
      if (num1 === undefined && num2) {
        result.push(num2);
        num2 = ary2[ary2Pointer++];
  
  
      }
      if (num2 === undefined && num1) {
        result.push(num1);
        num1 = ary1[ary1Pointer++]
  
  
      }
    }
  

  return result;
}

console.log(mergeSorted([0,3,4,31],[4,6,30]))
