const {
  createStripePayIntent,
  createPayHistory,
} = require("../../controllers/payments/payments.controller");

const paymentsRouter = require("express").Router();

paymentsRouter.post("/create-payment-intent", createStripePayIntent);
paymentsRouter.post("/reg-camp-payment", createPayHistory);

module.exports = paymentsRouter;
