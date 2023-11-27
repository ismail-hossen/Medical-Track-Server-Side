const {
  createRegCamp,
  regCampsByEmail,
  deleteRegCamp,
  regCampsByOrganizer,
  updateRegCamp,
} = require("../../controllers/participant/registeredCamp.controller");

const regCampRouter = require("express").Router();

regCampRouter.get("/reg-camps/:email", regCampsByEmail);
regCampRouter.get("/reg-camps-by-organizer/:email", regCampsByOrganizer);
regCampRouter.post("/join-camp", createRegCamp);
regCampRouter.patch("/confirm-payment-status/:campId", updateRegCamp);
regCampRouter.delete("/delete-reg-camp/:campId", deleteRegCamp);

module.exports = regCampRouter;
