function solution(n, works) {
  while (n > 0) {
    works.sort((a, b) => b - a);
    works[0]--;
    n--;
  }
  if (works.reduce((a, b) => a + b) <= n) return 0;
  return works.reduce((a, b) => a + Math.pow(b, 2), 0);
}