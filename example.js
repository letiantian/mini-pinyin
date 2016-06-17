var pinyin = require('.');

console.log(pinyin('你'));   // [ 'nǐ' ]
console.log(pinyin('好'));   // [ 'hǎo', 'hào' ]
console.log(pinyin('你好')); // []
console.log(pinyin('！'));   // []