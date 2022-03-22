function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let queue = Array.from({ length: bridge_length }, () => 0);
  while (true) {
    queue.shift();
    queue.push(0);
    answer++;
    let bridgeWeight = queue.reduce((acc, cur) => acc + cur);
    if ((bridgeWeight + truck_weights[0]) <= weight) {
      const ontruck = truck_weights.shift();
      queue[bridge_length - 1] = ontruck;
      bridgeWeight += ontruck;
    }
    if (bridgeWeight === 0) break;
  }
  return answer;
}