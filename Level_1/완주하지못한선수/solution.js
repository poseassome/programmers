function solution(participant, completion) {
  var answer = '';
  let sH = new Map();
  for (let x of participant) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of completion) {
    if (sH.has(x)) sH.set(x, sH.get(x) - 1);
  }
  for (let [key, val] of sH) {
    if (val > 0) {
      answer = key;
    }
  }
  return answer;
}