export function minRemoveToMakeValid(s: string): string {
  const arr = s.split('');
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      count++;
    } else if (arr[i] === ')') {
      count--;
    }
    if (count < 0) {
      arr[i]; //?
      arr.splice(i, 1);
      i--;
      count++;
    }
  }
  if (count > 0) {
    count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === ')') {
        count++;
      } else if (arr[i] === '(') {
        count--;
      }
      if (count < 0) {
        arr[i]; //?
        arr.splice(i, 1);
        count++;
      }
    }
  }
  return arr.join('');
}
