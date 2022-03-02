function solution(citations) {
  var answer = 0;
  citations = citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  answer = i;
  return answer;
}