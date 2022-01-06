function solution(s) {
  var answer = '';
  let idx = Math.ceil(s.length / 2);
  if (s.length % 2 != 0) {
    answer += s[idx - 1];
  } else {
    answer += s[idx - 1] + s[idx];
  }
  return answer;
}