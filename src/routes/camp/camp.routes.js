const { createCamp } = require("../../controllers/medicalCamp/camp.controller");

const campRouter = require("express").Router();

campRouter.post("/create-camp", createCamp);

module.exports = campRouter;
