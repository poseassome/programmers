function solution(s) {
  //문자열 길이 1인 경우
  if (s.length === 1) return 1;
  let strings = [];
  //압축할 문자열 길이는 1부터 시작해서 문자열 길이의 절반을 넘을 수 없다.
  for (let i = 1; i <= s.length / 2; i++) {
    let cnt = 1;
    let string = '';
    for (let j = 0; j < s.length; j += i) { // j인덱스에서부터 i개 문자추출하기 위함
      const current = s.substr(j, i);
      const next = s.substr(j + i, i);
      if (current === next) {
        cnt++;
      } else {
        string = cnt > 1 ? string + cnt + current : string + current;
        cnt = 1;
      }
    }
    strings.push(string.length);
  }
  return Math.min(...strings);
}