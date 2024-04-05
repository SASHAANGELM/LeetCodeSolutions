const lettersMap = new Map([
  ['a', 'A'],
  ['b', 'B'],
  ['c', 'C'],
  ['d', 'D'],
  ['e', 'E'],
  ['f', 'F'],
  ['g', 'G'],
  ['h', 'H'],
  ['i', 'I'],
  ['j', 'J'],
  ['k', 'K'],
  ['l', 'L'],
  ['m', 'M'],
  ['n', 'N'],
  ['o', 'O'],
  ['p', 'P'],
  ['q', 'Q'],
  ['r', 'R'],
  ['s', 'S'],
  ['t', 'T'],
  ['u', 'U'],
  ['v', 'V'],
  ['w', 'W'],
  ['x', 'X'],
  ['y', 'Y'],
  ['z', 'Z'],
  ['A', 'a'],
  ['B', 'b'],
  ['C', 'c'],
  ['D', 'd'],
  ['E', 'e'],
  ['F', 'f'],
  ['G', 'g'],
  ['H', 'h'],
  ['I', 'i'],
  ['J', 'j'],
  ['K', 'k'],
  ['L', 'l'],
  ['M', 'm'],
  ['N', 'n'],
  ['O', 'o'],
  ['P', 'p'],
  ['Q', 'q'],
  ['R', 'r'],
  ['S', 's'],
  ['T', 't'],
  ['U', 'u'],
  ['V', 'v'],
  ['W', 'w'],
  ['X', 'x'],
  ['Y', 'y'],
  ['Z', 'z'],
]);

export function isTwoLetterGood(left: string, right: string): boolean {
  if (left.length !== 1 || right.length !== 1) return true;
  if (left === lettersMap.get(right)) return false;
  return true;
}

export function makeGood(s: string): string {
  if (s.length < 2) return s;
  const stringArray = s.split('');
  for (let i = 0; i < stringArray.length - 1; i++) {
    const left = stringArray[i];
    const right = stringArray[i + 1];
    if (!isTwoLetterGood(left, right)) {
      stringArray.splice(i, 2);
      i = Math.max(i - 2, -1);
    }
  }
  return stringArray.join('');
}
