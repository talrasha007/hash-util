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

