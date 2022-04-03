function solution(numbers) {
  var answer = [];
  answer = numbers.map((v) => {
    let std = v.toString(2);
    while (true) {
      v = v + 1;
      let num = v.toString(2);
      let cnt = 0;
      std = std.padStart(num.length, '0');
      for (let i = num.length - 1; i >= 0; i--) {
        if (std[i] !== num[i]) {
          cnt++;
        }
        if (cnt > 2) break;
      }
      if (cnt === 2 || cnt === 1) {
        return v;
        break;
      }
    }
  })
  return answer;
}