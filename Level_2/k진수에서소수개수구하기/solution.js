function solution(n, k) {
  var answer = 0;
  n = n.toString(k);
  let num = '';
  for (let x of n) {
    if (x === '0') {
      if (isPrimeNumber(num)) answer++;
      num = '';
      continue;
    }
    num += x;
  }
  if (isPrimeNumber(num)) answer++;
  return answer;
}

function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}