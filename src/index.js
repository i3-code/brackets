module.exports = function check(str, bracketsConfig) {
    let oStr = str.replace(new RegExp(bracketsConfig.map(bc => bc.join('').replace(/([\[\]\(\)\{\}\|])/g, '\\$1')).join('|'), 'g'),'');
    return (!str) ? true : (str === oStr) ? false : check(oStr, bracketsConfig);
}
