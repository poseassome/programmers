function solution(info, query) {
  var answer = [];

  function standard(arr) {
    arr = arr.split(' and ');
    let last = arr.pop().split(' ');
    while (last.length) arr.push(last.shift());
    return arr;
  }

  for (let i = 0; i < query.length; i++) {
    let std = standard(query[i]);
    let pass = 0;
    for (let j = 0; j < info.length; j++) {
      let apply = standard(info[j]);
      let num = 0;
      for (let k = 0; k < 5; k++) {
        if (k === 4 && Number(apply[k]) >= Number(std[k])) num++;
        if (k !== 4 && (apply[k] === std[k] || std[k] === '-')) num++;

        /* 2안 */
        // if (std[k] === '-') {
        //   num++;
        //   continue;
        // }
        // if (k === 4 && Number(apply[k]) < Number(std[k])) break;
        // if (k !== 4 && (apply[k] !== std[k])) break;
        // num++;
      }
      if (num === 5) pass++;
    }
    answer.push(pass);
  }
  return answer;
}