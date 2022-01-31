function solution(answers) {
  var answer = [];
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let ch = { col1: 0, col2: 0, col3: 0 };
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === one[i % 5]) ch.col1++;
    if (answers[i] === two[i % 8]) ch.col2++;
    if (answers[i] === three[i % 10]) ch.col3++;
  }
  if (Math.max(ch.col1, ch.col2, ch.col3) === ch.col1) answer.push(1);
  if (Math.max(ch.col1, ch.col2, ch.col3) === ch.col2) answer.push(2);
  if (Math.max(ch.col1, ch.col2, ch.col3) === ch.col3) answer.push(3);
  return answer;
}