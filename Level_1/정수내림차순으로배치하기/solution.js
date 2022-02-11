function solution(n) {
  var answer = 0;
  answer = String(n).split("").sort().reverse().join("");
  return Number(answer);
}