export function trap(height: number[]): number {
  if (height.length < 3) return 0;

  const peaks: number[] = [];
  for (let i = 0; i < height.length; i++) {
    if (i === 0) {
      if (height[i] > height[i + 1]) {
        peaks.push(i);
      }
    } else if (i === height.length - 1) {
      if (height[i - 1] < height[i]) {
        peaks.push(i);
      }
    } else {
      if (height[i - 1] < height[i] && height[i] > height[i + 1]) {
        peaks.push(i);
      }
    }
  }
  peaks; //?
  return 0;
}
