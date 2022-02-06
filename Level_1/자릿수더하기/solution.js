function solution(n) {
  var answer = 0;
  let num = String(n).split("");
  for (let i = 0; i < num.length; i++) {
    answer += Number(num[i]);
  }
  return answer;

  // 다른 사람 풀이
  // return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}