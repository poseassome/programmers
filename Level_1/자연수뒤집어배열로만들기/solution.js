function solution(n) {
  var answer = [];
  n = n.toString().split('').reverse();
  for (let x of n) {
    answer.push(Number(x));
  }
  return answer;
}

/* 다른 풀이 */
// function solution(n) {
//   return n.toString().split('').reverse().map(val => parseInt(val));
// }