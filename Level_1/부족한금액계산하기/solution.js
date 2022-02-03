function solution(price, money, count) {
  var answer = 0;
  let cost = 0;
  for (let i = 1; i <= count; i++) {
    cost += price * i;
  }
  if ((money - cost) < 0) answer = Math.abs(money - cost);
  else answer = 0;
  return answer;
}