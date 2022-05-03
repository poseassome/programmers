function solution(sticker) {
  const len = sticker.length + 2;
  const dp1 = new Array(len).fill(0);
  const dp2 = new Array(len).fill(0);

  if (sticker.length === 1) return sticker[0];

  // 첫 스티커를 뜯는 경우 마지막 스티커는 뜯을 수 없으므로 len-1 까지 반복
  for (let i = 2; i < len - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i - 2]);
  }

  // 첫 스티커를 뜯지 않는 경우 마지막 스티커를 뜯을 수 있으므로 len 까지 반복하고 i는 3부터 시작
  for (let i = 3; i < len; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i - 2]);
  }

  return Math.max(dp1[len - 2], dp2[len - 1]);
}