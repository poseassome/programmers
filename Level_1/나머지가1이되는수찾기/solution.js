function solution(n) {
  var answer = 0;
  for (let x = 2; x <= n; x++) {
    if ((n - 1) % x == 0) {
      answer = x;
      break;
    }
  }
  return answer;
}