function solution(arr) {
  var answer = 0;
  for (let x of arr) {
    answer += x;
  }
  return (answer / arr.length);
}