const mongoose = require("mongoose");
const {
  DATABASE_LOCAL_USERNAME,
  DATABASE_LOCAL_PASSWORD,
  DATABASE_PROD,
  DATABASE_LOCAL,
  DB_NAME,
} = require("../config/defaults");

const getConnectionString = () => {
  let connectionUrl;

  if (process.env.NODE_ENV === "development") {
    connectionUrl = DATABASE_LOCAL;
    connectionUrl = connectionUrl.replace(
      "<username>",
      DATABASE_LOCAL_USERNAME
    );
    connectionUrl = connectionUrl.replace(
      "<password>",
      DATABASE_LOCAL_PASSWORD
    );
  } else {
    connectionUrl = DATABASE_PROD;
  }

  return connectionUrl;
};

const connectDB = async () => {
  console.log("connecting to database");
  const mongoURI = getConnectionString();
  await mongoose.connect(mongoURI, { dbName: DB_NAME });
  console.log("connected to database");
};

module.exports = connectDB;
