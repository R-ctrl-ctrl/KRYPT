require("@nomiclabs/hardhat-waffle");
const dotenv = require('dotenv')

dotenv.config()


module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/-v5Hd1XePzz2bP_dkYNBAhq99UIKqyi3',
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};
