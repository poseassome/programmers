function solution(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
}