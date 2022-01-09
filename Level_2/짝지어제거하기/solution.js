function solution(s) {
  var answer = -1;
  let stack = [];
  for (let x of s) {
    if (stack[stack.length - 1] != x) stack.push(x);
    else stack.pop();
  }
  if (stack.length > 0) answer = 0;
  else answer = 1;
  return answer;
}