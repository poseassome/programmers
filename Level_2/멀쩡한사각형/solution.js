function solution(w, h) {
  var answer = 1;
  const gcd = greatestCommonDivisor(w, h)
  answer = w * h - (h + w - gcd)
  return answer;
}

let greatestCommonDivisor = (a, b) => {
  while (b > 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}


/* 기울기를 사용한 풀이 */
function solution(w, h) {
  const slope = h / w;
  let result = 0;

  for (let i = 1; i <= w; i++) {
    result += Math.ceil(slope * i); // 쓸 수 없는 사각형
  }

  return ((h * w) - result) * 2;
}