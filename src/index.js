module.exports = function check(str, bracketsConfig) {
  let found = 1;
  let oldStr;
  while(found == 1) {
    oldStr = str;
    for (let bracket of bracketsConfig) {
      str = str.split(bracket[0] + bracket[1]).join('');
    }
    if (oldStr === str) { found = 0; }
}
  return (str.length == 0) ? true : false;
}
