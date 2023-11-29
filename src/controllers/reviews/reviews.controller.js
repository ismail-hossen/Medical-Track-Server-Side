const ReviewModel = require("../../models/review.model");

const createReview = async (req, res, next) => {
  try {
    const body = req.body;
    const review = new ReviewModel(body);
    const result = await review.save();
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

const getReviews = async (req, res, next) => {
  try {
    const result = await ReviewModel.find({}).sort({ createdAt: -1 }).limit(3);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createReview,
  getReviews,
};
