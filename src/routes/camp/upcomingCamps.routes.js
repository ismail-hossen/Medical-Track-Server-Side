const {
  createUpcomingCamp,
} = require("../../controllers/medicalCamp/upcomingCamp.controller");
const organizerVerify = require("../../utils/organizerVerify");
const tokenVerify = require("../../utils/tokenVerify");

const upcomingCampRouter = require("express").Router();

upcomingCampRouter.post(
  "/create-upcoming-camp",
  tokenVerify,
  organizerVerify,
  createUpcomingCamp
);

module.exports = upcomingCampRouter;
