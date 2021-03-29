const express = require("express");

const {
  getalldata,
  newdata,
} = require("../controller/Dataclass");

const router = express.Router();

// router.route("/create").post(newdata);
router.route('/').get(getalldata)

module.exports = router;
