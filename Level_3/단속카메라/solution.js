function solution(routes) {
  var answer = 1;
  routes.sort((a, b) => a[0] - b[0]);
  let end = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    const [s, e] = routes[i];
    if (s <= end) {
      if (e < end) {
        end = e;
      }
    } else {
      answer++;
      end = e;
    }
  }
  return answer;
}