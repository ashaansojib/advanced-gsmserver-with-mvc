const abcService = require("../models/services");
// @desc  =  add content
// @route =  /api/services/
// access =  privet
exports.createServices = async (req, res, next) => {
  try {
    const createData = await abcService.create(req.body);
    res.status(201).json(createData);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc = get all services
// routes = /api/services/
// access = public
exports.getServices = async (req, res, next) => {
  try {
    const service = await abcService.find();
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.getService = async (req, res, next) => {
  try {
    const single = await abcService.findById(req.params.id);
    res.status(200).json({ success: true, data: single });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
