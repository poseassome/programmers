function solution(s) {
  var answer = true;
  let p = 0;
  let y = 0;
  for (let x of s) {
    if (x == 'p' || x == 'P') p++;
    else if (x == 'y' || x == 'Y') y++;
  }
  if (p !== y) return false;
  return answer;
}