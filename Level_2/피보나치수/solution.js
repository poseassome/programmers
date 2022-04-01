function solution(n) {
  let answer = fibo(n) % 1234567;
  return answer;
}

function fibo(v) {
  let number = [];
  number[0] = 0;
  number[1] = 1;
  number[2] = 1;
  for (let i = 3; i <= v; i++) {
    number[i] = (number[i - 1] % 1234567 + number[i - 2] % 1234567);
  }
  return number[v];
}