function solution(a, b) {
  var answer = '';
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(`2016, ${a}, ${b}`);
  answer = day[date.getDay()];
  return answer;
}