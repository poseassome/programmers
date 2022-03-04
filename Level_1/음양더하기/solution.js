function solution(absolutes, signs) {
  var answer = 0;
  for (let i in absolutes) {
    absolutes[i] = signs[i] ? absolutes[i] : absolutes[i] * -1;
  }
  answer = absolutes.reduce((acc, cur) => acc + cur);
  return answer;
}