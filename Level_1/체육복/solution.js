function solution(n, lost, reserve) {
  let nothing = lost.filter((item) => !reserve.includes(item));
  let havetwo = reserve.filter((item) => !lost.includes(item));
  let answer = n - nothing.length;
  while (havetwo.length) {
    const r = havetwo.pop();
    if (nothing.includes(r - 1) || nothing.includes(r + 1) || nothing.includes(r)) answer += 1;
  }
  return answer > n ? n : answer;
}