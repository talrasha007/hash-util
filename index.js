var crypto = require('crypto');

function createHash(str, alg, encoding) {
    return crypto.createHash(alg).update(str, 'utf8').digest(encoding || 'hex');
}

exports.md5 = function (str, encoding) {
    return createHash(str, 'md5', encoding);
};

exports.sha1 = function (str, encoding) {
    return createHash(str, 'sha1', encoding);
};

exports.sha256 = function (str, encoding) {
    return createHash(str, 'sha256', encoding);
};

exports.sha512 = function (str, encoding) {
    return createHash(str, 'sha512', encoding);
};
