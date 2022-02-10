function solution(seoul) {
  var answer = '';
  for (let x of seoul) {
    if (x === "Kim") answer = seoul.indexOf(x);
  }
  return `김서방은 ${answer}에 있다`;
}