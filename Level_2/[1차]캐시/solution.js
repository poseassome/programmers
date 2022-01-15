function solution(cacheSize, cities) {
  var answer = 0;
  let cache = Array.from({ length: cacheSize }, () => 0);
  cities.forEach(x => {
    x = x.toLowerCase();
    let pos = -1;
    for (let i = 0; i < cacheSize; i++) if (x === cache[i]) pos = i;
    if (pos === -1) {
      cache.unshift(x);
      cache.pop();
      answer += 5;
    } else {
      cache.splice(pos, 1);
      cache.unshift(x);
      answer += 1;
    }
  })
  return answer;
}