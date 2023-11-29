const {
  createRegCamp,
  regCampsByEmail,
  deleteRegCamp,
  regCampsByOrganizer,
  updateRegCamp,
  completedCampsByEmail,
} = require("../../controllers/participant/registeredCamp.controller");
const tokenVerify = require("../../utils/TokenVerify");
const organizerVerify = require("../../utils/organizerVerify");

const regCampRouter = require("express").Router();

regCampRouter.get("/reg-camps/:email", tokenVerify, regCampsByEmail);
regCampRouter.get(
  "/completed-reg-camps/:email",
  tokenVerify,
  completedCampsByEmail
);
regCampRouter.get(
  "/reg-camps-by-organizer/:email",
  tokenVerify,
  organizerVerify,
  regCampsByOrganizer
);
regCampRouter.post("/join-camp", tokenVerify, createRegCamp);
regCampRouter.patch(
  "/confirm-payment-status/:campId",
  tokenVerify,
  updateRegCamp
);
regCampRouter.delete("/delete-reg-camp/:campId", tokenVerify, deleteRegCamp);

module.exports = regCampRouter;
