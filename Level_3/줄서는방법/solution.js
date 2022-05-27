function solution(n, k) {
  var answer = [];
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let fac = arr.reduce((acc, val) => acc * val, 1);
  k--;

  while (answer.length !== n) {
    fac = fac / arr.length;
    let temp = arr[Math.floor(k / fac)];
    answer.push(temp);
    k = k % fac;
    arr = arr.filter(e => e !== temp);
    // console.log(fac, temp, answer, k, arr)
  }
  return answer;
}