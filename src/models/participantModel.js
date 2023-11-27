const { model, Schema, ObjectId } = require("mongoose");

const RegCampSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: Boolean,
    default: false,
  },
  confirmationStatus: {
    type: String,
    default: "Pending",
  },
  camp: {
    id: {
      type: ObjectId,
      required: true,
    },
    organizer: {
      name: { type: String },
      email: {
        type: String,
        required: true,
      },
    },
    campName: {
      type: String,
    },
    dateTime: {
      type: String,
    },
    location: {
      type: String,
    },
    campFees: {
      type: Number || String,
    },
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  healthIssues: {
    type: String,
  },
});

const RegCampModel = model("regCamp", RegCampSchema);

module.exports = RegCampModel;
