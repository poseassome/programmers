function solution(record) {
  var answer = [];
  let sH = new Map();
  record.map((v) => {
    let arr = v.split(' ');
    if (arr[2]) sH.set(arr[1], arr[2]);
  });
  record.map((v) => {
    let arr = v.split(' ');
    if (arr[0] === "Enter") answer.push(sH.get(arr[1]) + "님이 들어왔습니다.");
    if (arr[0] === "Leave") answer.push(sH.get(arr[1]) + "님이 나갔습니다.");
  })
  return answer;
}