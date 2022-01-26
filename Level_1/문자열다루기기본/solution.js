function solution(s) {
  var answer = false;
  if (s != parseInt(s)) return false
  if (s.length == 4 || s.length == 6)
    if (!isNaN(s)) answer = true
  return answer;
}