const ErrorResponse = require("../utils/errorResponse");
const abcService = require("../models/services");
const asyncHandler = require("../middleware/async");
// @desc  =  add content
// @route =  /api/services/
// access =  privet
exports.createServices = asyncHandler(async (req, res, next) => {
  const createData = await abcService.create(req.body);
  res.status(201).json(createData);
});

// @desc = get all services
// routes = /api/services/
// access = public
exports.getServices = async (req, res, next) => {
  try {
    const service = await abcService.find();
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    next(error);
  }
};

exports.getService = asyncHandler(async (req, res, next) => {
  const single = await abcService.findById(req.params.id);
  if (!single) {
    return next(
      new ErrorResponse(`Services not found with id of ${req.params.id}`, 400)
    );
  }
  res.status(200).json({ success: true, data: single });
});
