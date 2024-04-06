export function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const newArray = [...arr];
  for (let i = 0; i < newArray.length; i++) {
    const element = newArray[i];
    newArray[i] = fn(element, i);
  }
  return newArray;
}
