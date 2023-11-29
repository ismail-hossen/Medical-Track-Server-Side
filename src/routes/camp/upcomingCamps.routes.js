const {
  createUpcomingCamp,
} = require("../../controllers/medicalCamp/upcomingCamp.controller");
const tokenVerify = require("../../utils/TokenVerify");
const organizerVerify = require("../../utils/organizerVerify");

const upcomingCampRouter = require("express").Router();

upcomingCampRouter.post(
  "/create-upcoming-camp",
  tokenVerify,
  organizerVerify,
  createUpcomingCamp
);

module.exports = upcomingCampRouter;
