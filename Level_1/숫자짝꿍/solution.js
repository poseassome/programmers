function solution(X, Y) {
  let answer = '';
  const arrX = X.split('');
  const arrY = Y.split('');
  const obj = {};
  arrX.sort((a, b) => b - a);
  arrY.forEach(el => {
    if (obj[el] === undefined) obj[el] = 1;
    else obj[el]++;
  })
  arrX.forEach(el => {
    if (obj[el] !== undefined && obj[el] !== 0) {
      obj[el]--;
      answer = answer.concat(el);
    }
  })
  if (answer.length === 0) return '-1';
  if (answer[0] === '0') return '0';
  return answer;
}