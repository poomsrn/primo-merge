export function merge(collection1: number[], collection2: number[]): number[] {
  let arr: number[] = [];
  let indexCol1 = 0;
  let indexCol2 = 0;

  while (indexCol1 < collection1.length && indexCol2 < collection2.length) {
    if (collection1[indexCol1] <= collection2[indexCol2]) {
      arr.push(collection1[indexCol1]);
      indexCol1++;
    } else {
      arr.push(collection2[indexCol2]);
      indexCol2++;
    }
  }
  while (indexCol1 < collection1.length) {
    arr.push(collection1[indexCol1]);
    indexCol1++;
  }
  while (indexCol2 < collection2.length) {
    arr.push(collection2[indexCol2]);
    indexCol2++;
  }
  return arr;
}
