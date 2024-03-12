const express = require("express");
const { getServices, getService } = require("../controllers/services");
const router = express.Router();

router.route("/").get(getServices);

router.route("/:id").get(getService);
module.exports = router;
