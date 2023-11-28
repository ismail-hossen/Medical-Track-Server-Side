const PaymentModel = require("../../models/payments.model");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createStripePayIntent = async (req, res) => {
  const price = req.body;
  const amount = parseInt(price?.price * 100);
  if (!price || amount < 1) return;
  const { client_secret } = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({ clientSecret: client_secret });
};

const createPayHistory = async (req, res, next) => {
  try {
    const body = req.body;
    const payHistory = new PaymentModel(body);
    const result = await payHistory.save();
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const allPayHistory = async (req, res, next) => {
  try {
    const result = await PaymentModel.find({ email: req.params.email });
    res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { createStripePayIntent, createPayHistory, allPayHistory };
