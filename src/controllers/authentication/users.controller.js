const UserModel = require("../../models/userModel");

const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    const userModel = new UserModel(user);
    const result = await userModel.save();
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const userEmail = req.params.email;
    const result = await UserModel.findOneAndUpdate(
      { email: userEmail },
      req.body
    );
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

const getUserRole = async (req, res, next) => {
  try {
    const user = req.params;
    const result = await UserModel.findOne({ email: user.email });
    res.status(200).send({ role: result.role });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getUserRole,
  updateUser,
};
