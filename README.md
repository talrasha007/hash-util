#hash-util
  A hash helper, including md5, sha1, sha256, sha512, sortable-hash and geohash.

## Install
```
npm install hash-util
```

## API
[Node.js crypto hash](http://nodejs.org/api/crypto.html#crypto_class_hash) wrapper.
  Default encoding is 'hex'.
  - hash.md5(str, [encoding])
  - hash.sha1(str, [encoding])
  - hash.sha256(str, [encoding])
  - hash.sha512(str, [encoding])  

[Sortable-hash](https://github.com/juliangruber/sortable-hash) wrapper.
  - hash.sortable.encode(values[, options])
  - hash.sortable.decode(string, numValues)  

[Geohash](http://en.wikipedia.org/wiki/Geohash).
  - hash.geo.encode(coordinate, precision) // coordinate => { lng: 116.389550, lat: 39.928167 }
  - hash.geo.decode(string)  

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

var sh = hash.sortable.encode([10, 10, -10]);
console.log(sh); // => skfsmq4xj7d9
console.log(hash.sortable.decode(sh, 3)); // => [ 9.999942779541016, 9.999942779541016, -9.999942779541016 ]

var biggerHash  = hash.sortable.encode([10, 10, -10], 35);
console.log(biggerHash); // => skfsmq4xj7d9v2fsmq4xj7d9v2fsmq4xj3h
console.log(hash.sortable.decode(biggerHash, 3)); // => [ 10, 10, -10 ]

var corrd = { lng: 116.389550, lat: 39.928167 },
    gh = hash.geo.encode(corrd, 8);
console.log(gh); // => wx4g0s8q
console.log(hash.geo.decode(gh)); // => { lng: 116.38967514038086, lat: 39.928178787231445 }
```
