function solution(a, b) {
  var answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// 다른 풀이
function solution(a, b) {
  var answer = a.reduce((acc, cur, idx) => acc += cur * b[idx], 0)
  return answer;
}