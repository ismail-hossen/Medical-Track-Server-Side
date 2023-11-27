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

const campsByOrganizer = async (req, res, next) => {
  try {
    const result = await CampModel.find({
      "author.email": req.params.email,
    });
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

const campById = async (req, res, next) => {
  try {
    const result = await CampModel.findOne({ _id: req.params.campId });
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

const deleteCamp = async (req, res, next) => {
  try {
    const result = await CampModel.deleteOne({ _id: req.params.campId });
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

const updateCamp = async (req, res, next) => {
  try {
    const result = await CampModel.updateOne(
      { _id: req.params.campId },
      { $set: req.body }
    );
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

const getPopularCamps = async (req, res, next) => {
  try {
    const result = await CampModel.find({}).sort({ participants: -1 }).limit(6);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCamp,
  campsByOrganizer,
  deleteCamp,
  updateCamp,
  getPopularCamps,
  campById,
};
