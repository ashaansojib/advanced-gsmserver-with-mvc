const express = require("express");
const { getDemos } = require("../controllers/demo");
const router = express.Router();

router.route("/").get(getDemos);

module.exports = router;
