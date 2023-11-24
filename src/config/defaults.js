require("dotenv").config();

const config = {
  LOCAL_CLIENT: process.env.LOCAL_CLIENT,
  CLIENT: process.env.CLIENT,
  DATABASE_LOCAL_USERNAME: process.env.DATABASE_LOCAL_USERNAME,
  DATABASE_LOCAL_PASSWORD: process.env.DATABASE_LOCAL_PASSWORD,
  DATABASE_LOCAL: process.env.DATABASE_LOCAL,
  DATABASE_PROD: process.env.DATABASE_PROD,
  DB_NAME: process.env.DB_NAME,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
};

module.exports = Object.freeze(config);
