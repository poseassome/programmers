function solution(n) {
  var answer = '';
  const oneTwoFour = ['4', '1', '2']
  while (n > 0) {
    const num = n % 3
    answer = oneTwoFour[num] + answer;
    if (num === 0) {
      n = Math.floor((n - 1) / 3)
    } else {
      n = Math.floor(n / 3)
    }
  }
  return answer;
}