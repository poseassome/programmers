function solution(fees, records) {
  var answer = [];
  let cars = [];
  for (let x of records) {
    let car = x.split(" ");
    cars.push(car);
  }
  cars.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  })

  let startTime = 0;
  let endTime = 0;
  while (cars.length) {
    let current = cars.shift();
    let time = current[0].split(":");
    let allTime = Number(time[0]) * 60 + Number(time[1]);
    if (cars.length && cars[0][1] === current[1]) {
      if (current[2] === "IN") startTime = allTime;
      else {
        let spendTime = allTime - startTime;
        endTime += spendTime;
      }
    } else {
      if (current[2] === "IN") {
        let spendTime = 1439 - allTime;
        endTime += spendTime;
      } else {
        let spendTime = allTime - startTime;
        endTime += spendTime;
      }
      if (endTime <= fees[0]) answer.push(fees[1]);
      else {
        let cost = fees[1] + Math.ceil((endTime - fees[0]) / fees[2]) * fees[3];
        answer.push(cost);
      }
      endTime = 0;
    }
  }
  return answer;
}