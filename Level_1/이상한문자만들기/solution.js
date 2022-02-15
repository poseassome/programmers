function solution(s) {
  var answer = '';
  let idx = 0;
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      idx = 0;
      answer += " ";
    }
    else {
      idx % 2 === 0 ? answer += s[i].toUpperCase() : answer += s[i].toLowerCase();
      idx++;
    }
  }
  return answer;
}