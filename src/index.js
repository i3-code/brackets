module.exports = function check(str, bracketsConfig) {
    let found = 1;
    while(found == 1) {
        let oldStr = str;
        bracketsConfig.map(n => str = str.replace(n[0] + n[1], ''));
        if (oldStr === str) { found = 0; }
    }
    return (str.length == 0) ? true : false;
}



