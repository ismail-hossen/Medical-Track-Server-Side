const CampModel = require("../../models/campModel");
const RegCampModel = require("../../models/participantModel");

const createRegCamp = async (req, res, next) => {
  try {
    const body = req.body;
    const campId = body.camp.id;
    const regCampModel = new RegCampModel(body);
    const result = await regCampModel.save();
    const camp = await CampModel.findById({ _id: campId });
    await CampModel.updateOne(
      { _id: campId },
      { $set: { participants: camp?.participants + 1 } }
    );
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

const regCampsByEmail = async (req, res, next) => {
  try {
    const email = req.params.email;
    const result = await RegCampModel.find({ email });
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

const completedCampsByEmail = async (req, res, next) => {
  try {
    const currentDateTime = new Date();
    const email = req.params.email;
    const result = await RegCampModel.find({
      email,
      "camp.dateTime": { $lt: currentDateTime },
      paymentStatus: true,
      confirmationStatus: "Confirm",
    });
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

const regCampsByOrganizer = async (req, res, next) => {
  try {
    const email = req.params.email;
    const result = await RegCampModel.find({ "camp.organizer.email": email });
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

const updateRegCamp = async (req, res, next) => {
  try {
    const result = await RegCampModel.updateOne(
      { _id: req.params.campId },
      { $set: req.body }
    );
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

const deleteRegCamp = async (req, res, next) => {
  try {
    const id = req.params.campId;
    const result = await RegCampModel.findByIdAndDelete({ _id: id });
    res.status(204).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createRegCamp,
  regCampsByEmail,
  deleteRegCamp,
  regCampsByOrganizer,
  updateRegCamp,
  completedCampsByEmail,
};
