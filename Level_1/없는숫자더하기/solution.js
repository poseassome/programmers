function solution(numbers) {
  var answer = 0;
  let sH = new Map;
  for (let i = 0; i <= 9; i++) {
    sH.set(i, 1);
  }
  for (let x of numbers) {
    if (sH.has(x)) sH.set(x, sH.get(x) - 1);
  }
  for (let [key, val] of sH) {
    if (val > 0) answer += key;
  }
  return answer;
}