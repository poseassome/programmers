function solution(dartResult) {
  var answer = [];
  let num = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i].match(/[0-9]/)) {
      if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
        num = 10;
        i++;
      }
      else num = dartResult[i];
    }
    else if (dartResult[i] === 'S') answer.push(Math.pow(num, 1));
    else if (dartResult[i] === 'D') answer.push(Math.pow(num, 2));
    else if (dartResult[i] === 'T') answer.push(Math.pow(num, 3));
    else if (dartResult[i] === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
    else if (dartResult[i] === '#') answer[answer.length - 1] *= (-1);
  }
  return answer.reduce((acc, cur) => acc + cur);
}