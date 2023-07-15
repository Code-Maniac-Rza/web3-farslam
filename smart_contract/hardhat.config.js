//https://eth-sepolia.g.alchemy.com/v2/nAJwVz6yd-CE04yKl2F9tEXUVmcFbatv


require("@nomiclabs/hardhat-waffle");

module.exports = {

  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/nAJwVz6yd-CE04yKl2F9tEXUVmcFbatv',
      accounts: ['e48f37d7403872f0948fb3533045f7feee79a29749e41ea4d07fadaf53c88777']
    }
  }

}