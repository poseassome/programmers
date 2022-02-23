function solution(x) {
  var answer = true;
  let n = String(x).split('').reduce((acc, curr) => acc + parseInt(curr), 0);
  x % n === 0 ? answer : answer = false;
  return answer;
}