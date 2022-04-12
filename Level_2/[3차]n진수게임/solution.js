function solution(n, t, m, p) {
  var answer = '';
  let cnt = 0;
  while (answer.length < t * m) {
    answer += cnt.toString(n).toUpperCase();
    cnt++;
  }
  return answer.split("").filter((x, idx) => (idx % m) + 1 === p).slice(0, t).join("");
}