function solution(id_list, report, k) {
  var answer = [];
  let call = new Map();
  let user = new Map();
  report = [...new Set(report)].map(arr => { return arr.split(' ') });
  report.forEach((tmp) => {
    call.set(tmp[1], call.get(tmp[1]) + 1 || 1);
  })
  report.forEach((tmp) => {
    if (call.get(tmp[1]) >= k) user.set(tmp[0], user.get(tmp[0]) + 1 || 1);
  })
  answer = id_list.map(val => user.get(val) || 0);
  return answer;
}

/* 다른 풀이 */
function solution(id_list, report, k) {
  var answer = new Array(id_list.length);
  answer.fill(0);
  const report_list = {};
  id_list.map((user) => {
    report_list[user] = []; //	{ muzi: [], frodo: [], apeach: [], neo: [] }
  })
  report.map((user) => {
    const [user_id, report_id] = user.split(' ')
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  })
  for (let key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1
      })
    }
  }
  return answer;
}