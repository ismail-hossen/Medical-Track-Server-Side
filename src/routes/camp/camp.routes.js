const {
  createCamp,
  campsByOrganizer,
  deleteCamp,
  updateCamp,
  getPopularCamps,
  campById,
} = require("../../controllers/medicalCamp/camp.controller");
const tokenVerify = require("../../utils/TokenVerify");
const organizerVerify = require("../../utils/organizerVerify");

const campRouter = require("express").Router();

campRouter.get(
  "/camps-by-organizer/:email",
  tokenVerify,
  organizerVerify,
  campsByOrganizer
);
campRouter.get("/camp-by-id/:campId", campById);
campRouter.get("/popular-camps", getPopularCamps);
campRouter.post("/create-camp", tokenVerify, organizerVerify, createCamp);
campRouter.patch(
  "/update-camp/:campId",
  tokenVerify,
  organizerVerify,
  updateCamp
);
campRouter.delete(
  "/delete-camp/:campId",
  tokenVerify,
  organizerVerify,
  deleteCamp
);

module.exports = campRouter;
