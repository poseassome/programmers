function solution(today, terms, privacies) {
  var answer = [];
  const termList = {};
  terms.forEach(el => {
    const [type, term] = el.split(" ");
    termList[type] = Number(term);
  });
  privacies.forEach((el, idx) => {
    const [date, type] = el.split(" ");
    const getdate = new Date(date);
    getdate.setMonth(getdate.getMonth() + termList[type]);
    if (getdate <= new Date(today)) answer.push(idx + 1);
  })
  return answer;
}