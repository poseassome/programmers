function solution(numbers) {
  var answer = [];
  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
      array.push(Number(numbers[i]) + Number(numbers[k]));
    }
  }
  answer = Array.from(new Set(array)).sort((a, b) => a - b);
  return answer;
}