const UpcomingCampModel = require("../../models/upcomingCampModel");

const createUpcomingCamp = async (req, res, next) => {
  try {
    const body = req.body;
    const campModel = new UpcomingCampModel(body);
    const result = await campModel.save();
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUpcomingCamp,
};
