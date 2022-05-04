function solution(begin, target, words) {
  var answer = 0;
  const queue = [];
  const visit = Array(words.length);
  queue.push([begin, answer]);

  while (queue.length) {
    let [s, cnt] = queue.shift();
    if (s == target) return cnt;
    words.forEach((w, i) => {
      // words의 단어들인 w와 begin의 문자를 비교하여 서로 다른 부분의 인덱스들을 구한다. 
      const idx = [...w].reduce((a, c, i) => (
        c != s[i] ? a.push(i) : a, a
      ), []);
      // words와 begin이 1개의 문자가 다르고 방문하지 않은 경우(변환된 문자가 아닌 경우) 
      if (idx.length == 1 && !visit[i]) {
        visit[i] = 1;
        queue.push([w, ++cnt]);
      }
    })
  }
  return answer;
}