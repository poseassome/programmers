/* 최대 공약수 구하기 */
function gcd(a, b) {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/* 최소 공배수 구하기 */
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  var answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}