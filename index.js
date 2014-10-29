var crypto = require('crypto'),
    sh = require('sortable-hash');

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

exports.sortable = sh;

exports.geo = {
    decode: function (hash) {
        var decoded = sh.decode(hash, 2);
        return {
            lng: decoded[0] * 180 / 100,
            lat: decoded[1] * 90 / 100
        }
    },

    encode: function (coord, precision) {
        return sh.encode([
            (coord.lng || coord.longitude) * 100 / 180,
            (coord.lat || coord.latitude) * 100 / 90
        ], precision);
    }
};
