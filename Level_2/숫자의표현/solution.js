function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) answer++
      else if (sum > n) break;
    }
  }
  return answer;
}