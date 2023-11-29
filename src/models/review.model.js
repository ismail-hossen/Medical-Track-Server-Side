const { model, Schema } = require("mongoose");

const ReviewSchema = new Schema(
  {
    campName: { type: String },
    name: { type: String },
    photo: { type: String },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ReviewModel = model("reviews", ReviewSchema);

module.exports = ReviewModel;
