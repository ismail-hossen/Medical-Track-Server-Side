require("dotenv").config();
const express = require("express");
const app = express();
const applyMiddleware = require("./middlewares/applyMiddlewares");
const globalErrorHandler = require("./utils/globalErrorHandler");
const authRouter = require("./routes/authentication");
const campRouter = require("./routes/camp/camp.routes");
const regCampRouter = require("./routes/participants/regCamp.routes");
const paymentsRouter = require("./routes/payments/payments.routes");
const reviewRouter = require("./routes/reviews/reviews.routes");
const upcomingCampRouter = require("./routes/camp/upcomingCamps.routes");

applyMiddleware(app);

app.use(authRouter);
app.use(campRouter);
app.use(upcomingCampRouter);
app.use(regCampRouter);
app.use(paymentsRouter);
app.use(reviewRouter);

app.get("/health", (req, res) => {
  res.send("Medical Camp is running...");
});

app.all("*", (req, _res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

module.exports = app;
