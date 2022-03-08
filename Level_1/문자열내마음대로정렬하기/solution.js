function solution(strings, n) {
  strings.sort((a, b) => {
    let one = a[n];
    let two = b[n];
    if (one === two) return (a > b) - (b > a);
    else return (one > two) - (two > one);
  })
  return strings;
}