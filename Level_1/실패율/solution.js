function solution(N, stages) {
  var answer = [];
  for (let i = 1; i <= N; i++) {
    let body = stages.filter((element) => element >= i);
    let son = stages.filter((element) => element === i);
    answer.push([i, son.length / body.length]);
  }
  answer.sort((a, b) => b[1] - a[1]);
  return answer.map((x) => x[0]);
}