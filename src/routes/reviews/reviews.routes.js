const {
  createReview,
  getReviews,
} = require("../../controllers/reviews/reviews.controller");

const reviewRouter = require("express").Router();

reviewRouter.post("/create-review", createReview);
reviewRouter.get("/reviews", getReviews);

module.exports = reviewRouter;
