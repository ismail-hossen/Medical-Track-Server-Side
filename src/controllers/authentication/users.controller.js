const UserModel = require("../../models/userModel");

const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    const userModel = new UserModel(user);
    const result = await userModel.save();
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
};
