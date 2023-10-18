function solution(my_string, k) {
  let str = '';
  while (k) {
    str += my_string;
    k--;
  }
  return str;
}