function solution(priorities, location) {
  var answer = 0;
  let priorities_idx = [];    // 초기 문서의 인덱스 저장
  for (let i = 0; i < priorities.length; i++) {
    priorities_idx.push(i);
  }
  let print, print_idx;
  while (priorities[0]) {
    print = priorities.shift();   // 맨 앞의 문서 판별
    if (priorities.some((priorities) => priorities > print)) {    // 맨 앞의 문서보다 우선순위가 높은 문서가 있는지
      priorities.push(print);   // 있으면 현재 문서 맨 뒤로 이동
      priorities_idx.push(priorities_idx.shift());    // 인덱스도 맨 뒤로 이동
    }
    else {
      answer++;
      print_idx = priorities_idx.shift();
      if (print_idx == location) break;
    }
  }
  return answer;
}