const { model, Schema, ObjectId } = require("mongoose");

const PaymentSchema = new Schema({
  camp: {
    campId: {
      type: ObjectId,
      required: true,
    },
    campName: {
      type: String,
    },
    campFees: {
      type: String || Number,
    },
  },
  email: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const PaymentModel = model("payments", PaymentSchema);

module.exports = PaymentModel;
