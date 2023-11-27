const {
  createRegCamp,
  regCampsByEmail,
  deleteRegCamp,
} = require("../../controllers/participant/registeredCamp.controller");

const regCampRouter = require("express").Router();

regCampRouter.get("/reg-camps/:email", regCampsByEmail);
regCampRouter.post("/join-camp", createRegCamp);
regCampRouter.delete("/delete-reg-camp/:campId", deleteRegCamp);

module.exports = regCampRouter;
