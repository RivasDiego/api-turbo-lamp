var {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
var express = require("express");
var router = express.Router();
var passport = require("passport");


router.get("/", getAllUsers);
router.get("/:username", getUser);
router.post("/", createUser);
router.put("/:username",passport.authenticate("jwt", { session: false }), updateUser);
router.delete("/:username", passport.authenticate("jwt", { session: false }), deleteUser);

module.exports = router;
