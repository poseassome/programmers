function solution(new_id) {
  var answer = '';
  new_id = new_id
    .toLowerCase()    /* 1단계 : 소문자로 바꾸기 */
    .replace(/[^\w-_.]/g, '')   /* 2단계 : 소문자, 숫자, -, _, .를 제외한 모든 문자를 제거 */
    .replace(/\.+/g, '.')   /* 3단계 : .가 2번 이상 연속된 부분을 하나로 치환 */
    .replace(/^\.|\.$/g, '')   /* 4단계 : 처음이나 끝에 위치한 . 제거 */
    .replace(/^$/, 'a')   /* 5단계 : 빈 문자열에 a 대입 */
    .slice(0, 15).replace(/\.$/, '');   /* 6단계 : 16자 이상이면, 15개의 문자를 제외한 나머지 문자들을 모두 제거 / 제거 후 .가 끝에 위치하면 . 제거 */
  new_id = new_id.padEnd(3, new_id[new_id.length - 1]);   /* 7단계 : 길이가 2자 이하면, 마지막 문자를 길이가 3이 될 때까지 반복 */
  answer = new_id;
  return answer;
}