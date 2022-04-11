function solution(numbers) {
  var answer = 0;
  let num = numbers.split('').sort((a, b) => b - a);
  let MaxNum = Number(num.join(''));
  let arr = PrimeNum(MaxNum);
  for (let i = 2; i <= MaxNum; i++) {
    if (arr[i] == false) continue;
    let temp = i.toString().split('');
    for (let cn of num) {
      let idx = temp.indexOf(cn);
      if (idx > -1) temp.splice(idx, 1);
    }
    if (temp.length == 0) answer++;
  }
  return answer;
}

function PrimeNum(N) {
  let arr = [];
  for (let i = 2; i <= N; i++) {
    if (arr[i] === false) continue;
    for (let j = i + i; j <= N; j += i) {
      arr[j] = false;
    }
  }
  return arr;
}