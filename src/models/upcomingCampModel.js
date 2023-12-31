const { model, Schema } = require("mongoose");

const UpcomingCampSchema = new Schema({
  author: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  campName: {
    type: String,
    required: true,
  },
  targetAudience: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  campFees: {
    type: Number || String,
    required: true,
  },
  services: {
    type: String,
    required: true,
  },
  dateTime: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  professionals: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  participants: {
    type: Number,
  },
});

const UpcomingCampModel = model("upcomingCamps", UpcomingCampSchema);

module.exports = UpcomingCampModel;
