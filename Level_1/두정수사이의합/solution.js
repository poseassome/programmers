function solution(a, b) {
  var answer = 0;
  if (a == b) return a;
  let min = Math.min(a, b), max = Math.max(a, b);
  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}