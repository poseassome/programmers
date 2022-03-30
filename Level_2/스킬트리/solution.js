function solution(skill, skill_trees) {
  var answer = 0;
  skill = skill.split('');
  for (let i = 0; i < skill_trees.length; i++) {
    let skillOne = skill_trees[i].split('');
    let tmp = '';
    for (let x of skillOne) {
      if (skill.includes(x)) tmp += x;
    }
    if ((skill.join('').includes(tmp) && skill[0] === tmp[0]) || tmp.length === 0) answer++;
  }
  return answer;
}