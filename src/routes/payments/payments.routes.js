const {
  createStripePayIntent,
  createPayHistory,
  allPayHistory,
} = require("../../controllers/payments/payments.controller");

const paymentsRouter = require("express").Router();

paymentsRouter.get("/all-payment-history/:email", allPayHistory);
paymentsRouter.post("/create-payment-intent", createStripePayIntent);
paymentsRouter.post("/reg-camp-payment", createPayHistory);

module.exports = paymentsRouter;
