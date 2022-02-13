function solution(num) {
  var answer = 0;
  while (num !== 1) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    if (answer < 500) answer++;
    else return -1;

  }
  return answer;
}