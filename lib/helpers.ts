export function getRandomFloat(min: number = 0.1, max: number = 3): number {
  return Math.random() * (max - min) + min;
}
