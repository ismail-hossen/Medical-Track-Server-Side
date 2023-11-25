const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const applyMiddleware = require("./middlewares/applyMiddlewares");
const connectDB = require("./db/connectDB");
const globalErrorHandler = require("./utils/globalErrorHandler");
const authRouter = require("./routes/authentication");

applyMiddleware(app);

app.use(authRouter);
app.get("/health", (req, res) => {
  res.send("Medical Camp is running....");
});

app.all("*", (req, _res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Medical Camp Management Server is running on port ${port}`);
  });
};

main();
