export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const arr: string[] = [];
    for (let j = i; j < s.length; j++) {
      const char = s[j];
      if (arr.includes(char)) {
        break;
      } else {
        arr.push(char);
      }
    }
    if (arr.length > max) {
      max = arr.length
    }
  }
  return max;
};