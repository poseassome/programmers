function solution(n) {
  var answer = 0;
  if (Math.sqrt(n) > 0 && Math.sqrt(n) % 1 === 0) answer = Math.pow(Math.sqrt(n) + 1, 2);
  else return -1;
  return answer;
}