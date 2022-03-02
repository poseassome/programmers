function solution(n, arr1, arr2) {
  var answer = [];
  let max = Math.max(...arr1).toString(2).length;
  arr1 = arr1.map((x) => x.toString(2).padStart(max, '0'));
  arr2 = arr2.map((x) => x.toString(2).padStart(max, '0'));
  for (let i in arr1) {
    let num = "";
    let one = arr1[i].split('');
    let two = arr2[i].split('');
    for (let j in one) {
      if (one[j] === '1' || two[j] === '1') num += String("#");
      if (one[j] === '0' && two[j] === '0') num += String(" ");
    }
    answer.push(num);
  }
  return answer;
}