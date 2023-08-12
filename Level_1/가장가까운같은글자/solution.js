function solution(s) {
  let check = {};
  return s.split('').map((el, idx) => {
    if (check[el] !== undefined) {
      const distance = idx - check[el];
      check[el] = idx;
      return distance;
    } else {
      check[el] = idx;
      return -1;
    }
  })
}