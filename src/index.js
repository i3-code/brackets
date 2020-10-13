module.exports = function check(str, bracketsConfig) {
    while (str !== (str = str.replace(new RegExp(bracketsConfig.map(bc => bc.join('').replace(/(\W)/g, '\\$1')).join('|'), 'g'),'')));
    return (!str);
}
