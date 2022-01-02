function solution(s) {
  var answer = [];
  let tmp = "";
  let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (!Number(s[i]) && s[i] != "0") {
      tmp += s[i];
      switch (tmp) {
        case num[0]:
          tmp = "0";
          answer.push(tmp);
          tmp = "";
          break;
        case num[1]:
          tmp = "1";
          answer.push(tmp);
          tmp = "";
          break;
        case num[2]:
          tmp = "2";
          answer.push(tmp);
          tmp = "";
          break;
        case num[3]:
          tmp = "3";
          answer.push(tmp);
          tmp = "";
          break;
        case num[4]:
          tmp = "4";
          answer.push(tmp);
          tmp = "";
          break;
        case num[5]:
          tmp = "5";
          answer.push(tmp);
          tmp = "";
          break;
        case num[6]:
          tmp = "6";
          answer.push(tmp);
          tmp = "";
          break;
        case num[7]:
          tmp = "7";
          answer.push(tmp);
          tmp = "";
          break;
        case num[8]:
          tmp = "8";
          answer.push(tmp);
          tmp = "";
          break;
        case num[9]:
          tmp = "9";
          answer.push(tmp);
          tmp = "";
          break;
      }
    } else {
      answer.push(s[i]);
    }
  }
  return Number(answer.join(''));
}