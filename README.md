hash-util
=========
  A [node.js crypto hash](http://nodejs.org/api/crypto.html#crypto_class_hash) helper.

## Install
```
npm install hash-util
```

## API
  - hash.md5(str, [encoding])
  - hash.sha1(str, [encoding])
  - hash.sha256(str, [encoding])
  - hash.sha512(str, [encoding])
  
  Default encoding is 'hex'.

## Usage
```js
var hash = require('hash-util');

var str = 'abcdefg.....';

console.log(hash.md5(str));
console.log(hash.sha1(str));
console.log(hash.sha256(str));
console.log(hash.sha512(str));

console.log(hash.md5(str, 'base64'));
console.log(hash.sha1(str, 'base64'));
console.log(hash.sha256(str, 'base64'));
console.log(hash.sha512(str, 'base64'));
```