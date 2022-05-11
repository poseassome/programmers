function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 0;
  let right = times[times.length - 1] * n; // 최대심사시간 <- 가장 시간이 오래걸리는 쪽으로 모든 사람이 갔을 때
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    const cnt = times.reduce((result, cur) => {
      return result + Math.floor(mid / cur)
    }, 0);

    if (cnt >= n) right = mid - 1;
    else if (cnt < n) left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }
  return left;
}