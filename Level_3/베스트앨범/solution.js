function solution(genres, plays) {
  var answer = [];
  const songs = []; // 곡 정보
  const genreSumHash = {}; // 장르별 재생 수
  const genreSumArr = [];

  genres.forEach((genre, id) => {
    songs.push({ id: id, genre: genre, play: plays[id] });
    genreSumHash[genre] = genreSumHash[genre] === undefined ? plays[id] : genreSumHash[genre] + plays[id];
  })

  // 장르와 재생 수 배열로 빼기
  for (const genre in genreSumHash) genreSumArr.push([genre, genreSumHash[genre]]);
  genreSumArr.sort((a, b) => b[1] - a[1]); // 장르별 재생 수 내림차순 정렬

  // 각 장르에서 노래의 재생 수가 높은 순으로 정렬
  for (const genre of genreSumArr) {
    const sorted = songs.filter(song => song.genre === genre[0]).sort((a, b) => b.play - a.play);
    // 상위 2개
    for (let i = 0; i < 2 && i < sorted.length; i++) answer.push(sorted[i].id);
  }
  return answer;
}