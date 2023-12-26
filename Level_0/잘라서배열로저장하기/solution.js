function solution(my_str, n) {
  let arr = [], cnt = 0;
  for (let i = cnt; i < my_str.length; i = cnt) {
    arr.push(my_str.substr(cnt, n));
    cnt += n;
  }
  return arr;
}