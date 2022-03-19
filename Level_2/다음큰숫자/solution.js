function solution(n) {
  var answer = n;
  let one = n.toString(2).match(/1/g).length;
  while (true) {
    answer++
    if (one === answer.toString(2).match(/1/g).length) break;
  }
  return answer;
}