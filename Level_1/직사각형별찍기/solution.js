process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  let output = "";
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  let i = 1;
  while (i <= a) {
    output += "*";
    i++;
  }
  let j = 1;
  while (j <= b) {
    console.log(output);
    j++;
  }
});