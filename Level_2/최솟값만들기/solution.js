function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  answer = A.reduce((acc, n, idx) => {
    return acc += n * B[idx];
  }, 0);
  return answer;
}