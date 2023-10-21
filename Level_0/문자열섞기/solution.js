function solution(str1, str2) {
  let str = '';
  for (let i = 0; i <= Math.max(str1.length, str2.length); i++) {
    str += (str1[i] || '') + (str2[i] || '');
  }
  return str;
}