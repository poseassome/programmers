function solution(s) {
  var answer = '';
  let min = Number.MIN_SAFE_INTEGER;
  let max = Number.MAX_SAFE_INTEGER;
  s = s.split(' ');
  for (let x of s) {
    x = Number(x);
    if (x <= max) max = x;
    if (x >= min) min = x;
  }
  answer += max + ' ' + min;
  return answer;
}