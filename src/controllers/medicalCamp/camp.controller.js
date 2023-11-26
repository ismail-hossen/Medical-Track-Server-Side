const CampModel = require("../../models/campModel");

const createCamp = async (req, res, next) => {
  try {
    const body = req.body;
    const campModel = new CampModel(body);
    const result = await campModel.save();
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { createCamp };
