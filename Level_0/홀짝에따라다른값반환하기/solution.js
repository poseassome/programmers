function solution(n) {
  let res = 0;
  for (let i = (n % 2 ? 1 : 0); i <= n; i += 2) {
    res += (n % 2 ? i : i * i);
  }
  return res;
}