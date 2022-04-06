function solution(n, words) {
  let turn = 1;
  for (let i = 1; i < words.length; i++) {
    // 단어가 이어지는지 && 중복되지 않았는지
    let pass = (words[i][0] === words[i - 1][words[i - 1].length - 1]) && !(words.slice(0, i).includes(words[i]));
    if (i % n === 0) turn++;
    if (!pass) return [i % n + 1, turn];
  }
  return [0, 0];
}