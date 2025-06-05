const edHd = require('ed25519-hd-key');
const { Buffer } = require('buffer');

window.hederaUtil = {
    getKeypair: function (path, seedHex) {
        const seed = Buffer.from(seedHex, 'hex');
        
        const { key }  = edHd.derivePath(path, seed);
        const pubKey = edHd.getPublicKey(key);
        return {key, pubKey};
    }
};
