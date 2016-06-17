# mini-pinyin

Get tone(pinyin) of Chinese character.

## Install
```
$ npm install mini-pinyin --save
```

## Example
```js
var pinyin = require('mini-pinyin');

console.log(pinyin('你'));   // [ 'nǐ' ]
console.log(pinyin('好'));   // [ 'hǎo', 'hào' ]
console.log(pinyin('你好')); // []
console.log(pinyin('！'));   // []
```

## License
MIT