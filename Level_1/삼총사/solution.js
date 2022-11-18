function solution(number) {
  let answer = 0;
  const three = (current, start) => {
    if (current.length === 3) {
      answer += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }
    for (let i = start; i < number.length; i++) {
      three([...current, number[i]], i + 1);
    }
  }
  three([], 0);
  return answer;
}