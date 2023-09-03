function solution(s) {
  let answer = 0, cnt = 1, idx = 1;
  s = s.split('');
  while (s.length) {
    const first = s[0];
    if (first === s[idx]) cnt++;
    else cnt--;
    if (cnt !== 0) idx++;
    else {
      answer++;
      s.splice(0, idx + 1);
      idx = 1;
      cnt = 1;
    }
  }
  return answer;
}