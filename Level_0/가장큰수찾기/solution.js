function solution(array) {
  const max = [...array].sort((a, b) => b - a)[0];
  const idx = array.indexOf(max);
  return [max, idx];
}