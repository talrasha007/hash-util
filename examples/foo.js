var hash = require('../');

var str = 'abcdefg.....';

console.log(hash.md5(str));
console.log(hash.sha1(str));
console.log(hash.sha256(str));
console.log(hash.sha512(str));

console.log(hash.md5(str, 'base64'));
console.log(hash.sha1(str, 'base64'));
console.log(hash.sha256(str, 'base64'));
console.log(hash.sha512(str, 'base64'));
