type Fn = (n: number, i: number) => any;

export function filter(arr: number[], fn: Fn): number[] {
  const newArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
