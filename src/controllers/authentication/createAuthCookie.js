require("dotenv").config();
const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = require("../../config/defaults");

const createAuthCookie = (req, res, next) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send({ success: true });
  } catch (err) {
    next(err);
  }
};

module.exports = createAuthCookie;
