function solution(n, m) {
  var answer = [];
  let pi = [];
  let big = Math.max(n, m);
  let small = Math.min(n, m);
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i <= big; i++) {
    if (big % i == 0) pi.push(i);
  }
  for (let j = 0; j < pi.length; j++) {
    if (small % pi[j] == 0 && pi[j] > max) {
      max = pi[j];
    }
  }
  answer.push(max);
  answer.push(small * big / max);
  return answer;
}