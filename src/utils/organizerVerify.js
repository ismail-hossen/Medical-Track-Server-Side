const UserModel = require("../models/userModel");

const organizerVerify = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ email: req.user.email });
    if (!user.role === "organizer") {
      return res.status(403).send({ message: "forbidden access" });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = organizerVerify;
