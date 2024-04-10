export function deckRevealedIncreasing(deck: number[]): number[] {
  const sortedDeck = [...deck].sort((a, b) => b - a);
  const orderedDeck: number[] = [];
  for (const card of sortedDeck) {
    if (orderedDeck.length > 1) {
      const a = orderedDeck.pop();
      if (a != null) {
        orderedDeck.unshift(a);
      }
    }
    orderedDeck.unshift(card);
  }
  return orderedDeck;
}
