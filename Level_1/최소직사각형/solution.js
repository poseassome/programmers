function solution(sizes) {
  var answer = 0;
  let width = 0;
  let height = 0;
  for (let size of sizes) {
    const long = size[0] < size[1] ? size[1] : size[0];
    const short = size[0] < size[1] ? size[0] : size[1];
    width = width < long ? long : width;
    height = height < short ? short : height;
  }
  answer = width * height;
  return answer;
}