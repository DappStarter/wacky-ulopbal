require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture struggle renew saddle arrange gesture ghost army giggle'; 
let testAccounts = [
"0x6bc7d0d8c7ea4809202e3f47877581f57be8519479c8e77221136520b4692141",
"0xc618d5a51dc068360e7337ab9ce4e6f91d38853dd135ab1d26949db9b739fee6",
"0x6f402d7b9d1bb2327bcc33d4b2fdd4ceed7cb2b5303fb55bb6941a76169e5d3a",
"0x5e80e9a304e1c3b0eec99814ad9afabd9809b079a31ad3032037dd50934c70aa",
"0xa14e5363877870aad69a83782d6506ff587de888f9b8a7c3a92a43d82d30bbe9",
"0x028c4115dd57059a7421e1cd0377f534db20ec936629c88ccfca515a6cad02bb",
"0x334c162ac2a6773377ea376c21c006bbda72b4a93a0dd3d5713ed83ef0d3991d",
"0xae518539aa8132132f94112a2aa16e0da71c9566eaa4b148ffab02bc0cbbdba3",
"0x87b5fccfbed038abb5a7875edd29507abb81ff9a51db8c3f87855a633a300439",
"0x3031785d8acdb6156a2d7d3a77e89480637166df776b7abb2c14fd9b4d6a5bf1"
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
            version: '^0.5.11'
        }
    }
};
