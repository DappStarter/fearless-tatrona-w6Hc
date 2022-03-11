require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind method inner nature swear security'; 
let testAccounts = [
"0xf201be5e2ce2a80b68807aa8d3d441de40fc24d8b7d38cb0987c70d8d541b688",
"0x4ad039c53fbf0a09bfbf74b6d398bbe382c84ecf248225befc7696be9cd55d68",
"0x4dbdc23fd79d40bb92176ab7517c40308ef1ae70ac65a1f7a59cc226bb086d38",
"0x89c1d3bba7367546380abc4cadd878aef624c2428eccc996ce84f7f22398216a",
"0xdc7d261cf1c0ea9be796ff11709de5490935a8f5c320930065bbd5b38066c654",
"0x5346269b04093b015d311a544902f16ca3fe3678a14280eda51d3242f1b63fe4",
"0x6db9ff9e0a8a017f66f0417b53b63e638911deaf607b309caf8f3d7dff68cfc8",
"0x5fd247ba036102dcbf30857dda62087e67b64e002901415b077fad1f2c463dcc",
"0x76dbeb35f35da4a3bfe649551c00b0e10b47bcb64547a8bedccb6722c54d307a",
"0x35df5c8342db71a0b8bd139abd6a08034b4943f02b491479623412c5e110a462"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

