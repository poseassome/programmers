function solution(n) {
  var answer = 0;
  while (n > 0) {
    if (n % 2 !== 0) {
      n = (n - 1) / 2;
      answer++;
    } else {
      n = n / 2;
    }
  }
  return answer;
}