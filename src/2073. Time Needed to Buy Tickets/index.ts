export function timeRequiredToBuy(tickets: number[], k: number): number {
  let index = 0;
  let time = 0;
  let isSomeNotZero = tickets.some((i) => i > 0);
  while (isSomeNotZero) {
    if (tickets[index] > 0) {
      tickets[index]--;
      time++;
    }
    if (index === k && tickets[index] === 0) return time;
    index < tickets.length - 1 ? (index = index + 1) : (index = 0);
    isSomeNotZero = tickets.some((i) => i > 0);
  }
  return 0;
}
