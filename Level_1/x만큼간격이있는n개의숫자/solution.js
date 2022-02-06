function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}

// function solution(x, n) {
//   return nNumbers(x, n);
// }
// const nNumbers = (x, n) => {
//   return Array.from({ length: n }, (v, index) => (index + 1) * x);
// };