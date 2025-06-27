export function add(numbers) {
  if (!numbers) return 0;
  const tokens = numbers.split(",").map(Number);
  return tokens.reduce((sum, n) => sum + n, 0);
}
