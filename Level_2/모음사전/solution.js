function solution(word) {
  let alpha = ['A', 'E', 'I', 'O', 'U'];
  for (let i = 1; i <= 5; i++) {
    DFS(alpha, 0, i);
  }
  return answers.sort().indexOf(word) + 1;
}

let answers = [];
function DFS(alpha, L, num, arr = []) {
  if (L === num) {
    let str = arr.join('');
    answers.push(str);
  } else {
    for (let i = 0; i < alpha.length; i++) {
      arr.push(alpha[i]);
      DFS(alpha, L + 1, num, arr);
      arr.pop();
    }
  }
}