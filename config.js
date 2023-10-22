const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  //   mongoConnectionString: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtLifeTime: process.env.JWT_LIFETIME,
};
