function solution(k, dungeons) {
  const visited = new Array(dungeons.length).fill(false);
  let clear = 0;

  const DFS = (k, curCnt) => {
    //현재 클리어 횟수와 전의 클리어 횟수를 비교
    clear = Math.max(curCnt, clear);
    for (let i = 0; i < dungeons.length; i++) {
      const [minK, useK] = dungeons[i];
      //현재 피로도보다 크고 확인한적이 없다면            
      if (k >= minK && !visited[i]) {
        //확인, 피로도 감소 및 카운트 증가 후 재귀  
        visited[i] = true;
        DFS(k - useK, curCnt + 1);
        visited[i] = false;
      }
    }
  }
  DFS(k, 0);

  return clear;
}