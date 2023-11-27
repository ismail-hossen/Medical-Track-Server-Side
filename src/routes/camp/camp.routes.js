const {
  createCamp,
  campsByOrganizer,
  deleteCamp,
  updateCamp,
  getPopularCamps,
  campById,
} = require("../../controllers/medicalCamp/camp.controller");

const campRouter = require("express").Router();

campRouter.get("/camps-by-organizer/:email", campsByOrganizer);
campRouter.get("/camp-by-id/:campId", campById);
campRouter.get("/popular-camps", getPopularCamps);
campRouter.post("/create-camp", createCamp);
campRouter.patch("/update-camp/:campId", updateCamp);
campRouter.delete("/delete-camp/:campId", deleteCamp);

module.exports = campRouter;
