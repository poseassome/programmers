function solution(lottos, win_nums) {
  var answer = [];
  let cnt = 0;
  let num = 0;
  for (let i = 0; i < lottos.length; i++) {
    for (let k = 0; k < win_nums.length; k++) {
      if (lottos[i] === win_nums[k]) {
        cnt++;
      }
    }
  }
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      num++;
    }
  }
  switch (num + cnt) {
    case 6:
      answer.push(1);
      break;
    case 5:
      answer.push(2);
      break;
    case 4:
      answer.push(3);
      break;
    case 3:
      answer.push(4);
      break;
    case 2:
      answer.push(5);
      break;
    case 1:
      answer.push(6);
      break;
    case 0:
      answer.push(6);
      break;
  }
  switch (cnt) {
    case 6:
      answer.push(1);
      break;
    case 5:
      answer.push(2);
      break;
    case 4:
      answer.push(3);
      break;
    case 3:
      answer.push(4);
      break;
    case 2:
      answer.push(5);
      break;
    case 1:
      answer.push(6);
      break;
    case 0:
      answer.push(6);
      break;
  }
  return answer;
}