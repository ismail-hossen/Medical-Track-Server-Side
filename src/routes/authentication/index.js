const createAuthCookie = require("../../controllers/authentication/createAuthCookie");
const logout = require("../../controllers/authentication/logout");

const router = require("express").Router();

router.post("/jwt", createAuthCookie);
router.post("/logout", logout);

module.exports = router;
