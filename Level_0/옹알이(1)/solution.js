function solution(babbling) {
  let answer = 0;
  const words = ["aya", "ye", "woo", "ma"];
  for (const x of babbling) {
    let possible = 0;
    for (const word of words) {
      if (x.includes(word)) possible += word.length;
    }
    if (possible === x.length) answer++;
  }
  return answer;
}