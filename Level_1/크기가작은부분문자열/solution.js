function solution(t, p) {
  var answer = 0;
  const len = p.length;
  t.split('').forEach((el, idx) => {
    const temp = t.slice(idx, idx + len);
    if (temp.length === len) answer += (Number(temp) <= Number(p))
  })
  return answer;
}