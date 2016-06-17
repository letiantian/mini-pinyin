var pinyin = require('./pinyin.json');

module.exports = function(k) {
    if (pinyin.hasOwnProperty(k)) {
        return pinyin[k];
    }
    return [];
};