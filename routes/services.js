const express = require("express");
const {
  getServices,
  getService,
  createServices,
} = require("../controllers/services");
const router = express.Router();

router.route("/").get(getServices);
router.route("/").post(createServices);
router.route("/:id").get(getService);
module.exports = router;
