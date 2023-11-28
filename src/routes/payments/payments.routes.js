const {
  createStripePayIntent,
  createPayHistory,
  allPayHistory,
} = require("../../controllers/payments/payments.controller");
const tokenVerify = require("../../utils/TokenVerify");

const paymentsRouter = require("express").Router();

paymentsRouter.get("/all-payment-history/:email", tokenVerify, allPayHistory);
paymentsRouter.post("/create-payment-intent", createStripePayIntent);
paymentsRouter.post("/reg-camp-payment", createPayHistory);

module.exports = paymentsRouter;
