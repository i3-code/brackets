module.exports = function check(str, bracketsConfig) {
  let found = 1;
  let oldStr;
  while(found == 1) {
    oldStr = str;
    for (let i of bracketsConfig) {
      str = str.split(i[0] + i[1]).join('');
    }
    if (oldStr === str) { found = 0; }
}
  return (str.length == 0) ? true : false;
}
