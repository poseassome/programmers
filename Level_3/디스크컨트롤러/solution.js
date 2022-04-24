function solution(jobs) {
  var answer = 0;
  let queue = [];
  jobs.sort((a, b) => a[0] - b[0]);
  let i = 0, now = 0;
  while (i < jobs.length || queue.length > 0) {
    if (i < jobs.length && jobs[i][0] <= now) {
      queue.push(jobs[i++]);
      continue;
    }
    queue.sort((a, b) => a[1] - b[1]);
    if (queue.length > 0) {
      let job = queue.shift();
      now += job[1];
      answer += now - job[0];
    } else {
      now = jobs[i][0];
    }
  }
  return Math.floor(answer / jobs.length);
}