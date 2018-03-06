const fs = require('fs')
const bitcoin = require('bitcoinjs-lib')
const TxDecoder = require('..');
const rawtx = fs.readFileSync('../fixtures/i_p2pkh_o_p2pkh.hex', 'utf8').split('\n').join('')
const txd = new TxDecoder(rawtx, bitcoin.networks['bitcoin'])
console.log(JSON.stringify(txd.toObject(), null, 2))
