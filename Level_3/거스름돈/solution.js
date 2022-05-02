function solution(n, money) {
  let arr = new Array(n + 1).fill(0);
  arr[0] = 1;

  for (let x of money) {
    for (let i = x; i < n + 1; i++) {
      arr[i] = arr[i] + arr[i - x];
    }
  }
  return arr[n];
}