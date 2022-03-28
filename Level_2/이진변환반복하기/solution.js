function solution(s) {
  var answer = [];
  let zero = 0, cnt = 0;
  while (s.length > 1) {
    let length = s.length;
    cnt++;
    s = s.split('').filter((v) => v !== '0').join('');
    zero += (length - s.length);
    s = s.length.toString(2);
  }
  answer.push(cnt, zero);
  return answer;
}